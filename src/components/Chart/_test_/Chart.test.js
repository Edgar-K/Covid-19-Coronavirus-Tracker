import React from 'react';
import ReactDOM from 'react-dom';
import Chart from '../Chart';



it("test3", ()=>{
    const div =document.createElement('div');
    ReactDOM.render(<Chart data={'data'} country={'country'} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

