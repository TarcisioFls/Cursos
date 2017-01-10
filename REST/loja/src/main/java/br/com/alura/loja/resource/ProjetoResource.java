package br.com.alura.loja.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.alura.loja.dao.ProjetoDAO;
import br.com.alura.loja.modelo.Projeto;

@Path("projetos")
public class ProjetoResource {
	
	@GET
	@Produces(MediaType.APPLICATION_ATOM_XML)
	public String busca(Long id) {
		Projeto projeto = new ProjetoDAO().busca(2l);
		return projeto.toXML();
	}

}
