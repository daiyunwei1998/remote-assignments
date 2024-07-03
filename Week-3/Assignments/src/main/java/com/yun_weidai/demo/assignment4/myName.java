package com.yun_weidai.demo.assignment4;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class myName {
    @GetMapping("/myName")
    public String getMyName(@CookieValue(value = "name" ,required = false) String nameInCookie, Model model) {
        if (nameInCookie != null && !nameInCookie.isEmpty()) { // name in cookie
            model.addAttribute("name", nameInCookie); // access when template renders
            return "displayName"; // displayName.html
        } else {
            return "register"; // register.html
        }
    }
}
