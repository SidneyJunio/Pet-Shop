import React, { Component } from 'react';

export class Cadastro_Produto extends Component {
    render() {
        return (

            <div id="wrapper-cadastro-produto">
                <div className="container">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label for="inputEspecie">Escolha a espécie</label>
                                <select id="inputEspecie" className="form-control">
                                    <option>Cachorro</option>
                                    <option>Gato</option>
                                    <option>Pássaros</option>
                                    <option>Répteis</option>
                                    <option>Peixes</option>
                                    <option>Roedores</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label for="inputCategoria">Escolha o categoria</label>
                                <select id="inputCategoria" className="form-control">
                                    <option>Rações</option>
                                    <option>Medicina e Saúde</option>
                                    <option>Higiene e limpeza</option>
                                    <option>Acessórios para alimentação</option>
                                    <option>Adestramento e comportamento</option>
                                    <option>Brinquedos</option>
                                    <option>Caixas e bolsas para transporte</option>
                                    <option>Caminha e arranhadores</option>
                                    <option>Coleiras e acessórios</option>
                                    <option>Petiscos</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label for="inputCategoria">Escolha a Marca</label>
                                <select id="inputCategoria" className="form-control">
                                    <option>Friskies</option>
                                    <option>Frontline</option>
                                    <option>Hills</option>
                                    <option>Kong</option>
                                    <option>Origens</option>
                                    <option>Purina</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label for="inputCategoria">Fornecedor</label>
                                <select id="inputCategoria" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>

                            <div className="form-group col-md-3">
                                <label for="inputPeso">Peso</label>
                                <input type="peso" className="form-control" id="inputPeso" placeholder="Kg" />
                            </div>

                            <div className="form-group col-md-3">
                                <label for="inputPreço">Preço</label>
                                <input type="preço" className="form-control" id="inputPreço" placeholder="R$" />
                            </div>

                            <div className="form-group col-md-3">
                                <label for="inputValidade">Data de validade</label>
                                <input type="validade" className="form-control" id="inputValidade" placeholder="dd/mm/aaaa" />
                            </div>

                            <div className="form-group col-md-3">
                                <label for="inputDescrição">Descrição</label>
                                <input type="descrição" className="form-control" id="inputDescrição"
                                    placeholder="Descrição do Produto" />
                            </div>

                            <div className="form-group">
                                <label for="imagemProduto">Upload da imagem do Produto</label>
                                <input type="file" className="form-control-file" id="imagemProduto" />
                            </div>
                        </div>

                        <div className="form-row">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default Cadastro_Produto;