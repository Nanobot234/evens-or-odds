
import React from 'react';
import ReactDOM from 'react-dom/client'; 
//use React to create javascript elements, lowerlevel than components

const element = <div>React element with JSX!</div>


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element)