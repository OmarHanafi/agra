package com.agra.dao;

import java.util.List;

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

	@Override
	public List<Product> getProducts() {
		return sessionFactory.getCurrentSession().createQuery("from Product").getResultList();
	}

	@Override
	public void updateProduct(Product product) {
		sessionFactory.getCurrentSession().saveOrUpdate(product);
	}

	@Override
	public void deleteProduct(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		Product product = session.get(Product.class, id);
		session.delete(product);
	}

}
