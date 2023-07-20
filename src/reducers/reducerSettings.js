//file to hold reducers in the app
import { SET_GAME_STARTED, 
    SET_INSTRUCTIONS_EXPANDED,

 } from "../actions/types";
 import fetchStates from "./fetchStates";

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}

//this is called!
const settingsReducer = (state = DEFAULT_SETTINGS, action) => {
    console.log('state',state, 'action', action)
        //switch cases

    switch(action.type) {
        case SET_GAME_STARTED:
            //always returns a new object for both state variables, since react compares the difference
         return {
            ...state, //gets all the different chnages
            gameStarted: action.gameStarted,
          //  instructionsExpanded: state.instructionsExpanded
         };
         case SET_INSTRUCTIONS_EXPANDED:
            return {
                
                ...state, //gets all the current state elements, and then you can update the one that you want as desired
                //gameStarted: state.gameStarted,
                instructionsExpanded: action.instructionsExpanded //the action being set is for the instrcutions in this case
            };
            //make another case, for gettign the fetch deck results back
            default:
                return state
    }
};

export default settingsReducer;


