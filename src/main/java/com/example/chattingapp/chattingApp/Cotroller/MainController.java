package com.example.chattingapp.chattingApp.Cotroller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/main")
public class MainController {

    @RequestMapping(value = "/index.do")
    public String main() {

        return "url";
    }

}
