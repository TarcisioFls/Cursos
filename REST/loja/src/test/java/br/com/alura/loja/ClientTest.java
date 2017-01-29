package br.com.alura.loja;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import junit.framework.Assert;

import org.glassfish.grizzly.http.server.HttpServer;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import br.com.alura.loja.modelo.Carrinho;
import br.com.alura.loja.modelo.Produto;

import com.thoughtworks.xstream.XStream;


public class ClientTest {
	
	private HttpServer server;
	
	@Before
	public void startServidor(){
		this.server = Servidor.iniciarServidor();
	}
	
	@After
	public void stopServidor() {
		server.stop();
	}
	
	@Test
	public void testaQueAConexaoComOServidorFunciona() {
		Client client = ClientBuilder.newClient();
		WebTarget target = client.target("http://localhost:8080");
		String conteudo = target.path("/carrinhos/1").request().get(String.class);
		Carrinho carrinho = (Carrinho) new XStream().fromXML(conteudo);
		Assert.assertEquals("Rua Vergueiro 3185, 8 andar", carrinho.getRua());
	}
	
	@Test
	public void testeCadastro() {
		Client client = ClientBuilder.newClient();
		WebTarget target = client.target("http://localhost:8080");
		Carrinho carrinho = new Carrinho();
        carrinho.adiciona(new Produto(314L, "Celular", 222, 1));
        carrinho.setRua("Lororor");
        carrinho.setCidade("PE");
        String xml = carrinho.toXML();
		
        Entity<String> entity = Entity.entity(xml, MediaType.APPLICATION_XML);

        Response response = target.path("/carrinhos/cadastro").request().post(entity);
        Assert.assertEquals(201, response.getStatus());
	}

}
