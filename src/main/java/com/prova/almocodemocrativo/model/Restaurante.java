package com.prova.almocodemocrativo.model;

public class Restaurante {

	private long id;
	
	private String nome;
	
	private String tipo;
	
	private boolean aceitaVale;
	
	public Restaurante(){
		id=0;
	}
	
	public Restaurante(long id, String nome, String tipo, boolean aceitaVale){
		this.id = id;
		this.nome = nome;
		this.tipo = tipo;
		this.aceitaVale = aceitaVale;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public boolean isAceitaVale() {
		return aceitaVale;
	}

	public void setAceitaVale(boolean aceitaVale) {
		this.aceitaVale = aceitaVale;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (aceitaVale ? 1231 : 1237);
		result = prime * result + (int) (id ^ (id >>> 32));
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		result = prime * result + ((tipo == null) ? 0 : tipo.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Restaurante other = (Restaurante) obj;
		if (aceitaVale != other.aceitaVale)
			return false;
		if (id != other.id)
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		if (tipo == null) {
			if (other.tipo != null)
				return false;
		} else if (!tipo.equals(other.tipo))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Restaurante [id=" + id + ", nome=" + nome + ", tipo=" + tipo + ", aceitaVale=" + aceitaVale + "]";
	}
	
}
