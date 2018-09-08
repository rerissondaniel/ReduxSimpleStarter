import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSeach from 'youtube-api-search'

import SeachBar from './components/search_bar';

const API_KEY = 'AIzaSyD6RHPcNkdGIRhY8PUBjW2myj33hUiRp8w';

class App extends Component{

	constructor(props){
		super(props);
		this.state = {videos: []};
		YTSeach({key: API_KEY, term: 'surfboards'}, videos => {
			this.setState({ videos });
		});
	}

	render(){
		return (
			<div>
				<SeachBar/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));