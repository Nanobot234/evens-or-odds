import { DECK } from "./types";

//now will make the relevant action methods
//this function will get the data form the json 
export const fetchDeckSuccess = deckJson => {

    const {remaining, deck_id} = deckJson //this deestructurs the data from the JSON
    return {type: DECK.FETCH_SUCCESS, remaining, deck_id} //returning it
}

//reusable code to fetch decks


//get the errors

export const fetchDeckError = error => {
    return { type: DECK.FETCH_ERROR, message: error.message}
}


export const fetchNewDeck = () => dispatch => {
    return fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/')
    .then(response => 
        {
            if(response.status !== 200) {
                throw new Error('Unsuccessful request to deckofcardsapi.com')
            }
             return response.json()
        })  
    .then(json => dispatch(fetchDeckSuccess(json)))
    .catch(error => dispatch(fetchDeckError(error)));
}

//.catch(error => dispatch(fetchDeckError(error)))