package com.yun_weidai.demo.controllers;

import com.yun_weidai.demo.model.User;
import com.yun_weidai.demo.service.SignUpOutcome;
import com.yun_weidai.demo.service.UserService;
import com.yun_weidai.demo.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SignUpController {
    @Autowired
    private UserServiceImpl userServiceImpl;

    @PostMapping("/signUp")
    public String SignUp(User user, Model model) {
        SignUpOutcome signUpOutcome = userServiceImpl.signUp(user);
        switch (signUpOutcome) {
            case SUCCESS:
                model.addAttribute("statusCode","SIGNUP_SUCCESS");
                return "member";
            case DUPLICATE:
                model.addAttribute("statusCode","SIGNUP_DUPLICATE");
                return "index";
        }
        return "index";
    }
}
