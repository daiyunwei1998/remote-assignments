package com.yun_weidai.demo.controllers;

import com.yun_weidai.demo.model.User;
import com.yun_weidai.demo.service.SignInOutcome;
import com.yun_weidai.demo.service.SignUpOutcome;
import com.yun_weidai.demo.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class SignInController {
    @Autowired
    private UserServiceImpl userServiceImpl;

    @PostMapping("/signIn")
    public String LogIn(Model model, User user) {
        SignInOutcome signInOutcome = userServiceImpl.signIn(user);
        model.addAttribute("statusCode",signInOutcome.name());
        if (signInOutcome.equals(SignInOutcome.SIGNIN_SUCCESS)) {
                return "member";
        }
        return "index";
    }
}
