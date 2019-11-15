import React, { Component } from 'react';

import Card_Categoria from './Card_Categoria';
import Card_Raca from './Card_Raca';
import Card_Dicas from './Card_Dicas';

const data1 = [
    {
        image: "racoes-cachorro.webp",
        title: "Rações"
    },
    {
        image: "cachorro-medicina-saude.jpg",
        title: "Medicina e Saúde"
    },
    {
        image: "cachorro-higiene-limpeza.jpg",
        title: "Higiene e Limpeza"
    },
    {
        image: "cachorro-acessorios-para-alimentacao.jpg",
        title: "Acessórios para Alimentação"
    }
];

const data2 = [
    {
        image: "racoes-gato.webp",
        title: "Rações"
    },
    {
        image: "gato-medicina-e-saude.jpg",
        title: "Medicina e Saúde"
    },
    {
        image: "gato-caixa-de-areia-limpeza.jpg",
        title: "Caixa de Areia e Limpeza"
    },
    {
        image: "gato-acessorios-para-alimentacao.jpg",
        title: "Acessórios para Alimentação"
    }
];

const data3 = [
    {
        image: "rottweiler-p.jpg",
        title: "Rottweiler"
    },
    {
        image: "srd-p.jpg",
        title: "Vira Lata (SRD)"
    },
    {
        image: "lhasa-apso-p.jpg",
        title: "Lhasa Apso"
    },
    {
        image: "pug-p.jpg",
        title: "Pug"
    }
];

const data4 = [
    {
        image: "maine_coon-p.jpg",
        title: "Maine Coon"
    },
    {
        image: "bengal-p.jpg",
        title: "Bengal"
    },
    {
        image: "azul_russo-p.jpg",
        title: "Azul Russo"
    },
    {
        image: "american_shorthair-p.jpg",
        title: "American Shorthair"
    }
];

const data5 = [
    {
        image: "shiba.jpg",
        title: "Shiba Inu",
        text: "Conhecidos por serem muito parecidos com uma raposa, os cães da raça se destacam por serem inteligentes, fiéis aos pais e super enérgicos.",
    },
    {
        image: "240x134_premio_reclame_aqui.jpg",
        title: "Prêmio Época Negócios",
        text: "É com grande orgulho que comunicamos a todos que estamos ao Prêmio Época Negócios - Reclame AQUI.",
    },
];

const data6 = [
    {
        image: "chow-chow.jpg",
        title: "Chow chow",
        text: "Parecido com um urso, ele é considerado um excelente cachorro de guarda que costuma ser bastante desconfiado com estranhos.",
    },
    {
        image: "maltes.jpg",
        title: "Maltês",
        text: "Branquinhos peludos e sempre muito alegres, esses cães de companhia já foram reconhecidos como bons caçadores de pequenos roedores.",
    },
];

const data7 = [
    {
        image: "pastor-branco-suico.jpg",
        title: "Pastor Branco Suíço",
        text: "Este simpático pastor de ovelhas de coloração totalmente branca se destaca não somente como guarda, mas também como cão companhia.",
    },
    {
        image: "dalmata.jpg",
        title: "Dálmata",
        text: "Com suas pintas característiscas, ele ganhou fama com o filme '101 Dálmatas', mas engana-se quem acha que não são cães de guarda.",
    },
];


export class Home extends Component {
    render() {
        return (
            <div>
                <div id="wrapper-carrossel">
                    <div className="container">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={process.env.PUBLIC_URL + 'img/carrossel/slide1.jpg'} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={process.env.PUBLIC_URL + 'img/carrossel/slide2.jpg'} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={process.env.PUBLIC_URL + 'img/carrossel/slide3.png'} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="wrapper-categoria">
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <h1>Principais categorias para cachorro</h1>
                                <div class="row">
                                    {data1.map(x => <Card_Categoria image={x.image} title={x.title} />)}
                                </div>
                            </div>

                            <div class="col-6">
                                <h1>Principais categorias para gato</h1>
                                <div class="row">
                                    <div class="row">
                                        {data2.map(x => <Card_Categoria image={x.image} title={x.title} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="wrapper-racas">
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <h1>Raças de cachorro</h1>
                                    <div class="row">
                                        {data3.map(x => <Card_Raca image={x.image} title={x.title} />)}
                                    </div>
                                </div>
                                <div class="col-6">
                                    <h1>Raças de gato</h1>
                                    <div class="row">
                                        {data4.map(x => <Card_Raca image={x.image} title={x.title} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="wrapper-dicas">
                        <div class="container">
                            <h1>Dicas Pet Shop Mourão</h1>
                            <div class="row mb-2">
                                {data5.map(x => <Card_Dicas image={x.image} title={x.title} text={x.text} price={x.price} />)}
                            </div>
                            <div class="row mb-2">
                                {data6.map(x => <Card_Dicas image={x.image} title={x.title} text={x.text} price={x.price} />)}
                            </div>
                            <div class="row mb-2">
                                {data7.map(x => <Card_Dicas image={x.image} title={x.title} text={x.text} price={x.price} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;