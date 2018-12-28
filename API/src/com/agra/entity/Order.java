package com.agra.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="orders")
public class Order {

	@Id
	@Column()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.EAGER,mappedBy = "primaryKey.order",cascade=CascadeType.ALL)
	private List<OrderDetail> orderDetails; // list de produit/quantite
	
	@JsonIgnore
	@OneToOne()
	@JoinColumn(name="client_id")
	private Client client;
	
	

	@Column()
	private String state;
	
	@Column(name="total_price")
	private float totalPrice;
	
	@Column(name="delivery_method")
	private String deliveryMethod;
	
	@Column(name="payment_method")
	private String paymentMethod;

	@Column(name="date")
	private String date;
	
	
	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public Order() {
		super();
	}
	
	
	
	public Order( Client client, String state, float totalPrice,
			String deliveryMethod, String paymentMethod) {
		super();
		
		this.orderDetails = new ArrayList<OrderDetail>();
		this.client = client;
		this.state = state;
		this.totalPrice = totalPrice;
		this.deliveryMethod = deliveryMethod;
		this.paymentMethod = paymentMethod;
	}

	public Order(int id,  Client client, String state, float totalPrice,
			String deliveryMethod, String paymentMethod, String date) {
		super();
		this.id = id;
		this.orderDetails = new ArrayList<OrderDetail>();
		this.client = client;
		this.state = state;
		this.totalPrice = totalPrice;
		this.deliveryMethod = deliveryMethod;
		this.paymentMethod = paymentMethod;
		this.date = date;
	}



	//getters and setters
	
	public void addOrderDetail(OrderDetail orderDetail) {
		if(this.orderDetails==null){
			this.orderDetails = new ArrayList<OrderDetail>();
		}
		this.orderDetails.add(orderDetail);
	}

	public List<OrderDetail> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(List<OrderDetail> orderDetails) {
		this.orderDetails = orderDetails;
	}

	
	
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public float getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(float totalPrice) {
		this.totalPrice = totalPrice;
	}



	public String getDeliveryMethod() {
		return deliveryMethod;
	}

	public void setDeliveryMethod(String deliveryMethod) {
		this.deliveryMethod = deliveryMethod;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	
	
	@Override
	public String toString() {
		return "Order [id=" + id + ", orderDetails=" + orderDetails + ", client=" + client + ", state=" + state
				+ ", totalPrice=" + totalPrice + ", deliveryMethod=" + deliveryMethod + ", paymentMethod="
				+ paymentMethod + "]";
	}
	
	
}
