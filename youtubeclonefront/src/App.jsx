import React , {useState, useEffect} from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import {Component} from "react";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            video: '0U2zJOryHKQ',
            comments: [],
            searchWord: "",
            key: 'AIzaSyDQwq4lGQKgcFn5OERre4zrWEOcv5lc2jk'
         }
    }

    componentDidMount(){
        console.log("do something please")
        // this.watchVideos()
    }

    searchedVid = async(search)=>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${this.state.key}&part=snippet`,this.state)
        console.log(response)
        this.setState({
            video: response.data.items[0].id.videoId
        })
        console.log(this.state.video)

    }
    
// watchVideos = async (searchWord) =>{
//     console.log("It works", searchWord)
//     try{
//         let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.searchWord}&key=${this.state.key}&part=snippet`);
//         this.setState({
//             videoResults: response.data.items})
//     }
//     catch(except){
//         console.log("it didn't work")

//     }
// }


    render() { 
        console.log(this.state)
        return (
            <div className = 'container'>
                <h2>NewTube</h2>
                <SearchBar searchedVid = {this.searchedVid}/>
                {/* <SearchBar watchVideosFunction = {this.watchVideos}/> */}
                <VideoPlayer videoId = {this.state.video}/>

            </div>
        );
}
}
 
export default App;

