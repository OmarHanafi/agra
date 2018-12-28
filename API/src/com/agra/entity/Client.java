package com.agra.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity()
@Table(name="client")
public class Client {


	@Id
	@Column()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	
	@JsonIgnore
	@OneToOne()
	@JoinColumn(name="user_id")
	private User user;
	
	
	@JsonIgnore
	@OneToOne()
	@JoinColumn(name="affected_to")
	private User affectedTo;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="second_name")
	private String secondName;
	
	@Column()
	private String email;
	
	@Column()
	private String phone;

	
	public Client(){
		
	}
	
	public Client(User user, User affectedTo, String firstName, String secondName, String email, String phone) {
		super();
		this.user = user;
		this.affectedTo = affectedTo;
		this.firstName = firstName;
		this.secondName = secondName;
		this.email = email;
		this.phone = phone;
	}

	
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public User getAffectedTo() {
		return affectedTo;
	}

	public void setAffectedTo(User affectedTo) {
		this.affectedTo = affectedTo;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSecondName() {
		return secondName;
	}

	public void setSecondName(String secondName) {
		this.secondName = secondName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}




	@Override
	public String toString() {
		return "Client [id=" + id + ", user=" + user + ", affectedTo=" + affectedTo + ", firstName=" + firstName
				+ ", secondName=" + secondName + ", email=" + email + ", phone=" + phone + "]";
	}
	
	
	
	
}
