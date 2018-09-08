import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSeach from 'youtube-api-search'
import VideoList from './components/video_list'
import SeachBar from './components/search_bar';
import VideoDetail from './components/video_detail'
import API_KEY from '../conf/youtube-api-key'

class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term){
		YTSeach({key: API_KEY, term: term}, videos => {
			this.setState({
			 videos: videos,
			 selectedVideo: videos[0]
			});
		});
	}

	render(){
		const videoSearch = _.debounce(term => this.videoSearch(term), 300);
		return (
			<div>
				<SeachBar onSearchTerm={term => videoSearch(term)}/>
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