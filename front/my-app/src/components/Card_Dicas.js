import React from "react";

function Card_Dicas(props) {
    return (

        <div class="col-md-6">
            <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                <img width="100%" src={process.env.PUBLIC_URL + '/img/Dicas/' + props.image} />
                <div class="card-body d-flex flex-column align-items-start">
                    <h3 class="mb-0">
                        <h5 className="card-title">{props.title}</h5>
                    </h3>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Card_Dicas;