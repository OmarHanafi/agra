package com.agra.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;

@Entity()
@Table(name="user")
public class User {
	
	@Id
	@Column()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column()
	private String username;
	
	@Column()
	private String password;
	
	@Column()
	private int type;
	
	public User() {	}
	
	public User(String username,String password)
	{
		this.username = username;
		this.password = password;
	}
	
	public User(int id, String username, String password, int type) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.type = type;
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
