//file to hold reducers in the app

 import fetchStates from "./fetchStates";
 import settingsReducer from "./reducerSettings";
 import deckReducer from "./deckReducer";
 import gameStateReducer from "./gameState";

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}

//this is proabibyc called in other cases
export default {
    deck: deckReducer,
    settings: settingsReducer,   
    gameState: gameStateReducer
};




//this is called!
// const rootReducer = (state = DEFAULT_SETTINGS, action) => {
//     console.log('state',state, 'action', action)
//         //switch cases

//     switch(action.type) {
//         case SET_GAME_STARTED:
//             //always returns a new object for both state variables, since react compares the difference
//          return {
//             ...state, //gets all the different chnages
//             gameStarted: action.gameStarted,
//           //  instructionsExpanded: state.instructionsExpanded
//          };
//          case SET_INSTRUCTIONS_EXPANDED:
//             return {
                
//                 ...state, //gets all the current state elements, and then you can update the one that you want as desired
//                 //gameStarted: state.gameStarted,
//                 instructionsExpanded: action.instructionsExpanded //the action being set is for the instrcutions in this case
//             };
//             //make another case, for gettign the fetch deck results back
//          case DECK.FETCH_SUCCESS:
//             const {remaining, deck_id} = action //this destrcutres the action parameter. THis is needed since action will have various things
//             return {...state, 
//                     remaining, 
//                      deck_id,
//                     fetchState: fetchStates.success};   
//          case DECK.FETCH_ERROR:
//             return {... state,
//                  message: action.message,
//                 fetchState: fetchStates.error};
//             default:
//                 return state
//     }
// };

// export default rootReducer;


