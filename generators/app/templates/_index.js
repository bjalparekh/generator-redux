import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './javascripts/src/App';
import reducer from './javascripts/src/reducers';

const store = createStore(
  reducer
)

console.log("store", store.getState())

ReactDOM.render(
	(<Provider store={store}>
		<App />
	</Provider>), document.getElementById('root'));
