package com.agra.service;

import java.util.List;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agra.dao.CategoryDAO;
import com.agra.dao.ProductDAO;
import com.agra.entity.Product;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDAO productDAO;
	
	@Autowired
	private CategoryDAO categoryDAO;

	@Transactional
	@Override
	public Product getProduct(int id) {
		return productDAO.getProduct(id);
	}

	@Transactional
	@Override
	public List<Product> getProductsByCategory(int idcategory) {
		List<Product> products = categoryDAO.getCategory(idcategory).getProducts();
		products.size();	// For fetching the data
		return products;
	}

}
