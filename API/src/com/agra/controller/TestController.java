package com.agra.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.agra.entity.*;
import com.agra.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {
	
	@Autowired
	private SessionFactory sessionFactory;
	@Autowired
	private UserService userService;
	
	
	
	@GetMapping("/home")
	public User test(@RequestParam("username") String username,Model theModel){
		
		System.out.println(username);
		User user = userService.getUser(username);
		return user;
	}
	
}
