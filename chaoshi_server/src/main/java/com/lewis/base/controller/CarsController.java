package com.lewis.base.controller;


import com.lewis.base.entity.*;
import com.lewis.base.mapper.CarsMapper;
import com.lewis.base.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/cars")
public class CarsController {
    @Autowired
    CarsMapper carsMapper;
    @Autowired
    GoodsMapper goodsMapper;

    //查询购物车
    @RequestMapping(value = "/getCarsById",method = RequestMethod.POST)
    public ComResult<List<Cars>> getCarsById(Integer u_id){


        List<Cars> cars = carsMapper.selectAll(u_id);

        for (int i = 0; i <cars.size() ; i++) {
            Cars cars1 = cars.get(i);
            Goods goods = goodsMapper.selectByPrimaryKey(cars1.getgId());
            cars1.setGoods(goods);
        }
        ComResult<List<Cars>> result = new ComResult<>();
        result.setMsg("sucess");

        result.setCode(0);
        result.setData(cars);
        return result;
    }

    //添加
    @RequestMapping(value = "/addCars",method = RequestMethod.POST)
    public ComResult addCars(Integer u_id,Integer g_id){
        Cars cars = new Cars();
        cars.setuId(u_id);
        cars.setgId(g_id);
        ComResult result = new ComResult<>();
        Cars exit = carsMapper.isExit(cars);
        if (exit==null){
            int insert = carsMapper.insert(cars);
            if (insert==1){
                result.setMsg("添加成功");

            }else {
                result.setMsg("faile");

            }
        }else {
            result.setMsg("已添加");
        }
        result.setCode(0);
        return result;
    }



    //取消
    @RequestMapping(value = "/delCars",method = RequestMethod.POST)
    public ComResult delCars(Integer u_id,Integer g_id){
        Cars cars = new Cars();
        cars.setuId(u_id);
        cars.setgId(g_id);
        int insert = carsMapper.delCar(cars);
        ComResult result = new ComResult<>();
        if (insert==1){
            result.setMsg("删除成功");

        }else {
            result.setMsg("faile");

        }

        result.setCode(0);

        return result;
    }




}
