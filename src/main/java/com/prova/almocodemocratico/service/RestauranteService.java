package com.prova.almocodemocratico.service;

import java.util.List;

import com.prova.almocodemocrativo.model.Restaurante;



public interface RestauranteService {
	
	Restaurante findById(long id);
	
	Restaurante findByName(String name);
	
	void saveRestaurante(Restaurante restaurante);
	
	void updateRestaurante(Restaurante restaurante);
	
	void deleteRestauranteById(long id);

	List<Restaurante> findAllRestaurantes(); 
	
	void deleteAllRestaurantes();
	
	public boolean isRestauranteExist(Restaurante restaurante);

}
