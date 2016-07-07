import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import data from './data/data'

ReactDOM.render(<App datasets={data}/>, document.getElementById('root'));

