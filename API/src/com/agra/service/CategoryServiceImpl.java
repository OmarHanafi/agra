package com.agra.service;

import java.util.List;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agra.dao.CategoryDAO;
import com.agra.entity.Category;

@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryDAO categoryDAO;

	@Transactional
	@Override
	public Category getCategory(int id) {
		return categoryDAO.getCategory(id);
	}

	@Transactional
	@Override
	public List<Category> getCategories() {
		return categoryDAO.getCategories();
	}

}
