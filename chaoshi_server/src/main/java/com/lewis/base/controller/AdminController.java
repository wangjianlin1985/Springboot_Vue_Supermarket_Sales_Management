package com.lewis.base.controller;

import com.lewis.base.entity.ComResult;
import com.lewis.base.entity.Admin;
import com.lewis.base.mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/admin")
public class AdminController {
    @Autowired
    AdminMapper AdminMapper;
    //用户信息
    @RequestMapping(value = "/getAdminInfo",method = RequestMethod.POST)
    public ComResult<Admin>  getAdminInfo(int id){
        Admin Admin = AdminMapper.selectByPrimaryKey(id);
        ComResult<Admin> result = new ComResult<>();
        result.setCode(0);

        result.setData(Admin);
        result.setMsg("success");
        return result;
    }

    //用户信息
    @RequestMapping(value = "/getAdmins",method = RequestMethod.POST)
    public ComResult<List<Admin>>  getAdmins(){
        List<Admin> admins = AdminMapper.selectAll();
        ComResult<List<Admin>> result = new ComResult<>();
        result.setCode(0);

        result.setData(admins);
        result.setMsg("success");
        return result;
    }

    //用户信息
    @RequestMapping(value = "/getAdminsByKey",method = RequestMethod.POST)
    public ComResult<List<Admin>>  getAdminsByKey(String key){
        List<Admin> admins = AdminMapper.selectAll();
        List<Admin> adminArrayList = new ArrayList<>();
        ComResult<List<Admin>> result = new ComResult<>();
        for (int i = 0; i < admins.size(); i++) {
            Admin admin = admins.get(i);
            if (admin.getAccount().contains(key)||admin.getName().contains(key)){
                adminArrayList.add(admin);
            }
        }
        result.setCode(0);

        result.setData(adminArrayList);
        result.setMsg("success");
        return result;
    }
    //修改用户信息
    @RequestMapping(value = "/upAdmin",method = RequestMethod.POST)
    public ComResult  upAdmin(String name,String pwd,Integer id,String phone,String email,String sex,String qq,String address) throws Exception {

        ComResult result = new ComResult<>();
        Admin Admin = new Admin();
        Admin.setName(name);
        Admin.setPwd(pwd);
        Admin.setId(id);
        Admin.setPhone(phone);
        Admin.setEmail(email);
        Admin.setSex(sex);
        Admin.setQq(qq);
        Admin.setAddress(address);
        int i = AdminMapper.updateByPrimaryKey(Admin);


        if (i==1){
            result.setMsg("修改成功");
            result.setData(AdminMapper.selectByPrimaryKey(id));
        }else {
            result.setMsg("faile");
        }
        result.setCode(0);

        return result;



    }
    //修改用户信息
    @RequestMapping(value = "/upAdminType",method = RequestMethod.POST)
    public ComResult  upAdminType(String type,Integer id) throws Exception {

        ComResult result = new ComResult<>();
        Admin Admin = new Admin();
        Admin.setType(type);
        Admin.setId(id);

        int i = AdminMapper.upAdminType(Admin);


        if (i==1){
            result.setMsg("分配成功");
            result.setData(AdminMapper.selectByPrimaryKey(id));
        }else {
            result.setMsg("faile");
        }
        result.setCode(0);

        return result;



    }
    //登录
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public ComResult  login(String account,String pwd) throws Exception {
        Admin Admin=new Admin();
        Admin.setAccount(account);
        Admin.setPwd(pwd);

        Admin Admin1 = AdminMapper.login(Admin);
        ComResult result = new ComResult<>();

        if (Admin1!=null){

            result.setMsg("登录成功");
            result.setData(Admin1);
            result.setCode(0);

            return result;
        }else {
            result.setMsg("账号或者密码不正确");

            result.setCode(1);

            return result;
        }


    }
    //注册
  @RequestMapping(value = "/addAdmin",method = RequestMethod.POST)
    public ComResult  addAdmin(String account,String pwd,String name,String phone,String email,String sex,String qq,String address) throws Exception {
      Admin Admin=new Admin();
      Admin.setAccount(account);
      Admin.setPwd(pwd);
      Admin.setPhone(phone);
      Admin.setEmail(email);
      Admin.setSex(sex);
      Admin.setQq(qq);
      Admin.setAddress(address);

      Admin.setName(name);

      Admin Admin1 = AdminMapper.check(Admin);
      ComResult result = new ComResult<>();

      if (Admin1!=null){

          result.setMsg("账号已存在");

          result.setCode(0);

          return result;
      }else {
          int i = AdminMapper.insert(Admin);
          if (i==1){
              result.setMsg("添加成功");

          }else {
              result.setMsg("添加失败");
          }
          result.setCode(0);

          return result;
      }


    }
    //删除用户
    @RequestMapping(value = "/delAdmin",method = RequestMethod.POST)
    public ComResult  delAdmin(Integer id){
        int i = AdminMapper.deleteByPrimaryKey(id);
        ComResult result = new ComResult<>();
          if (i==1){
              result.setMsg("success");
          }else {
              result.setMsg("faile");
          }
          result.setCode(0);

          return result;
      }




}
