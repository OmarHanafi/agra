package com.agra.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.agra.entity.Client;
import com.agra.entity.Order;


@Repository
public class OrderDAOImpl implements OrderDAO{

	
	@Autowired
	private SessionFactory sessionFactory;
	
	
	@Override
	public void addOrder(Order order) {
		Session currentSession = sessionFactory.getCurrentSession();		
		currentSession.save(order);
		
	}

	@Override
	public Order getOrder(int id) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		return (Order) currentSession.get(Order.class,id);
	}

}
