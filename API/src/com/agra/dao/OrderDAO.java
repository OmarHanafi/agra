package com.agra.dao;

import java.util.List;

import com.agra.entity.Order;

public interface OrderDAO {

	public void addOrder(Order order);
	
	public Order getOrder(int id);

	public List<Order> getOrders(int id);
	
	
	
}
