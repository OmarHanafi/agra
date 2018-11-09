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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.agra.entity.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {
	
	@Autowired
	SessionFactory sessionFactory;
	
	@Transactional
	@GetMapping("/home")
	public String test(){
		Session session = sessionFactory.getCurrentSession();
		User user = session.get(User.class, "admin");
		return user.toString();
	}
	
}
