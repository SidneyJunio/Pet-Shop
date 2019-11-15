import React, { Component } from 'react';

export class Login extends Component {
    render() {
        return (
            <div id="wrapper-login">
                <form className="form">
                    <img className="mb-4" src={process.env.PUBLIC_URL + 'img/logo.png'} alt="" width="144" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Entrar</h1>
                    <label for="inputEmail" className="sr-only">Endereço de Email</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Endereço de Email" required="" autofocus="" />
                    <br></br>
                    <label for="inputPassword" className="sr-only">Senha</label>
                    <input type="Senha" id="inputPassword" className="form-control" placeholder="Senha" required="" />
                    <br></br>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Memorizar</label>
                    </div>
                    <br></br>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
                    <p className="mt-5 mb-3 text-muted">© 2019</p>
                </form>
            </div>
        )
    }
};

export default Login;