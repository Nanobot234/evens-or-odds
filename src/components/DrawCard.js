//DrawCard component will be here thats what is 

import React from "react";
import  { connect } from 'react-redux'
import { fetchDrawCard } from "../actions/deck";
import { setGuessEven, setGuessOdd } from "../actions/guess";

const DrawCard = ({deck_id, fetchDrawCard}) => {
    //lofg the props
    return (
         <div>
            {/* Can make even or odd button here */}

            <button onClick={fetchDrawCard(deck_id)}>Draw the next card!</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id))
    };
}

export default connect(
    ({deck: {deck_id} } ) => ({deck_id}),mapDispatchToProps //this passes it on?
)(DrawCard)
