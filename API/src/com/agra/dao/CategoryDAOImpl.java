package com.agra.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.agra.entity.Category;
import com.agra.entity.User;


@Repository
public class CategoryDAOImpl implements CategoryDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Category> getAll(){
		ArrayList<Category> categories = new ArrayList<Category>();
		categories = (ArrayList<Category>) sessionFactory
											.getCurrentSession()
											.createQuery("from Category")
											.getResultList();
		return categories;
	}

}
