import React, { Component } from 'react';

import Card_Produto from './Card_Produto';

const data1 = [
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    }

];

const data2 = [
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
];

const data3 = [
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
];

const data4 = [
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
    {
        image: "racao-golden.jpg",
        title: "Ração Premier Golden Special Cães Adultos Frango e Carne - 15 kg",
        text: "R$",
        price: 110.00
    },
];

export class Cachorro extends Component {
    render() {
        return (
            <div id="wrapper-cachorro">
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

export default Cachorro;