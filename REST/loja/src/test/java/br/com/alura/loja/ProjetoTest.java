package br.com.alura.loja;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;

import junit.framework.Assert;

import org.glassfish.grizzly.http.server.HttpServer;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.thoughtworks.xstream.XStream;

import br.com.alura.loja.modelo.Projeto;


public class ProjetoTest {
	
	private HttpServer server;
	private Client client;
	private WebTarget target;
	
	@Before
	public void startServidor() {
		
		this.server = Servidor.iniciarServidor();
		this.client = ClientBuilder.newClient();
		this.target = client.target("http://localhost:8080");
		
	}
	
	@After
	public void stopServidor() {
		
		server.stop();
		
	}
		
	@Test
	public void testProjeto() {
		String conteudo =  target.path("/projetos/1").request().get(String.class);
		Projeto projeto = (Projeto) new XStream().fromXML(conteudo);
		Assert.assertEquals("Alura", projeto.getNome());
	}

}
