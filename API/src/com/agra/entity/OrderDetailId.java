package com.agra.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Embeddable
public class OrderDetailId implements Serializable{



	@JsonIgnore
	@ManyToOne()
	@JoinColumn(name="order_id")
	private Order order;
	
	
	@JsonIgnore
	@OneToOne()
	@JoinColumn(name="product_id")
	private Product product;
	
	
	
	
	
	
	public OrderDetailId() {
		super();
	}

	public OrderDetailId(Order order, Product product) {
		super();
		this.order = order;
		this.product = product;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
	
	
	
	
	
	
}
