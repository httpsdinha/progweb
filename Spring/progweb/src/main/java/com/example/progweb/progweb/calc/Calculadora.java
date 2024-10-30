package com.example.progweb.progweb.calc;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

public class Calculadora {

    public static int calcular(int a, int b, String op) {
        if (a == b) {
            return 0;
        }
        int result = 0;
        switch (op) {
            case "soma":
                result = soma(a, b);
                break;
            case "subtracao":
                result = subtracao(a, b);
                break;
            case "multiplicacao":
                result = multiplicacao(a, b);
                break;
            case "divisao":
                result = divisao(a, b);
                break;
            default:
                result = 0;
                break;
        }
        return result;
    }

    public static int soma(int a, int b) {
        return a + b;
    }

    public static int subtracao(int a, int b) {
        return a - b;
    }

    public static int multiplicacao(int a, int b) {
        return a * b;
    }

    public static int divisao(int a, int b) {
        return a / b;
    }

    
}