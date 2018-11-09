package com.agra.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

	@Id
	@Column()
	private String username;
	@Column()
	private String password;
	@Column()
	private int type;
	
	public User(){
		
	}

	

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}
	
	
	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", type=" + type + "]";
	}
	
}
