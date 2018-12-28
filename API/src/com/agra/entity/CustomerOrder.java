package com.agra.entity;

public class CustomerOrder {

	
	
	
	
	private int id;
	
	private String date;
	
	private float totalPrice;
	
	private String status;

	
	
	
	
	
	public CustomerOrder(int id, String date, float totalPrice, String status) {
		super();
		this.id = id;
		this.date = date;
		this.totalPrice = totalPrice;
		this.status = status;
	}

	@Override
	public String toString() {
		return "CustomerOrder [id=" + id + ", date=" + date + ", totalPrice=" + totalPrice + ", status=" + status + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public float getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(float totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	
	
}
