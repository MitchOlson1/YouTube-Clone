import React , {useState, useEffect} from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import {Component} from "react";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import axios from 'axios';
import RelatedVideo from "./Components/RelatedVideo/RelatedVideo";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            video: 'vJH_ViWK2M4',
            comments: [],
            searchWord: "",
            key:'AIzaSyBQFGUjvpPQQ8bVKmDyWNd9yFTDv0JOGm4',
            videoOptions: [],
            vidDiscription:""
         }
    }

    componentDidMount(){
        console.log("do something please")

    }

    searchedVid = async(search)=>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${this.state.key}&part=snippet`,this.state)
        console.log("I made it")
        this.setState({
            video: response.data.items[0].id.videoId,
            videoOptions: [response.data.items],
            vidDescription : response.data.items[0].snippet.description,
        })
        console.log("options:", this.state.videoOptions)

    }
    


    render() { 
        return (
            <div className = 'container'>
                <h2>NewTube</h2>
                <SearchBar searchedVid = {this.searchedVid}/>
                <VideoPlayer videoId = {this.state.video} key = {this.state.key} /> 

            </div>
        );
}
}
 
export default App;

