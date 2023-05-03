<template>
  <div>
    <!-- 导航 -->
    <mbx-nav one-nav="销售管理" two-nav="销售清单"></mbx-nav>
    <!-- 卡片试图 -->
    <el-card>
		  <el-button type="primary" @click="addClick">选择商品</el-button>
		  <el-button type="primary" @click="addUserClick">选择会员</el-button>
		  <el-button type="primary" @click="allotClick">选择积分</el-button>
		  <span v-show="seluser" style="font-family: Microsoft YaHei;margin-left: 30px;">会员名：{{seluser.name}}     剩余积分：{{seluser.jifen}} 账户余额：{{seluser.money}}</span>
		  <span v-show="checkedNames.length>0" style="font-family: Microsoft YaHei;margin-left: 30px">总价：{{sumPrice}}元</span>
		  <el-button style="margin-left: 30px" v-show="checkedNames.length>0" type="primary" @click="addOrders">结算</el-button>
		
		<!-- 用户列表表格 区域 -->
		<el-table :data="checkedNames" v-show="checkedNames.length>0">
		  <el-table-column property="name" label="产品名称" width="150"></el-table-column>
		                  <el-table-column property="price" label="单价" width="200"></el-table-column>
		                  <el-table-column  label="数量" width="200">	
									<template v-slot="scope">
									<el-input  v-model="scope.row.num" :min="1" :max="10"></el-input>
									 </template>		
		                  </el-table-column>
					
		                  <el-table-column  label="操作">
							   <template v-slot="scope">
								    <el-button type="primary" @click="del(scope.row)">删除</el-button>
		                     
							   </template>
		                  </el-table-column>
		
		</el-table>
        
    </el-card>

	<el-dialog
	title="选择商品"
	:visible.sync="addShow"
	width="70%"
	:before-close="addClose">
	
		<!-- 操作 区域 -->
		<el-row :gutter="30">
		 <el-col :span="10">
		    <el-input placeholder="请输入关键词" v-model="queryInfo.key" clearable @clear="searchGoods">
		      <el-button slot="append" icon="el-icon-search" @click="searchGoods"></el-button>
		    </el-input>
		  </el-col>
		
		</el-row>
		<!-- 用户列表表格 区域 -->
		<el-table :data="goodsList" stripe border class="user-table">
		  <el-table-column type="index" label="#"></el-table-column>
		  <el-table-column prop="id" label="商品编号" width="70"></el-table-column>
				
				  <el-table-column prop="name" label="名字"></el-table-column>
					<el-table-column prop="price" label="价格"></el-table-column>
					<el-table-column prop="num" label="库存"></el-table-column>		 
		<!-- 
		  <el-table-column label="操作" width="176">
		    <template v-slot="scope">
		      <el-button size="mini" type="primary" icon="el-icon-edit" @click="choise(scope.row)">选择</el-button>
		    
		    </template>
		  </el-table-column> -->
		  <el-table-column   label="操作">
			             <template v-slot="scope">
		                    <div>
		                      <el-button
		                        size="small"
		                        @click="choise(scope.row)">
		                        选择
		                      </el-button>
		                    </div>
							 </template>
		                  </el-table-column>
		
		</el-table>
		     
	</el-dialog>
    <!-- 添加用户对话框 -->
    <el-dialog
      title="选择会员"
      :visible.sync="addUserShow"
      width="50%"
      :before-close="addClose">
      
      <!-- 操作 区域 -->
      <el-row :gutter="30">
       <el-col :span="10">
          <el-input placeholder="请输入电话号/名字" v-model="queryInfo.key" clearable @clear="getUsersByKey">
            <el-button slot="append" icon="el-icon-search" @click="getUsersByKey"></el-button>
          </el-input>
        </el-col>
      
      </el-row>
      <!-- 用户列表表格 区域 -->
      <el-table :data="userList" stripe border class="user-table">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="id" label="会员编号" width="70"></el-table-column>
      		
      		  <el-table-column prop="name" label="名字"></el-table-column>
      			<el-table-column prop="phone" label="电话"></el-table-column>
      			<el-table-column prop="money" label="余额"></el-table-column>		 
      <!-- 
        <el-table-column label="操作" width="176">
          <template v-slot="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit" @click="choise(scope.row)">选择</el-button>
          
          </template>
        </el-table-column> -->
        <el-table-column   label="操作">
      	             <template v-slot="scope">
                          <div>
                            <el-button
                              size="small"
                              @click="choiseuser(scope.row)">
                              选择
                            </el-button>
                          </div>
      					 </template>
                        </el-table-column>
      
      </el-table>
    </el-dialog>
    <!-- 修改用户对话框 -->
    <!-- 分配角色弹窗 -->
    <el-dialog
      title="调用会员"
      :visible.sync="allotShow"
      width="50%"
      @close="allotClose">
     
      <p class="text-sel">选择积分：
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
 <script src="http://cdn.bootcss.com/jquery/3.1.1/jquery.js"></script>
<script>
import mbxNav from 'components/MbxNav'

