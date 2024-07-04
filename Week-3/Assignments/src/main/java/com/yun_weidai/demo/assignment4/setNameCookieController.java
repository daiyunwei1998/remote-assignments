package com.yun_weidai.demo.assignment4;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Controller
public class setNameCookieController {
    @GetMapping("/trackName")
    public String nameUserSubmit(@RequestParam(value = "name", required = true) String name, HttpServletResponse response) throws UnsupportedEncodingException {
        if (name == null) { // failure case: null parameter
            return "redirect:/myName";   // get back to myName page
        }

        Cookie nameCookie = new Cookie("name", URLEncoder.encode(name, StandardCharsets.UTF_8.toString()));  // create a new cookie object
        nameCookie.setMaxAge(24 * 60 * 60); // Cookie expires in 1 day
        nameCookie.setPath("/"); // set cookie path to root
        response.addCookie(nameCookie);  // Add cookie
        return "redirect:/myName"; // redirect to myName page
    }
}
