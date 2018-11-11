package com.agra.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
<<<<<<< HEAD
	private SessionFactory sessionFactory;
	@Autowired
	private UserService userService;
	
	
	
	
	@GetMapping("/formProcessing")
	public ArrayList<User> test(
			@RequestParam("username") String username,
			@RequestParam("password") String password,
			Model theModel){
		User user = new User(username,password);
		if(userService.login(user))
		{
			System.out.println("connected ! ");
		}
		else{
			System.out.println("incorrect password !");
		}
		return null;
	}
	
	
	
	@PostMapping("/formProcessing")
	public boolean log(@RequestBody() User user)
	{
		if(userService.login(user))
		{
			System.out.println("connected ! ");
			return true;
		}
		else{
			System.out.println("incorrect password !");
			return false;
		}
=======
	UserService userService;
	
	@PostMapping("/home")
	public User test(@RequestBody User user){
		User result = null;
		if(userService.login(user))
			result = user;
		return result;
>>>>>>> 6867cb2e564f57e8da679659489d32bda0830c54
	}
	
	
	
	
	
	
	
	
	
}
