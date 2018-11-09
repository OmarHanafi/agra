package com.agra.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
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
	
	@GetMapping("/home")
	public ArrayList<Employee> test(){
		ArrayList<Employee> list = new ArrayList<Employee>();
		list.add(new Employee(1,"omar",21));	
		list.add(new Employee(2,"mohammed",26));
		list.add(new Employee(3,"mehdi",18));
		list.add(new Employee(4,"amine",42));
		return list;
	}
	
	@PostMapping("/post")
	public void postTest(@RequestBody Test test){
		System.out.println(test.getName());
	}
}
