package com.agra.dao;

import java.util.List;

import com.agra.entity.Product;

public interface ProductDAO {

	public Product getProduct(int id);
	
	public int getMaxId();
	
	public void addProduct(Product product);
	
	public List<Product> getProducts();
	
	public void updateProduct(Product product);
	
	public void deleteProduct(int id);

}
