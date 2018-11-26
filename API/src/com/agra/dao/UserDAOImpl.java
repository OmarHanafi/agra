package com.agra.dao;

import java.util.List;

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
		User theUser = null;
		Session currentSession = sessionFactory.getCurrentSession();		
		List list = currentSession.createQuery("from User u where u.username = :username")
									 .setParameter("username", username)
									 .getResultList();
		if(!list.isEmpty())
			theUser = (User) list.get(0);
		return theUser;
	}

}
