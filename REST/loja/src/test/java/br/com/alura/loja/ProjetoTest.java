package br.com.alura.loja;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;

import junit.framework.Assert;

import org.junit.Test;

public class ProjetoTest {
		
	@Test
	public void testProjeto() {
		Client client = ClientBuilder.newClient();
		WebTarget target = client.target("http://localhost:8080");
		String conteudo =  target.path("/projetos").request().get(String.class);		Assert.assertTrue(conteudo.contains("<nome>Alura"));
		Assert.assertTrue(conteudo.contains("<nome>Alura"));
	}

}
