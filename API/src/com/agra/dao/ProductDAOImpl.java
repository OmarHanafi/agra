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

	@Override
	public int getMaxId() {
		int maxid = (int) sessionFactory.getCurrentSession()
											.createQuery("select max(p.id) from Product p")
											.setMaxResults(1)
											.getSingleResult();
		return maxid;
	}

	@Override
	public void addProduct(Product product) {
		sessionFactory.getCurrentSession().save(product);
	}

}
