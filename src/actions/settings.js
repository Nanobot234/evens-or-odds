//file to hold the relevant setting  in the application

//export keyword makes it available to all files, when the files import settings.js
import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from "./types";

export const startGame = () => {
    return {
        type: SET_GAME_STARTED,
        gameStarted: true
    }

}

 export const cancelGame = () => {
    return {
        type: SET_GAME_STARTED,
        gameStarted: false
    };
 }

 export const expandInstructions = () => {
    return {
        type: SET_INSTRUCTIONS_EXPANDED,
        instructionsExpanded: true
    };
 }

export const collapseInstructions = () => {
    return {
        type: SET_INSTRUCTIONS_EXPANDED,
        instructionsExpanded: false
    };
 }
 