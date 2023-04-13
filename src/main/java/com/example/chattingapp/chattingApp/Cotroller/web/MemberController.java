package com.example.chattingapp.chattingApp.Cotroller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {

    /*
        회원가입
     */
    @RequestMapping(value = "/join.do")
    public String memberJoin(){
        return "url";
    }

    /*
        회원가입 처리
     */
    @RequestMapping(value = "/joinProc.do")
    public String memberJoinProc(){

        return "url";
    }
    /*
        회원정보 수정
     */
    @RequestMapping(value = "/info.do")
    public String memberUpd(){

        return "url";
    }
    /*
        회원정보 수정 처리
     */
    @RequestMapping(value = "/infoProc.do")
    public String memberUpdProc(){

        return "url";
    }

    /*
        회원탈퇴 처리
     */
    @RequestMapping(value = "/delProc.do")
    public String memberDel(){

        return "url";
    }
}
