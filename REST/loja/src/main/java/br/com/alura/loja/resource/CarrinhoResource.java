package br.com.alura.loja.resource;

import java.net.URI;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.alura.loja.dao.CarrinhoDAO;
import br.com.alura.loja.modelo.Carrinho;

import com.thoughtworks.xstream.XStream;

@Path("carrinhos")
public class CarrinhoResource {
	
	@Path("{id}")
	@GET
	@Produces(MediaType.APPLICATION_XML)
	public String busca(@PathParam("id") long id) {
		CarrinhoDAO carrinhoDAO = new CarrinhoDAO();
		Carrinho carrinho = carrinhoDAO.busca(id);
		return carrinho.toXML();
	}
	
	@Path("/cadastro")
	@POST
	@Consumes(MediaType.APPLICATION_XML)
	public Response adiciona(String carrinho) {
		CarrinhoDAO carrinhoDAO = new CarrinhoDAO();
		Carrinho carrinhoJson = (Carrinho) new XStream().fromXML(carrinho);
		carrinhoDAO.adiciona(carrinhoJson);
		URI uri = URI.create("/carrinhos/" + carrinhoJson.getId());
		return Response.created(uri).build();
	}
	
	@Path("{id}/produtos/{produtoId}")
	@DELETE
	public Response delete(@PathParam("id") Long id, @PathParam("produtoId") Long productId) {
		Carrinho carrinho = new Carrinho();
		carrinho = new CarrinhoDAO().busca(id);
		carrinho.remove(productId);
		
		return Response.ok().build();
	}

}
