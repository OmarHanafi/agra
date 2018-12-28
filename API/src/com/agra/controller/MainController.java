package com.agra.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agra.entity.Category;
import com.agra.entity.Client;
import com.agra.entity.CustomerOrder;
import com.agra.entity.Order;
import com.agra.entity.OrderDetail;
import com.agra.entity.Product;
import com.agra.entity.User;
import com.agra.service.CategoryService;
import com.agra.service.ClientService;
import com.agra.service.OrderService;
import com.agra.service.ProductService;
import com.agra.service.UserService;
import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController
@CrossOrigin()
@RequestMapping("/main")
public class MainController {

	@Autowired
	private ProductService productService;
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private ClientService clientService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private OrderService orderService;
	
	@RequestMapping("/product")
	public Product getProduct(@RequestParam("id") int productId){
		return productService.getProduct(productId);
	}
	
	@RequestMapping("/categoryProducts")
	public List<Product> getCategoryProducts(@RequestParam("id") int idcategory){
		return productService.getProductsByCategory(idcategory);
	}
	
	@RequestMapping("/products")
	public List<Product> getProducts(){
		return productService.getProducts();
	}
	
	@RequestMapping("/category")
	public Category getCategory(@RequestParam("id") int categoryId){
		return categoryService.getCategory(categoryId);
	}
	
	@RequestMapping("/categories")
	public List<Category> getCategories(){
		return categoryService.getCategories();
	}
	
	@PostMapping("/addOrder")
	public boolean addOrder(@RequestBody ObjectNode json){
		//System.out.println(json);
		User user = userService.getUser(json.get("clientUsername").asText());
		Order order = new Order(user.getClient(),
				"Being prepared",
				json.get("lightCart").get("totalPrice").asLong(),
				json.get("deliveryMethod").asText(),
				json.get("paymentMethod").asText());
		//OrderDetail orderDetail = new OrderDetail(order);
		//System.out.println(json.get("lightCart").get("lightItems"));

		json.get("lightCart").get("lightItems").forEach(node -> {
		    Product product = productService.getProduct(node.get("id").asInt())  ; 
		    OrderDetail orderDetail = new OrderDetail(order,product,node.get("quantity").asInt());
		    order.addOrderDetail(orderDetail);
		 });
		//System.out.println(order);
		orderService.addOrder(order);
		return true;
	}
	@PostMapping("/orders")
	public List<CustomerOrder> getOrders(@RequestBody ObjectNode json){
		//System.out.println(json);
		User user = userService.getUser(json.get("username").asText());
		int clientId = user.getClient().getId();
		System.out.println(clientId);
		List<Order> result = orderService.getOrders(clientId);
	
		List<CustomerOrder> orders = new ArrayList<CustomerOrder>();
		
		for(Order o : result){
			CustomerOrder co = new CustomerOrder(o.getId(),o.getDate(),o.getTotalPrice(),o.getState());
			orders.add(co);
			System.out.println(co);
		}
		
	
			
		return orders;
		//return result;
		
	}
	
	
	
	
	
}
