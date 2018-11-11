package com.agra.service;

import java.util.ArrayList;

import com.agra.entity.User;

public interface UserService {
	
	public User getUser(String username);
	public ArrayList<User> getUsers();
	
	
	
	public boolean login(User user);
}
