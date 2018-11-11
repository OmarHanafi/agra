package com.agra.service;

<<<<<<< HEAD
import java.util.ArrayList;

import javax.transaction.Transactional;

=======
>>>>>>> 6867cb2e564f57e8da679659489d32bda0830c54
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.agra.dao.UserDAO;
import com.agra.entity.User;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
<<<<<<< HEAD
	private UserDAO userDAO;
	
	@Override
	@Transactional
	public User getUser(String username) {
		return this.userDAO.getUser(username);
=======
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
>>>>>>> 6867cb2e564f57e8da679659489d32bda0830c54
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
