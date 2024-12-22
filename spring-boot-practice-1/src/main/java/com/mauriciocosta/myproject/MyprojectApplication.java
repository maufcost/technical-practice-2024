package com.mauriciocosta.myproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyprojectApplication.class, args);

		// For demonstration purposes:

		// var welcomeMessage = new WelcomeMessage();
		// System.out.println(welcomeMessage.getWelcomeMessage());

		// ConfigurableApplicationContext context = SpringApplication.run( MyprojectApplication.class, args);
		// WelcomeMessage welcomeMessage2 = context.getBean("welcomeMessage", WelcomeMessage.class);
		// System.out.println(welcomeMessage2);
	}

}
