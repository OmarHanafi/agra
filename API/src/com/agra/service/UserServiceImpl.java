package com.agra.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agra.dao.UserDAO;
import com.agra.entity.User;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDAO userDAO;
	
	@Override
	@Transactional
	public User getUser(String username) {
		return this.userDAO.getUser(username);
	}

}
