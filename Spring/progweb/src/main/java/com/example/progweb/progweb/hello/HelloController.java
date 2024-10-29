package com.example.progweb.progweb.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/hello")
 public class HelloController {  
  @GetMapping  
  @ResponseBody  
  public String index(){    
   return "Hello World!!!";  
 }  
}