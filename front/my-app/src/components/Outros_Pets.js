import React, { Component } from 'react';

import Card_Produto from './Card_Produto';

const data1 = [
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    }

];

const data2 = [
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
];

const data3 = [
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
];

const data4 = [
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
    {
        image: "Ração_Zootekna_Mix_para_Jabuti.jpg",
        title: "Ração Zootekna Mix para Jabuti 200 mg",
        text: "R$",
        price: 17.90
    },
];



export class Outros_Pets extends Component {
    render() {
        return (
            <div id="wrapper-outros_pets">
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

export default Outros_Pets;