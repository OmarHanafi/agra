package com.agra.dao;

import java.util.ArrayList;

import com.agra.entity.User;

public interface UserDAO {

	public User getUser(String username);

	public ArrayList<User> getUsers();
}
