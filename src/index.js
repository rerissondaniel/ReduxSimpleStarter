import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSeach from 'youtube-api-search'

import SeachBar from './components/search_bar';

const API_KEY = 'AIzaSyD6RHPcNkdGIRhY8PUBjW2myj33hUiRp8w';

YTSeach({key: API_KEY, term: 'surfboards'}, (data) => {
	console.log(data);
});

class App extends Component{
	render(){
		return (
			<div>
				<SeachBar/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));