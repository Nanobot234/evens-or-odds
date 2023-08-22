import React, {Component} from "react";
import { connect } from "react-redux";
import { Store } from "redux";
import { startGame, cancelGame} from "../actions/settings"; 
import Instructions from "./Instructions";
import { fetchNewDeck } from "../actions/deck";
import DrawCard from "./DrawCard";
import fetchStates from "../reducers/fetchStates";
import Card from "./Card";
import Guess from "./Guess";
import GameState from "./GameState";
//import { fetchDeckResult } from "../actions/deck";



class App extends Component {
    startGame = () => {
        this.props.startGame() //getting it from the imported function!

        this.props.fetchNewDeck() //this calls 


    }

   

render() {

    //check for the error message here, if there is an error than show that to the user
    if(this.props.fetchState == fetchStates.error) {
        return (
            <div style={{textAlign: "center"}}>
                <h3>An error ocurred. Please reloading the app</h3>
                <p>{this.props.message}</p>

            </div>
        )
    }
 
    return (
        <div style={{textAlign:'center'}}>
            <h2> ♠️ Evens or Odds ♣️</h2>
            {
                //this is tenary operator to see what should go on
                this.props.gameStarted ? (
                    <div>
                        <Guess />
                        <h3>The game is on!</h3>
                        <GameState />
                        <br />
                        <DrawCard />
                        <br />
                        <Card />
                        <br />
                        <button onClick={this.props.cancelGame}>Cancel Game</button>
                      <Instructions />
                    </div>
                    
                ):(
                    <div>
                        <h3>A new game awaits</h3>
                        <br />
                        <button onClick={this.startGame}>Start Game</button> {/*No parenthesis with startGame because I am just referencing it in the code*/}
                        <hr />
                        <Instructions />
                    </div>
                )
    
            }
        </div>
    );
}
}

//represents the redux state, helps us to get what part of store we want the component to get access to to. Gives certain specific rights
const  mapStateToProps = state => {
  console.log('state', state)            

//  const {gameStarted, fetchState, message} = state
//using nested destructutre syntax
const {
    settings: {gameStarted},
    deck: {fetchState, message}
} = state;

  return { gameStarted, fetchState, message};
}

//this function maps 
// const mapDispatchToProps = dispatch => {
//     return {
//         startGame: () => dispatch(startGame()),
//         cancelGame: () => dispatch(cancelGame()),
//         fetchNewDeck: () => (fetchNewDeck(dispatch)) //in this link, you pass in the dispatcth method, and that is called when you get the json
//     };
// }

//short hand way to 
const componentConnector = connect(mapStateToProps, 
    {startGame, cancelGame, fetchNewDeck},
     );

export default componentConnector(App);