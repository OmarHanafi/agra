package com.agra.dao;

import java.util.List;

import com.agra.entity.Category;

public interface CategoryDAO {

	public Category getCategory(int id);
	
	public List<Category> getCategories();

}
