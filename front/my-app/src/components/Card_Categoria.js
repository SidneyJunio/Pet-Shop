import React from "react";

function Card_Categoria(props) {
    return (

        <div className="col-sm">
            <img className="d-block w-100" href="#" src={process.env.PUBLIC_URL + '/img/categoria/'+props.image} />
            <p>{props.title}</p>
        </div>
    );
}

export default Card_Categoria;