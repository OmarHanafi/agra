package com.agra.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agra.dao.UserDAO;
import com.agra.entity.User;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserDAO userDAO;
	
	@Override
	public User getUser(String username) {
		return this.userDAO.getUser(username);
	}

}
