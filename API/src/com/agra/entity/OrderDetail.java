package com.agra.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.AssociationOverride;
import javax.persistence.AssociationOverrides;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity()
@Table(name="orderdetail")
@AssociationOverrides({
    @AssociationOverride(name = "primaryKey.order",
        joinColumns = @JoinColumn(name = "order_id")),
    @AssociationOverride(name = "primaryKey.product",
        joinColumns = @JoinColumn(name = "product_id")) })
public class OrderDetail {

	@EmbeddedId
	private OrderDetailId primaryKey = new OrderDetailId();
	
	
	@Column()
	private int quantity;
	

	
	
	public OrderDetail() {
		super();
	}
	public OrderDetail(Order order, Product product, int quantity) {
		super();
		this.primaryKey.setOrder(order);
		this.primaryKey.setProduct(product);
		this.quantity = quantity;
	}


	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Transient
	public Order getOrder() {
		return this.primaryKey.getOrder();
	}

	public void setOrder(Order order) {
		this.primaryKey.setOrder(order);
	}

	@Transient
	public Product getProduct() {
		return this.primaryKey.getProduct();
	}

	public void setProduct(Product product) {
		this.primaryKey.setProduct(product);
	}

	
	/*
	public void addProduct(Product product) {
		if(this.products==null){
			this.products = new ArrayList<Product>();
		}
		this.products.add(product);
	}
	
	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
*/

	
	
}
