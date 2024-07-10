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
        model.addAttribute("statusCode",signUpOutcome.name());
        if (signUpOutcome.equals(signUpOutcome.SIGNUP_SUCCESS)) {
            return "member";
        }
        return "index";
    }
}
