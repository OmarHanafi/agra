package com.agra.service;

import java.util.ArrayList;

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

	@Override
	@Transactional
	public ArrayList<User> getUsers() {
		return this.userDAO.getUsers();
		
	}

	@Override
	@Transactional
	public boolean login(User user) {
		User dbUser = userDAO.getUser(user.getUsername());
		if(dbUser.getPassword().equals(user.getPassword())){
			System.out.println("niveau connectecté : " + dbUser.getType());
			return true;
		}
		else{
			return false;
		}
	}
	
}
