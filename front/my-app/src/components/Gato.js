import React, { Component } from 'react';

import Card_Produto from './Card_Produto';

const data1 = [
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    }

];

const data2 = [
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
];

const data3 = [
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
];

const data4 = [
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
    {
        image: "Ração_Gato_Castrado.jpg",
        title: "Ração Gran Plus Gatos Castrados Frango e Arroz  10 kg",
        text: "R$",
        price: 120.00
    },
];



export class Gato extends Component {
    render() {
        return (
            <div id="wrapper-gato">
                <div className="row">
                    <div className="card-deck">
                        {data1.map(x => <Card_Produto image={x.image} title={x.title} text={x.text} price={x.price} />)}
                    </div>
                </div>

                <div className="row">
                    <div className="card-deck">
                        {data2.map(x => <Card_Produto image={x.image} title={x.title} text={x.text} price={x.price} />)}
                    </div>
                </div>

                <div className="row">
                    <div className="card-deck">
                        {data3.map(x => <Card_Produto image={x.image} title={x.title} text={x.text} price={x.price} />)}
                    </div>
                </div>

                <div className="row">
                    <div className="card-deck">
                        {data4.map(x => <Card_Produto image={x.image} title={x.title} text={x.text} price={x.price} />)}
                    </div>
                </div>
            </div>
        )
    }
};

export default Gato;