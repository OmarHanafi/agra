package com.agra.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agra.dao.ClientDAO;
import com.agra.entity.Client;


@Service
public class ClientServiceImpl implements ClientService{

	@Autowired
	private ClientDAO clientDAO;

	
	@Transactional
	@Override
	public void addClient(Client client) {
		clientDAO.addClient(client);
		
	}

	@Transactional
	@Override
	public Client getClient(int id) {
		
		return clientDAO.getClient(id);
	}

}
