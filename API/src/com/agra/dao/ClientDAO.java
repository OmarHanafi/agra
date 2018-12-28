package com.agra.dao;

import com.agra.entity.Client;

public interface ClientDAO {

	public void addClient(Client client);
	
	public Client getClient(int id);
	
	
}
