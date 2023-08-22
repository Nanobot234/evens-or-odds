import { SET_GUESS } from "./types";

//now checking if user guessed even

export const setGuessEven = () => {
    return {type: SET_GUESS, guess: 'even'};
}

//then if odd
export const setGuessOdd = () => {
    return {type: SET_GUESS, guess: 'odd'};
}