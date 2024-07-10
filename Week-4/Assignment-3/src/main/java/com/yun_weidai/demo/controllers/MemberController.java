package com.yun_weidai.demo.controllers;

import com.yun_weidai.demo.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class MemberController {
    @GetMapping("/member")
    public String welcome(Model model) {
        return "member";
    }
}
