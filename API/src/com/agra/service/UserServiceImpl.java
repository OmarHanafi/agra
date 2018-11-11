package com.agra.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.agra.dao.UserDAO;
import com.agra.entity.User;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserDAO userDAO;
	
	@Override
	@Transactional
	public boolean login(User user) {
		boolean result = false;
		User userresult = userDAO.getUser(user.getUsername());
		if(userresult != null){
			if(userresult.getPassword().equals(user.getPassword()))
				result = true;
		}
		return result;
	}

}
