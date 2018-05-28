import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const dotenv = require('dotenv') ;
const fs = require('fs');
//importing the searchbar we've made
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = process.env.API_KEY;





//create a new component
//should produce some HTML
//creates a class of a component
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo: null
            
        };

        
        this.videoSearch('cats');
    }
    //This search will be called becaues it's part of the constructor will populate the site so it's not balnk
        //if the property is named videos and the key in the object is named videos ES6 lets me condense into {videos} instead of {videos:videos}
    videoSearch(term) {
        YTSearch({key: API_KEY, term:term},(videos)=>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }

    render (){
        const videoSearch = _.debounce((term) => this.videoSearch(term), 300);
        return (
        <div>
            <SearchBar onSearchTermChange={term => videoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            {/* passing the prop video to video list */}
            <VideoList 
                onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})}
                videos = {this.state.videos}/> 
        </div>
        );  
    }
}


//put component's generated HTML into the DOM
//need to wrap it in JSX tags <> to create an instance of the component. Render it to div with container class
ReactDOM.render(<App />, document.querySelector('.container'));

