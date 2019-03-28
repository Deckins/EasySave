package com.example.project4900;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@EnableAutoConfiguration
public class Project4900Application {
	@RequestMapping("/")
	String home() {
		return "Hello World Spring Boot!";
	}

	public static void main(String[] args) {
		SpringApplication.run(Project4900Application.class, args);
	}

}
