import React , {useState, useEffect} from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import {Component} from "react";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import axios from 'axios';
import ThumbNail from "./Components/Thumbnail/ThumbNail";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            video: '0U2zJOryHKQ',
            comments: [],
            searchWord: "",
            key: 'AIzaSyDQwq4lGQKgcFn5OERre4zrWEOcv5lc2jk',
            videoOptions: []
         }
    }

    componentDidMount(){
        console.log("do something please")

    }

    searchedVid = async(search)=>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${this.state.key}&part=snippet`,this.state)
        console.log(response)
        this.setState({
            video: response.data.items[0].id.videoId,
            videoOptions: [response.data]
        })
        console.log(this.state.video)

    }
    


    render() { 
        console.log(this.state)
        return (
            <div className = 'container'>
                <h2>NewTube</h2>
                <SearchBar searchedVid = {this.searchedVid}/>
                <VideoPlayer videoId = {this.state.video}/>
                {/* <ThumbNail needs to be fixed in order to have app work correctly /> */}

            </div>
        );
}
}
 
export default App;

