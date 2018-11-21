package com.agra.service;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.agra.dao.ProductDAO;
import com.agra.entity.Product;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDAO productDAO;

	@Transactional
	@Override
	public Product getProduct(int id) {
		return productDAO.getProduct(id);
	}

}
