package com.agra.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	
	@Id
	@Column()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column()
	private String reference;
	
	@Column()
	private String designation;
	
	@Column()
	private String category;
	
	@Column()
	private float price;
	
	@Column()
	private float weight;
	
	@Column()
	private String description;
	
	@Column()
	private String date;
	
	@Column()
	private String image;
	
	public Product() {}
	
	public Product(String reference, String designation, String category, float price, float weight,
			String description, String date, String image) {
		this.reference = reference;
		this.designation = designation;
		this.category = category;
		this.price = price;
		this.weight = weight;
		this.description = description;
		this.date = date;
		this.image = image;
	}

	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getReference() {
		return reference;
	}
	
	public void setReference(String reference) {
		this.reference = reference;
	}
	
	public String getDesignation() {
		return designation;
	}
	
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	
	public String getCategory() {
		return category;
	}
	
	public void setCategory(String category) {
		this.category = category;
	}
	
	public float getPrice() {
		return price;
	}
	
	public void setPrice(float price) {
		this.price = price;
	}
	
	public float getWeight() {
		return weight;
	}
	
	public void setWeight(float weight) {
		this.weight = weight;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}
	
	public String getImage() {
		return image;
	}
	
	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", reference=" + reference + ", designation=" + designation + ", category="
				+ category + ", price=" + price + ", weight=" + weight + ", description=" + description + ", date="
				+ date + ", image=" + image + "]";
	}
	
}
