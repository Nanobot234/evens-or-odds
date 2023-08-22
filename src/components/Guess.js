import React from "react";
import { setGuessEven, setGuessOdd } from "../actions/guess";
import { render } from "react-dom";
import { connect } from "react-redux";

const Guess = ({guess, setGuessEven, setGuessOdd}) => {

    //dont need render , since I will be including it in component

    return (

        <div>
            <h3>Will it be even or odd</h3>
            {/* Extra div below because will use it to style the buttons */}
            <div>
            <button onClick={setGuessEven} 
            style={guess === 'even' ? {border: '2px solid #43a047'}: null} 
            >Even </button>
            { ' '}
            <button onClick={setGuessOdd}
            style={guess === 'odd' ? {border: '2px solid #43a047'}: null}
            >Odd </button>
            </div>
        </div>
    )  
}

export default connect(
    ({gameState: { guess } }) => ({ guess }), 
{setGuessEven, setGuessOdd })(Guess);