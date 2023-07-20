
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css'
//use React to create javascript elements, lowerlevel than components

//basic instructions for the card game
const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}



// creating the redux myStore for the application
const myStore = configureStore({
    reducer: rootReducer
});

console.log('myStore',myStore)

myStore.subscribe(() => {
    console.log('myStore.getState()', myStore.getState());
})
console.log('myStore.getState', myStore.getState());



//myStore.dispatch(startGame()) //will send out the action, for the myStore, calls the functions inside
//myStore.dispatch(cancelGame())
//myStore.dispatch(expandInstructions())
//myStore.dispatch(collapseInstructions())


console.log('myStore.getState()',myStore.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={myStore} >
<App />
</Provider>
)