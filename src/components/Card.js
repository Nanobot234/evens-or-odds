//component that will display the card image to the user when drawn

import React, {Component} from "react";
import { Connect, connect } from "react-redux";

//will need to get the card image(from the URL?) and then display it in an image feld, music mastert??


//destructing the cards. This will be from the state
const Card = ({ cards }) => {
    
    //need to check if you have drawn the first card yet
//
//console.log(cards.length)

//the actual thing is undefined so cant loo
    if( typeof cards == "undefined"){
        return null;
    }

    const {value, suit, image} = cards[0];

    return (
        <div>
            <h3>{value} of {suit}</h3>
            <img src={image} alt="card-image"></img>
        </div>
    )
}

export default connect(({deck: {cards} }) => ({ cards }))(Card); //how does this work again
//the avbove line is really whats ca