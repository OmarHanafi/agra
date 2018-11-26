package com.agra.dao;

import com.agra.entity.Product;

public interface ProductDAO {

	public Product getProduct(int id);
	public int getMaxId();
	public void addProduct(Product product);

}
