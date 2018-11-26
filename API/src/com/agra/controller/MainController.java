package com.agra.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agra.entity.Category;
import com.agra.entity.Product;
import com.agra.service.CategoryService;
import com.agra.service.ProductService;

@RestController

@RequestMapping("/main")
public class MainController {

	@Autowired
	private ProductService productService;
	
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("/product")
	public Product getProduct(@RequestParam("id") int productId){
		return productService.getProduct(productId);
	}
	
	@RequestMapping("/categoryProducts")
	public List<Product> getCategoryProducts(@RequestParam("id") int idcategory){
		return productService.getProductsByCategory(idcategory);
	}
	
	@RequestMapping("/category")
	public Category getCategory(@RequestParam("id") int categoryId){
		return categoryService.getCategory(categoryId);
	}
	
}
