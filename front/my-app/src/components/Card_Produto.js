import React from "react";

function Card_Produto(props) {
    return (
        
            <div className="card">
                <img className="card-img-top" src={process.env.PUBLIC_URL + '/img/'+props.image}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"><b>{props.text}{" "}{props.price}</b></p>
                    <button type="button" className="btn btn-primary">Comprar</button>
                </div>
            </div>
        
    );
}

export default Card_Produto;