package com.agra.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agra.dao.CategoryDAO;
import com.agra.dao.UserDAO;
import com.agra.entity.Category;
import com.agra.entity.User;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryDAO categoryDAO;
	
	@Transactional
	@Override
	public List<Category> getFeatured(){
		ArrayList<Category> result = new ArrayList<Category>();
		List<Category> categories = categoryDAO.getAll();
		for(Category category : categories){
			if(category.getFeatured() == 1)
				result.add(category);
		}
		return result;
	}

}
