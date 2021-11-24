import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import {Component} from "react";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchResults:[],
            comments: [],
            searchWord: "",
 
         }
    }

    componentDidMount(){
        console.log("do something please")
        this.watchVideos()
    }
    
watchVideos = async (searchWord) =>{
    console.log("It works", searchWord)
    try{
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=$(searchWord)&key=${key}&part=snippet');
        this.setState({
            videoResults: response.data.items})
    }
    catch(except){
        console.log("it didn't work")

    }
}

    render() { 
        console.log(this.state)
        return (
            <div className = 'container'>
                <h2>NewTube</h2>
                <SearchBar watchVideosFunction = {this.watchVideos}/>
                <VideoPlayer />

                
            </div>
        );
}
}
 
export default App;

