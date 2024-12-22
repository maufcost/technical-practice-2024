package com.mauriciocosta.myproject;

import org.springframework.stereotype.Component;

@Component
public class WelcomeMessage {
    public String getWelcomeMessage() {
        return "Welcome to my first spring boot application!";
    }
}