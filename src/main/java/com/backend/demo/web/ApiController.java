package com.backend.demo.web;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.*;

@RestController
public class ApiController {

    @GetMapping("/api/hello")
    public HashMap<String, String> hello() {
        HashMap<String, String> result = new HashMap<String, String>();
        result.put("message", "안녕하세요");
        System.out.println("123123213213");
        return result;
    }
    @GetMapping("/api/hello1")
    public String home(){ return "index.html"; }
    
}