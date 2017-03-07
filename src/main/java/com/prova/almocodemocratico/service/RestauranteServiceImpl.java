package com.prova.almocodemocratico.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

import com.prova.almocodemocrativo.model.Restaurante;

@Service("restauranteService")
public class RestauranteServiceImpl implements RestauranteService{
	
	private static final AtomicLong counter = new AtomicLong();
	
	private static List<Restaurante> restaurantes;
	
	static{
		restaurantes= populateDummyRestaurantes();
	}

	public List<Restaurante> findAllRestaurantes() {
		return restaurantes;
	}
	
	public Restaurante findById(long id) {
		for(Restaurante restaurante : restaurantes){
			if(restaurante.getId() == id){
				return restaurante;
			}
		}
		return null;
	}
	
	public Restaurante findByName(String name) {
		for(Restaurante restaurante : restaurantes){
			if(restaurante.getNome().equalsIgnoreCase(name)){
				return restaurante;
			}
		}
		return null;
	}
	
	public void saveRestaurante(Restaurante restaurante) {
		restaurante.setId(counter.incrementAndGet());
		restaurantes.add(restaurante);
	}

	public void updateRestaurante(Restaurante restaurante) {
		int index = restaurantes.indexOf(restaurante);
		restaurantes.set(index, restaurante);
	}

	public void deleteRestauranteById(long id) {
		
		for (Iterator<Restaurante> iterator = restaurantes.iterator(); iterator.hasNext(); ) {
		    Restaurante restaurante = iterator.next();
		    if (restaurante.getId() == id) {
		        iterator.remove();
		    }
		}
	}

	public boolean isRestauranteExist(Restaurante restaurante) {
		return findByName(restaurante.getNome())!=null;
	}
	
	public void deleteAllRestaurantes(){
		restaurantes.clear();
	}

	private static List<Restaurante> populateDummyRestaurantes(){
		List<Restaurante> restaurantes = new ArrayList<Restaurante>();
		restaurantes.add(new Restaurante(counter.incrementAndGet(),"HAPPY", "Buffet", true));
		restaurantes.add(new Restaurante(counter.incrementAndGet(),"RAMBLAS", "Buffet", true));
		restaurantes.add(new Restaurante(counter.incrementAndGet(),"SUSHI", "PEIXES", true));
		return restaurantes;
	}

}
