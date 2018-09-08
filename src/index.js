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
		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSeach({key: API_KEY, term: 'surfboards'}, videos => {
			this.setState({
			 videos: videos,
			 selectedVideo: videos[0]
			});
		});
	}

	render(){
		return (
			<div>
				<SeachBar/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					videos={this.state.videos}
					onVideoSelect= {selectedVideo =>  this.setState({selectedVideo})}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));