package com.agra.service;

import com.agra.entity.User;

public interface UserService {
	
	public int login(User user);
	
	
	public User getUser(String userName);
}
