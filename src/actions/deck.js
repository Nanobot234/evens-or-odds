import { DECK, DECK_DRAW} from "./types";

//now will make the relevant action methods
//this function will get the data form the json 
export const fetchDeckSuccess = deckJson => {

    const {remaining, deck_id} = deckJson //this deestructurs the data from the JSON
    return {type: DECK.FETCH_SUCCESS, remaining, deck_id} //returning it
}

//reusable code to fetch decks


//get the errors

//constant for the API, so that you dont retype it over and over
const API_ADDRESS = 'https://www.deckofcardsapi.com/api'

export const fetchDeckError = error => {
    return { type: DECK.FETCH_ERROR, message: error.message}
}


export const fetchNewDeck = () => dispatch => {
    return fetch(`${API_ADDRESS}/deck/new/shuffle/`)
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

export const fetchDrawCard = deck_id => dispatch => {
    return fetch(`${API_ADDRESS}/deck/${deck_id}/draw`)
    .then(response => {
    if(response.status !== 200){
        //you have an error here
        throw new Error('Unsucessful request to deckofcardsapi.com')
    }
    return response.json()
})
//now continue
.then(json =>  {
    //dispath qi
    console.log()
    dispatch({
        type: DECK_DRAW.FETCH_SUCCESS,
        cards: json.cards,
        remaining: json.remaining
    });
})
//you will dispatch the erro messsage here now!
.catch(error => dispatch({type: DECK_DRAW.FETCH_ERROR,error:error.message}))
    
}

//.catch(error => dispatch(fetchDeckError(error)))