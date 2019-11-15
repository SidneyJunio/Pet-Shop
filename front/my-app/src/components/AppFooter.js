import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            
            <div id="wrapper-footer">
                <div className="container">

                    <footer className="pt-4 my-md-5 pt-md-5 border-top">
                        <div id="rodape">
                            <div className="row">
                                <div className="col-12 col-md">
                                    <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo Pet Shop Mourão" width="70" height="50" />
                                    <small className="d-block mb-3 text-muted">© 2019-2020</small>
                                </div>
                                <div className="col-6 col-md">
                                    <h5>Institucional</h5>
                                    <ul className="list-unstyled text-small">
                                        <li><a className="text-muted" href="#">Empresa</a></li>
                                        <li><a className="text-muted" href="#">Política de privacidade</a></li>
                                        <li><a className="text-muted" href="#">Política de entrega e devolução</a></li>
                                        <li><a className="text-muted" href="#">Política de compra</a></li>
                                        <li><a className="text-muted" href="#">Termos e condições de uso</a></li>

                                        <li><a className="text-muted" href="#">Trabalhe conosco</a></li>
                                    </ul>
                                </div>
                                <div clclassNameass="col-6 col-md">
                                    <h5>Atendimento</h5>
                                    <ul className="list-unstyled text-small">
                                        <li><a className="text-muted" href="#">Central de Atendimento</a></li>
                                        <li><a className="text-muted" href="#">Seja um Afiliado Pet Sho Mourão</a></li>
                                        <li><a className="text-muted" href="#">Endereço</a></li>
                                        <li><a className="text-muted">Telefone de Contato: (xx) x xxxx-xxxx</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md">
                                    <h5>Minha conta</h5>
                                    <ul className="list-unstyled text-small">
                                        <li><a className="text-muted" href="#">Meus Dados pessoais</a></li>
                                        <li><a className="text-muted" href="#">Meus favoritos</a></li>
                                        <li><a className="text-muted" href="#">Meus pedidos</a></li>
                                        <li><a className="text-muted" href="#">Minhas assinaturas</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
};

export default Footer;