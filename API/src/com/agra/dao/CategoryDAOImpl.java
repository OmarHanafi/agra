package com.agra.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.agra.entity.Category;
import com.agra.entity.User;


@Repository
public class CategoryDAOImpl implements CategoryDAO{

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public Category getCategory(int id) {
		Session currentSession = sessionFactory.getCurrentSession();		
		return (Category) currentSession.get(Category.class,id);
	}

}
