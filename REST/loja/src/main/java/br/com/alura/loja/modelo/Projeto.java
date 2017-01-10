package br.com.alura.loja.modelo;

import com.thoughtworks.xstream.XStream;

public class Projeto {
	
	private long id;
	private String nome;
	private int anoDeInicio;
	
	public Projeto(){
		
	}
	
	public Projeto(long id, String nome, int anoDeInicio) {
		this.id = id;
		this.nome =  nome;
		this.anoDeInicio = anoDeInicio;
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

	public int getAnoDeInicio() {
		return anoDeInicio;
	}

	public void setAnoDeInicio(int anoDeInicio) {
		this.anoDeInicio = anoDeInicio;
	}
	
	public String toXML() {
		XStream stream = new XStream();
		return stream.toXML(this);
	}
	
}
