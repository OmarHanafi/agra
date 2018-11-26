package com.agra.service;

import java.util.List;

import com.agra.entity.Category;

public interface CategoryService {
	
	public Category getCategory(int id);
	
	public List<Category> getCategories();
	
}
