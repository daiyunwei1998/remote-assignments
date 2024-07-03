package com.yun_weidai.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class indexController {
    @GetMapping("/")
    @ResponseBody // ensures that the returned string is sent directly as the response body.
    public String hello() {
        return "This is AppWork School Back-End Week-3 Assignment by Yun-wei Dai.<br><br>" +
                "accumulated_sum API:  /data?number={query}<br>" +
                "accumulated_sum DEMO: /sum.html<br>" +
                "username DEMO:        /myName<br>";
    }
}
