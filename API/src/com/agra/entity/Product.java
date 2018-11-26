package com.agra.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
	
	@ManyToOne(cascade={CascadeType.PERSIST,CascadeType.DETACH,
						CascadeType.REFRESH,CascadeType.MERGE})
	@JoinColumn(name="idcategory")
	private Category category;
	
	@Column()
	private float price;
	
	@Column()
	private float weight;
	
	@Column()
	private String description;
	
	@Column()
	private String ingredients;
	
	@Column()
	private String date;
	
	@Lob
	@Column()
	private byte[] image;
	
	@Transient
	private String base64Image;
	
	public Product() {}
	
	public Product(String reference, String designation, Category category, float price, float weight,
			String description, String ingredients, String date, byte[] image, String base64Image) {
		this.reference = reference;
		this.designation = designation;
		this.category = category;
		this.price = price;
		this.weight = weight;
		this.description = description;
		this.ingredients = ingredients;
		this.date = date;
		this.image = image;
		this.base64Image = base64Image;
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
	
	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
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
	
	public String getIngredients() {
		return ingredients;
	}

	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public String getBase64Image() {
		return base64Image;
	}

	public void setBase64Image(String base64Image) {
		this.base64Image = base64Image;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", reference=" + reference + ", designation=" + designation + ", category="
				+ category + ", price=" + price + ", weight=" + weight + ", description=" + description
				+ ", ingredients=" + ingredients + ", date=" + date + "]";
	}


}
