package com.agra.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agra.dao.ClientDAO;
import com.agra.dao.OrderDAO;
import com.agra.entity.Order;


@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderDAO orderDAO;
	
	
	@Transactional
	@Override
	public void addOrder(Order order) {
		orderDAO.addOrder(order);

	}

	@Transactional
	@Override
	public Order getOrder(int id) {
		return orderDAO.getOrder(id);
	}

}