import { 
  getGoods,
  addGoods,
  searchGoods,
  getGoodsInfo,
  upGoods,
  delGoods,
  getUsers,
  addOrders,
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
	  goodsList:[],
      queryInfo: {
        key: '',
     
      },
	  totalPrice:0,
      // 全部用户个数
      total: 0,
      // 添加用户对话框 显示隐藏
      addUserShow: false,
	  addShow:false,
      // 添加用户数据
      addForm: {
        name: '',
        num: '',
		 price: '', 
		
      },
	  zhekou:1,
	  seluser:{},
      // 修改用户对话框 显示隐藏
      changeUserShow: false,
      //修改用户数据
      changeForm: {
		
		 name: '',
		 num: '',
		  price: '', 	 
		  id:''
	  },
	  
	  orders:{
		  uid:'',
		  shoplist:'',
		  total:'',
		  jifen:''
		  
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
      jsList: ['消耗10积分95折','消耗50积分9折','消耗100积分88折'],
	  dialogTableVisible:false,
	        checkedNames: [],
    }
  },
  created(){
    this.getGoods()
	this.getUsersInfo()
  },
   computed:{
        sumPrice:function(){
         var sum = 0 ;
         for(var i=0;i< this.checkedNames.length;i++){
          sum+=this.checkedNames[i].price*this.checkedNames[i].num;
          }
		  sum=sum*this.zhekou
         return sum;
         }
        },

  methods: {
    /**
     * 获取、更新用户数据
	 * 
     */
	getUsersInfo(){
	  getUsers().then((res) => {
	   
	    if(res.data.code == 0){
	      //获取成功了
		   console.log(res.data.data)
	      this.userList = res.data.data
	      
	    }
	  }).catch((err) => {
	    // console.log(err)
	  })
	},
	getUsersByKey(){
	  getUsersByKey(this.queryInfo).then((res) => {
	   
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
    getGoods(){
      getGoods().then((res) => {
       
        if(res.data.code == 0){
          //获取成功了
		   console.log(res.data.data)
          this.goodsList = res.data.data
          this.total = res.data.data.length
        }
      }).catch((err) => {
        // console.log(err)
      })
    },
	 choise:function(p){
	       this.checkedNames.push(p);
		   this.addShow=false;
	      },
   choiseuser:function(p){
		        this.seluser=(p);
		  		   this.addUserShow=false;
				   this.orders.uid=p.id;
		       },
	 del:function(p){
	       this.checkedNames.splice(p);
	      },
	searchGoods(){
      searchGoods(this.queryInfo).then((res) => {
       
        if(res.data.code == 0){
          //获取成功了
		   console.log(res.data.data)
          this.goodsList = res.data.data
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
    addClick(){
      this.addShow = true
    },
	addUserClick(){
		this.addUserShow=true
	},
    //添加用户对话框关闭
    addClose(){
      this.$refs.addForm.resetFields()
      this.addUserShow = false
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
	addOrders(){
		if(this.seluser.money<this.sumPrice){
			  this.$message.success('余额不足')
			return
		}
		if(this.zhekou==1){
			this.orders.jifen="0";
		}
			if(this.zhekou==0.95){
				this.orders.jifen="10";
			}
			if(this.zhekou==0.9){
				this.orders.jifen="50";
			}
			if(this.zhekou==0.88){
				this.orders.jifen="100";
			}
		this.orders.total=this.sumPrice;	
		
		this.orders.shoplist=JSON.stringify(this.checkedNames);
		addOrders(this.orders).then((res) => {
		  // console.log(res)
		  if(res.data.code === 0){
		   
		    this.$message.success('下单成功')
			location.reload()
		    
		    return 
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
            this.getAdmins()
            return 
          }
          this.$message.success('删除失败，请稍后重试')
        })
      }).catch(() => {
        this.$message('已取消')
      })
    },

    /**
     *   // 所有角色信息
      jsList: ['消耗10积分95折','消耗50积分9折','消耗100积分88折'],
     */
    // 点击分配角色弹出框
    allotClick(userInfo){
     
      
      this.allotShow = true
    },
    // 确定分配角色
    yesAllotClick(){
      if(!this.selValue){
        this.$message.error('请选择')
        return
      }
	  if(this.selValue==('消耗10积分95折')){
		   if(this.seluser.jifen<10){
		   	  this.$message.success('积分不足')
			    this.allotShow = false
		   	  return
		   }
			this.zhekou=0.95
		  
		       this.allotShow = false
	  }
	  if(this.selValue==('消耗50积分9折')){
		  if(this.seluser.jifen<50){
		  	  this.$message.success('积分不足')
		  			    this.allotShow = false
		  	  return
		  }
	  		this.zhekou=0.9
	  		       this.allotShow = false
	  }
	  if(this.selValue==('消耗100积分88折')){
	  			if(this.seluser.jifen<100){
	  				  this.$message.success('积分不足')
	  						    this.allotShow = false
	  				  return
	  			}
	  	this.zhekou=0.88
	  		       this.allotShow = false
	  }
      // /* 分配用户角色请求 */
      // upAdminType(this.userInfo.id,this.selValue).then(res => {
      //   if(res.data.code !== 0){
      //     this.$message.error('分配失败')
      //     return
      //   }
      //   this.$message.success('分配成功')
      //   this.getAdmins()
    
      // })
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