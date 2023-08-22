import { Connect, connect } from "react-redux";


const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_foo123';

//the folowing method checks checks the record and sets a new one if its greater
const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessesRecordKey));

    if(correctGuesses > record) {
        localStorage.setItem(correctGuessesRecordKey, correctGuesses);

        //here you update the store , whith these new variables
        return {record: correctGuesses, isNewRecord: true};
    }

    return {record, isNewRecord: false}

}


const GameState = ({ remaining, correctGuesses }) => {

    const guessText = correctGuesses === 1 ? 'guess' : 'guesses';

    //here you destructure the value returne from calling this function
    const {record, isNewRecord} = checkRecord(correctGuesses); 

    //new record label to display, this still works when refreshed due to correcGusees reset
    const recordLabel = isNewRecord ? " New Record!!!" : 'Record'
    return (

        <div>
            <h3>{recordLabel}: {record}</h3>
            <p> {remaining} cards remaining</p>
            <p> {correctGuesses} correct {guessText} </p>

        </div>

    );
}


export default connect(
    ({deck: {remaining}, 
        gameState: {correctGuesses}}) => 
        ({remaining, correctGuesses})
        )(GameState);
