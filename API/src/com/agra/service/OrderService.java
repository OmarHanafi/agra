package com.agra.service;

import com.agra.entity.Order;

public interface OrderService {

	
	public void addOrder(Order order);
	
	public Order getOrder(int id);
}
