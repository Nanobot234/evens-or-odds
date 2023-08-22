//reducer for the guesses

import { SET_GUESS, SET_GAME_STARTED, DECK_DRAW} from "../actions/types";

//first need to define the default state, always think of the default state

//
const DEFAULT_GAME_STATE = {guess: '', correctGuesses: 0};

//make an array Evens or Odds that will store those elements

 const EVENS = ['2','4','6','8','0'];
 const ODDS = ['ACE','3','5','7','8'];



//make the reducer

const gameStateReducer = (state = DEFAULT_GAME_STATE, action) => {
    switch(action.type) {
        case SET_GUESS:
            return {...state, guess: action.guess};
        case SET_GAME_STARTED:
            return DEFAULT_GAME_STATE;
            
        case DECK_DRAW.FETCH_SUCCESS:
            const { value } = action.cards[0];
            const {guess, correctGuesses} = state

        //now check for correct guessing
        if(guess ==='even' && EVENS.includes(value) ||
        (guess === 'odd' && ODDS.includes(value))
        ) {
            return {...state, correctGuesses: correctGuesses + 1}
        }
            return state
        default:
            return state
    }

}

export default gameStateReducer;