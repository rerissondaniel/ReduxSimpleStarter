import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSeach from 'youtube-api-search'
import VideoList from './components/video_list'
import SeachBar from './components/search_bar';
import VideoDetail from './components/video_detail'

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
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));