package com.agra.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.agra.entity.Category;
import com.agra.entity.Client;

@Repository
public class ClientDAOImpl implements ClientDAO{

	
	@Autowired
	private SessionFactory sessionFactory;
	
	
	@Override
	public void addClient(Client client) {
		
		Session currentSession = sessionFactory.getCurrentSession();		
		currentSession.save(client);
		
	}

	@Override
	public Client getClient(int clientId) {
		Session currentSession = sessionFactory.getCurrentSession();
		
		return (Client) currentSession.get(Client.class,clientId);
		
	}

}
