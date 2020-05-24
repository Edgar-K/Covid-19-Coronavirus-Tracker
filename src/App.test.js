import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it("test2", ()=>{
    const div =document.createElement('React.StrictMode');
    ReactDOM.render(<App /> , div);
    ReactDOM.unmountComponentAtNode(div);
});