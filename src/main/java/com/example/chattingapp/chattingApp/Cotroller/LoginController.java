package com.example.chattingapp.chattingApp.Cotroller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    /*
      로그인 화면
    */
    @RequestMapping(value = "/login.do")
    public String login() {

        return "url";
    }
    /*
        로그인 검사
     */
    @RequestMapping(value = "/loginProc.do")
    public String loginProc() {

        return "url";
    }
}
