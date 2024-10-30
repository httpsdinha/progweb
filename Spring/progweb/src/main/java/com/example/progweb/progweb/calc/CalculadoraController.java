package com.example.progweb.progweb.calc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping
 public class CalculadoraController {  

  @GetMapping("/soma")
  @ResponseBody  
  public String somaGet(
    @RequestParam(name = "a", defaultValue = "0") int a, 
    @RequestParam(name = "b", defaultValue = "0") int b)
    
    {int result = Calculadora.soma(a, b);
      return "<p>(GET) o resultado da soma é: "+result+"</p>";  
    }

    @PostMapping("/calc")
    @ResponseBody  
    public String somaPost(
      @RequestParam(name = "a", defaultValue = "0") int a, 
      @RequestParam(name = "b", defaultValue = "0") int b,
      @RequestParam(name = "op", defaultValue = "soma") String op)
      {int result = Calculadora.calcular(a, b, op);
        return "<p>(POST) o resultado da soma é: "+result+"</p>";  
      }
 }