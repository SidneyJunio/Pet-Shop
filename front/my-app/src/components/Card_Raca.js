import React from "react";

function Card_Raca(props) {
    return (

        <div class="col-sm">
            <a><img class="rounded-circle" href="#" src={process.env.PUBLIC_URL + '/img/Raças/' + props.image} /></a>
            <p>{props.title}</p>
        </div>
    );
}

export default Card_Raca;