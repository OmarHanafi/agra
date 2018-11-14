package com.agra.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="category")
public class Category {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column()
	private int id;
	
	@Column()
	private String name;
	
	@Column()
	private int nbproducts;
	
	@Column()
	private int featured;
	
	Category(){	}

	public Category(int id, String name, int nbproducts, int featured) {
		super();
		this.id = id;
		this.name = name;
		this.nbproducts = nbproducts;
		this.featured = featured;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getNbproducts() {
		return nbproducts;
	}

	public void setNbproducts(int nbproducts) {
		this.nbproducts = nbproducts;
	}

	public int getFeatured() {
		return featured;
	}

	public void setFeatured(int featured) {
		this.featured = featured;
	}

	@Override
	public String toString() {
		return "Category [id=" + id + ", name=" + name + ", nbproducts=" + nbproducts + ", featured=" + featured + "]";
	}

}
