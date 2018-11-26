package com.agra.service;

import java.util.List;

import com.agra.entity.Product;

public interface ProductService {
	
	public Product getProduct(int id);
	
	public List<Product> getProductsByCategory(int idcategory);
	
	public void addProduct(Product product);
	
}
