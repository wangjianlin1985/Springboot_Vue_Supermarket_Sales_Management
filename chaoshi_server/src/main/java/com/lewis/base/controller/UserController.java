package com.lewis.base.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.lewis.base.entity.User;
import com.lewis.base.entity.ComResult;
import com.lewis.base.entity.User;
import com.lewis.base.mapper.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    UserMapper userMapper;

    //用户信息
    @RequestMapping(value = "/getUsers",method = RequestMethod.POST)
    public ComResult<List<User>>  getUsers(){
        List<User> Users = userMapper.selectAll();
        ComResult<List<User>> result = new ComResult<>();
        result.setCode(0);

        result.setData(Users);
        result.setMsg("success");
        return result;
    }

    //用户信息
    @RequestMapping(value = "/getUsersByKey",method = RequestMethod.POST)
    public ComResult<List<User>>  getUsersByKey(String key){
        List<User> Users = userMapper.selectAll();
        List<User> UserArrayList = new ArrayList<>();
        ComResult<List<User>> result = new ComResult<>();
        for (int i = 0; i < Users.size(); i++) {
            User User = Users.get(i);
            if (User.getPhone().equals(key)||User.getName().contains(key)){
                UserArrayList.add(User);
            }
        }
        result.setCode(0);

        result.setData(UserArrayList);
        result.setMsg("success");
        return result;
    }
    //用户信息
    @RequestMapping(value = "/getUserInfo",method = RequestMethod.POST)
    public ComResult<User>  getUserInfo(int id){
        User user = userMapper.selectByPrimaryKey(id);
        ComResult<User> result = new ComResult<>();
        result.setCode(0);

        result.setData(user);
        result.setMsg("success");
        return result;
    }
    //修改用户信息
    @RequestMapping(value = "/upUser",method = RequestMethod.POST)
    public ComResult  upUser(String name,String jifen,String phone,String money,String qq,String email,String sex,Integer id) throws Exception {

        ComResult result = new ComResult<>();
            User user = new User();
            user.setName(name);
            user.setMoney(money);
            user.setPhone(phone);
            user.setJifen(jifen);
            user.setQq(qq);
            user.setEmail(email);
            user.setSex(sex);
            user.setId(id);
            int i = userMapper.updateByPrimaryKey(user);


            if (i==1){
                result.setMsg("修改成功");
                result.setData(userMapper.selectByPrimaryKey(id));
            }else {
                result.setMsg("faile");
            }
            result.setCode(0);

            return result;



    } //修改用户信息
    @RequestMapping(value = "/czUser",method = RequestMethod.POST)
    public ComResult  czUser(String money,Integer id) throws Exception {

        ComResult result = new ComResult<>();
        User user = userMapper.selectByPrimaryKey(id);
        String money1 = user.getMoney();
        String jifen = user.getJifen();
        double i1 = Double.parseDouble(money1) + Double.parseDouble(money);
        user.setMoney(i1+"");

        if (Double.parseDouble(money)>=100){
            double i2 = Double.parseDouble(money) / 100;
            double i3 = Double.parseDouble(jifen) + i2;
            user.setJifen(i3+"");
        }
        int i = userMapper.updateByPrimaryKey(user);
            if (i==1){
                result.setMsg("充值成功");
                result.setData(userMapper.selectByPrimaryKey(id));
            }else {
                result.setMsg("faile");
            }
            result.setCode(0);

            return result;



    }

    //注册
  @RequestMapping(value = "/addUser",method = RequestMethod.POST)
    public ComResult  addUser(String phone,String name,String jifen,String money,String qq,String email,String sex) throws Exception {
      User user=new User();
      user.setName(name);
      user.setMoney(money);
      user.setJifen(jifen);
      user.setPhone(phone);
      user.setQq(qq);
      user.setEmail(email);
      user.setSex(sex);
      ComResult result = new ComResult<>();


          int i = userMapper.insert(user);
          if (i==1){
              result.setMsg("sucess");
              result.setData(user);
          }else {
              result.setMsg("faile");
          }
          result.setCode(0);

          return result;
      }



    //删除用户
    @RequestMapping(value = "/delUser",method = RequestMethod.POST)
    public ComResult  delUser(Integer id){
        int i = userMapper.deleteByPrimaryKey(id);
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
