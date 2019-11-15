import React from "react";
import { Link } from 'react-router-dom';

const links = [
    { route: "/", label: "Home" },
    { route: "/Cachorro", label: "Cachorro" },
    { route: "/Gato", label: "Gato" },
    { route: "/Outros_Pets", label: "Outros_PetsCachorro" },
    { route: "/Marcas", label: "Marcas" },
    { route: "/Ração", label: "Ração" },
    { route: "/Novidades", label: "Novidades" }
];

function renderLink() {
    return links.map(link =>
        <Link key={link.route} className="nav-link" to={link.route}>
            {link.label}
        </Link>
    )
}

function AppHeader() {
    return (
        <div>
            <header className="App-header">
                <div id="wrapper-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-1">

                                <Link to="/Home"><img src={process.env.PUBLIC_URL + '/img/logo.png'} width="80" height="40" alt="logomarca" /></Link>

                            </div>
                            <div className="col-3">
                                <div id="pesquisa">
                                    <input type="email" class="form-control" id="pesquisaSite" aria-describedby="pesquisaSite" placeholder="O que seu pet precisa?" />
                                </div>
                            </div>
                            <div className="col-7">
                                <nav id="menu">
                                    <ul>
                                        <li><Link to="/Cadastro_Produto"><img src={process.env.PUBLIC_URL + '/img/icone pet.png'} width="80" height="40" alt="logomarca" /><h8> Cadastrar Pet</h8></Link></li>
                                        <li><a href="#"><img src={process.env.PUBLIC_URL + '/img/icone meus pedidos.png'} /> Meus Pedidos</a></li>
                                        <li><a href="#"><img src={process.env.PUBLIC_URL + '/img/icone assinatura.png'} /> Assinatura</a></li>
                                        <li><img src={process.env.PUBLIC_URL + '/img/icone entrar.png'} width="18" height="18" /> <Link to="/Login">Entrar/Cadastrar</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-1">
                                <a href="#"><img src={process.env.PUBLIC_URL + '/img/icone carrinho.png'} width="40" height="40" href="#" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="wrapper-menu">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto">

                                        <Link key="/cachorro" className="nav-link" to="/cachorro">Cachorro</Link>
                                        <Link key="/gato" className="nav-link" to="/gato">Gato</Link>
                                        <Link key="/outros_pets" className="nav-link" to="/outros_pets">Outros Pets</Link>
                                        <Link key="/marcas" className="nav-link" to="/marcas">Marcas</Link>
                                        <Link key="/raças" className="nav-link" to="/raças">Raças</Link>
                                        <Link key="/novidades" className="nav-link" to="/novidades">Novidades</Link>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default AppHeader;