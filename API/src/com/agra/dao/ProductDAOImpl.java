package com.agra.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.agra.entity.Product;

@Repository
public class ProductDAOImpl implements ProductDAO{

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public Product getProduct(int id) {
		Session currentSession = sessionFactory.getCurrentSession();		
		Product product = currentSession.get(Product.class, id);
		return product;
	}

}
