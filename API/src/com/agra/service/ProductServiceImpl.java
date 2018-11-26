package com.agra.service;

import java.util.List;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Base64;
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
		Product product = productDAO.getProduct(id);
		String base64Image = Base64.getEncoder().encodeToString(product.getImage());
		product.setBase64Image(base64Image);
		return product;
	}

	@Transactional
	@Override
	public List<Product> getProductsByCategory(int idcategory) {
		List<Product> products = categoryDAO.getCategory(idcategory).getProducts();
		List<Product> resultproducts = new ArrayList<Product>();
		for(Product product : products){
			String base64Image = Base64.getEncoder().encodeToString(product.getImage());
			product.setBase64Image(base64Image);
			resultproducts.add(product);
		}
		return resultproducts;	
	}

	@Transactional
	@Override
	public void addProduct(Product product) {
		product.setReference("ART"+String.format("%06d", productDAO.getMaxId()+1));
		productDAO.addProduct(product);
	}

}
