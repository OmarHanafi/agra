package com.agra.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="orders")
public class Order {

	@Id
	@Column()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	
	
	
	
	@Column()
	private String state;
	
	@Column(name="delivery_method")
	private String deliveryMethod;
	
	@Column(name="payment_method")
	private String paymentMethod;
	
	
	
}
