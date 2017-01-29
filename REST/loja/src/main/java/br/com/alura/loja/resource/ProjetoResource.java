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

import br.com.alura.loja.dao.ProjetoDAO;
import br.com.alura.loja.modelo.Projeto;

import com.sun.org.glassfish.external.probe.provider.annotations.ProbeParam;
import com.thoughtworks.xstream.XStream;

@Path("projetos")
public class ProjetoResource {
	
	@Path("{id}")
	@GET
	@Produces(MediaType.APPLICATION_XML)
	public String busca(@PathParam("id") long id) {
		ProjetoDAO projetoDAO = new ProjetoDAO();
		Projeto projeto = projetoDAO.busca(id);
		return projeto.toXML();
	}
	
	@Path("/cadastro")
	@POST
	@Consumes(MediaType.APPLICATION_XML)
	public Response adiciona(String projeto) {
		ProjetoDAO projetoDAO = new ProjetoDAO();
		Projeto projetoResource = (Projeto) new XStream().fromXML(projeto);
		projetoDAO.adiciona(projetoResource);
		URI uri = URI.create("/projetos/cadastro/" + projetoResource.getId());
		return Response.created(uri).build();
	}
	
	@Path("/remove/{id}")
	@DELETE
	public Response delete (@PathParam("id") Long id) {
		new ProjetoDAO().remove(id);
		
		return Response.ok().build();
	}

}
