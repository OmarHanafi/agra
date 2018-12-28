package com.agra.service;

import java.util.List;

import com.agra.entity.Order;

public interface OrderService {

	
	public void addOrder(Order order);
	
	public Order getOrder(int id);
	
	public List<Order> getOrders(int id);
}
