package com.yun_weidai.demo;

import com.yun_weidai.demo.dao.UserDAOImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.yun_weidai.demo.model.User;
@SpringBootApplication
public  class Assignment3Application {
    private static UserDAOImpl usrDao;

    public static void main(String[] args) {
        SpringApplication.run(Assignment3Application.class, args);
    }




}