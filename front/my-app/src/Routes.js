import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Cachorro from './components/Cachorro';
import Gato from './components/Gato';
import Outros_Pets from './components/Outros_Pets';
import Marcas from './components/Marcas';
import Raças from './components/Raças';
import Novidades from './components/Novidades';
import Login from './components/Login';
import Cadastro_Produto from './components/Cadastro_Produto'
import NotFound from './components/NotFound';

export class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Cachorro" component={Cachorro} />
                    <Route path="/Gato" component={Gato} />
                    <Route path="/Outros_Pets" component={Outros_Pets} />
                    <Route path="/Marcas" component={Marcas} />
                    <Route path="/Raças" component={Raças} />
                    <Route path="/Novidades" component={Novidades} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Cadastro_Produto" component={Cadastro_Produto} />
                    <Route component={NotFound} />
                    
                </Switch>
            </div>
        )
    }
};

export default Routes;