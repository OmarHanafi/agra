package com.agra.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.agra.entity.User;


@Repository
public class UserDAOImpl implements UserDAO{

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public User getUser(String username) {
		Session currentSession = sessionFactory.getCurrentSession();
		User theUser = currentSession.get(User.class, username);
		return theUser;
	}

}
