<template>
  <div>
    <!-- 导航 -->
    <mbx-nav one-nav="商品管理" two-nav="商品列表"></mbx-nav>
    <!-- 卡片试图 -->
    <el-card>
      <!-- 操作 区域 -->
      <el-row :gutter="30">
       <el-col :span="10">
          <el-input placeholder="请输入关键词" v-model="queryInfo.key" clearable @clear="searchGoods">
            <el-button slot="append" icon="el-icon-search" @click="searchGoods"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addGoods">添加</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表表格 区域 -->
      <el-table :data="userList" stripe border class="user-table">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="id" label="商品编号" width="70"></el-table-column>
		
		  <el-table-column prop="name" label="名字"></el-table-column>
			<el-table-column prop="price" label="价格"></el-table-column>
			<el-table-column prop="num" label="库存"></el-table-column>
		   <el-table-column prop="status" label="库存状态"></el-table-column>
      
        <el-table-column label="操作" width="176">
          <template v-slot="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit" @click="changeUserInfo(scope.row)"></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="delClick(scope.row)"></el-button>
           <!--  <el-tooltip effect="dark" content="分配角色" placement="top" :enterable='false'>
             <el-button size="mini" type="warning" icon="el-icon-setting" @click="allotClick(scope.row)"></el-button>
			  </el-tooltip> -->
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>
    <!-- 添加用户对话框 -->
    <el-dialog
      title="添加商品"
      :visible.sync="addUserShow"
      width="50%"
      :before-close="addClose">
      <el-form :rules="rules" ref="addForm" :model="addForm" label-width="70px">	  
		 
		
        <el-form-item label="商品名" prop='name'>
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop='price'>
          <el-input v-model="addForm.price"></el-input>
        </el-form-item>
		<el-form-item label="库存" prop='num'>
		  <el-input v-model="addForm.num"></el-input>
		</el-form-item>
       
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addClose">取 消</el-button>
        <el-button type="primary" @click="addClick">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改用户对话框 -->
    <el-dialog
      title="修改商品"
      :visible.sync="changeUserShow"
      width="50%"
      :before-close="changeClose">
      <el-form :rules="rules" ref="changeForm" :model="changeForm" label-width="70px">
      <el-form-item label="商品名" prop='name'>
        <el-input v-model="changeForm.name" ></el-input>
      </el-form-item>
		<el-form-item label="价格" prop="price">
		  <el-input v-model="changeForm.price" ></el-input>
		</el-form-item>
		<el-form-item label="库存" prop="num">
		  <el-input v-model="changeForm.num" ></el-input>
		</el-form-item>
		
      
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changeClose">取 消</el-button>
        <el-button type="primary" @click="changeClick">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 分配角色弹窗 -->
    <el-dialog
      title="分配角色"
      :visible.sync="allotShow"
      width="50%"
      @close="allotClose">
      <p class="text">当前的用户：{{userInfo.account}}</p>
      <p class="text">当前的角色：{{userInfo.type}}</p>
      <p class="text-sel">分配新角色：
        <el-select v-model="selValue" placeholder="请选择">
        <el-option
          v-for="item in jsList"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="allotShow = false">取 消</el-button>
        <el-button type="primary" @click="yesAllotClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import mbxNav from 'components/MbxNav'
import { 
  getGoods,
  addGoods,
  searchGoods,
  getGoodsInfo,
  upGoods,
  delGoods,
  allotJsList,
  allotJs
  } from 'network/goods'

