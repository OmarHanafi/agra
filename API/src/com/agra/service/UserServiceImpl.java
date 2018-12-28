package com.agra.service;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agra.dao.UserDAO;
import com.agra.entity.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDAO;
	
	@Transactional
	@Override
	public int login(User user) {
		int type = -1;
		User userresult = userDAO.getUser(user.getUsername());
		if(userresult != null){
			if(userresult.getPassword().equals(user.getPassword())){
				type = userresult.getType();
			}	
		}
		return type;
	}

	@Transactional
	@Override
	public User getUser(String userName) {
		return userDAO.getUser(userName);
		
	}

}
