package com.agra.dao;

import com.agra.entity.Order;

public interface OrderDAO {

	public void addOrder(Order order);
	
	public Order getOrder(int id);
	
	
	
}
