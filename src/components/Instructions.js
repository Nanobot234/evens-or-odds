import React, {Component} from "react";
import { expandInstructions, collapseInstructions } from "../actions/settings";
import { connect } from "react-redux";

//idea
//So, once u press start game, the instructions should show
//then you can collapse, or show the instructions

//I will need to know the current state, which will let me know whether or not to show the instrcutions or not!


//stateles component, since u arent modyifing the UI state?
Instructions = props => {
    
     const {instructionsExpanded, expandInstructions, collapseInstructions} = props; //this is destructuring the props that will be passed in here

   
     if(instructionsExpanded) {
        return (
                //extra parens are for JS code? annd JSX code needs to be wrapped in html tags!!
                <div>
            
             
                    <h3>instrcutions</h3>
                    <p>The deck is shuffled, you have to Guess if the next card drawn is even or odd!</p>
                    <p>(Face cards dont count)</p>
                    <br />
                    <button onClick={collapseInstructions}>Show less</button>
                    {/* <button onClick={this.props.collapseInstructions}>Hide Instructions</button> */}
                    
            
             </div>
        );
    } 

    return (
        <div>
            <h3>Instructions</h3>
            <p>Welcoem to evens or odds. The game goes like this...</p>
            <button onClick={expandInstructions}>Read more</button>
        </div>
    )
}
    

//Can u have a render method in a stateless component??!


//the parameter is the redux state 
const setPropsState = state => {

    return {instructionsExpanded: state.instructionsExpanded} //instructionsExpanded is from the actual reduxState


}

//this fucntion will attach the two named objects to the props object of the component!!
const dispatchForProps = dispatch => {
    return {
        expandInstructions: () => dispatch(expandInstructions()),
        collapseInstructions: () => dispatch(collapseInstructions())

    };
}

//const componentConnector = connect(setPropsState, dispatchForProps)

//export default componentConnector(Instructions) //dcssdc
//will have to set the instrcutions also!

//one liner of whats above!

export default connect(
    
    setPropsState, dispatchForProps)(Instructions);


    //TODO: Look at how props works in the component. not really sure yet!!