export default {
  name: 'GoodsList',
  components: {
    mbxNav
  },
  data(){
    /**
     * 邮箱验证规则
     */
    var validateEmail = (rule, value, cb) => {
      // 验证邮箱的正则
      const regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if(regEmail.test(value)){
        return cb()
      }
      cb(new Error('请输入合法的邮箱'))
    };

    /**
     * 手机号验证规则
     */
    var validateMobile = (rule, value, cb) => {
      // 验证手机号正则
      const regMobile = /^1[34578]\d{9}$/
      if(regMobile.test(value)){
        return cb()
      }
      cb(new Error('请输入合法的手机号'))
    }
    return {
      userList: [],
      queryInfo: {
        key: '',
     
      },
      // 全部用户个数
      total: 0,
      // 添加用户对话框 显示隐藏
      addUserShow: false,
      // 添加用户数据
      addForm: {
        name: '',
        num: '',
		 price: '', 
		
      },
      // 修改用户对话框 显示隐藏
      changeUserShow: false,
      //修改用户数据
      changeForm: {
		
		 name: '',
		 num: '',
		  price: '', 	 
		  id:''
	  },
	  
      // 添加用户表单验证规则
      rules: {
        name: [
          {required: true, message: '请输入商品名', trigger: 'blur'},
          { min: 1, max: 10, message: '请输入3到10个字符', trigger: 'blur' }
        ],
        num: [
          {required: true, message: '请输入库存', trigger: 'blur'},
         
        ],
        price: [
          {required: true, message: '请输价格', trigger: 'blur'},
      
        ],
        
      },
      // 分配角色弹窗是否显示
      allotShow: false,
      // 需要分配角色的用户信息
      userInfo: {},
      // 被选中的option  value(id)
      selValue: '',
      // 所有角色信息
      jsList: ['系统管理员','销售员','库管员','会计']
    }
  },
  created(){
    this.getGoods()
  },
  methods: {
    /**
     * 获取、更新用户数据
     */
    getGoods(){
      getGoods().then((res) => {
       
        if(res.data.code == 0){
          //获取成功了
		   console.log(res.data.data)
          this.userList = res.data.data
          this.total = res.data.data.length
        }
      }).catch((err) => {
        // console.log(err)
      })
    },
	
	searchGoods(){
      searchGoods(this.queryInfo).then((res) => {
       
        if(res.data.code == 0){
          //获取成功了
		   console.log(res.data.data)
          this.userList = res.data.data
          this.total = res.data.data.length
        }
      }).catch((err) => {
        // console.log(err)
      })
    },
    /**
     * 更改用户状态
    //  */
    // changeUserState(userInfo){
    //   // console.log(userInfo)
    //   changeState(userInfo.id,userInfo.mg_state).then((res) => {
    //     if(res.data.code !== 0){
    //       this.$message.error('更改失败，请稍后重试')
    //       userInfo.mg_state = !userInfo.mg_state
    //       return
    //     }
    //     this.$message.success('更改成功')
    //   })
    // },

    /**
     * 分页处理
     */
    // 监听 每页条数 pagesize 变化
    handleSizeChange(value){
      // console.log(value)
      this.queryInfo.pagesize = value
      this.getUsersInfo()
    },
    //监听 当前页 pagenum 发生改变
    handleCurrentChange(value){
      // console.log(value)
      this.queryInfo.pagenum = value
      this.getUsersInfo()
    },

    /**
     * 添加用户模块
     */
    // 点击添加用户 / 显示用户对话框
    addGoods(){
      this.addUserShow = true
    },
    //添加用户对话框关闭
    addClose(){
      this.$refs.addForm.resetFields()
      this.addUserShow = false
    },
    /**
     * 添加用户请求模块
     */
    addClick(){
      // 进行表单验证
      this.$refs.addForm.validate((reg) => {
        if(reg){
          // 验证成功发（请求）
          addGoods(this.addForm).then((res) => {
            // console.log(res)
            if(res.data.code === 0){
              this.addUserShow = false
              this.$message.success(res.data.msg)
              this.getGoods()()
              return
            }
           
          })
        }
      })
    },

    /**
     * 修改用户信息模块
     */
    // 修改用户对话框关闭
    changeClose(){
      this.$refs.changeForm.resetFields()
      this.changeUserShow = false
    },
    //点击修改用户信息  显示修改用户对话框
    changeUserInfo(info){
      this.changeUserShow = true
      // console.log(info)
      this.changeForm = info
      //根据id查询用户信息（请求）
      getGoodsInfo(this.changeForm.id).then((res) => {
        // console.log(res)
        if(res.data.code !== 0){
          this.$message.error('查询失败，请稍后再试')
          return
        }
          this.changeForm.account = res.data.data.account
		    this.changeForm.pwd = res.data.data.pwd
			  this.changeForm.name = res.data.data.name
			    this.changeForm.email = res.data.data.email
          this.changeForm.phone = res.data.data.phone
          this.changeForm.address = res.data.data.address
      })
    },
    /**
     * 修改用户请求模块
     */
    changeClick(){
      // 表单验证
      this.$refs.changeForm.validate((reg) => {
        // 验证成功
        if(reg){
          /**
           * 修改请求
           */
          upGoods(this.changeForm).then((res) => {
            // console.log(res)
            if(res.data.code === 0){
              this.changeUserShow = false
              this.$message.success(reg.data.msg)
              this.getUsersInfo()
              return 
            }
            
          })
        }
      })
    },

    /**
     * 删除用户模块
     */
    // 删除用户
    delClick(userInfo){
      // console.log(userInfo)
      // 确认删除吗消息框？
      this.$confirm('您确定要永久删除用户吗？', '永久删除' ,{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        /**
         * 删除请求模块
         */
        delGoods(userInfo.id).then((res) => {
          if(res.data.code === 0){
            this.$message.success('删除成功')
            this.getGoods()
            return 
          }
          this.$message.success('删除失败，请稍后重试')
        })
      }).catch(() => {
        this.$message('已取消')
      })
    },

    /**
     * 分配角色
     */
    // 点击分配角色弹出框
    allotClick(userInfo){
      this.userInfo = userInfo
      
      this.allotShow = true
    },
    // 确定分配角色
    yesAllotClick(){
      if(!this.selValue){
        this.$message.error('请选择角色')
        return
      }
      /* 分配用户角色请求 */
      upAdminType(this.userInfo.id,this.selValue).then(res => {
        if(res.data.code !== 0){
          this.$message.error('分配失败')
          return
        }
        this.$message.success('分配成功')
        this.getAdmins()
        this.allotShow = false
      })
    },
    allotClose(){
      this.selValue = ''
    }
  }
}
</script>

<style lang="less" scoped>
  .user-table{
    margin-top: 20px;
    font-size: 12px;
  }
  .el-pagination{
    margin-top: 20px;
  }
  .text{
    padding:5px 0;
  }
  .text-sel{
    padding-top: 10px;
  }
  
  .fileupload {
            width: 100%;
            height: 100%;
            .uploader-icon {
              font-size: 40px;
              &:hover {
                color: royalblue;
              }
            }
			}

</style>