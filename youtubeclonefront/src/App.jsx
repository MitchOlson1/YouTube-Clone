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
            key:'AIzaSyBQiDeKWrhUpGtXZ0e0WT3cucAPYs-iLFI',
            videoOptions: [],
            vidDescription:'',
            vidTitle : '',
            currentVid: '',
            currentVidtitle : '',
            currentVidDescription : '',
            relatedVids: []

         }
    }

    componentDidMount(){
        this.relatedVids()
        this.currentVid()
    } 

    searchedVid = async(search)=>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${this.state.key}&part=snippet`)
        console.log("I made it")
        this.setState({
            searchWord : search,
            video: response.data.items[0].id.videoId,
            videoOptions: [response.data.items],
            vidDescription : response.data.items[0].snippet.description,
            vidTitle : response.data.items[0].snippet.title,
            currentVidDescription : response.data.items[0].snippet.description,
            currentVidTitle : response.data.items[0].snippet.title
        });
        console.log("I made it again")
        console.log("options:", this.state.videoOptions)
    }

    relatedVids = async() =>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.state.video}&type=video&key=${this.state.key}&part=snippet`)
        this.setState({
            relatedVids: response.data.items
        })
        console.log('related vids:',this.state.relatedVids)
    }
    
    currentVid = async() =>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.video}&key=${this.state.key}&part=snippet`,this.state.currentVid)
        this.setState({
            currentVidTitle : response.data.items[0].snippet.title,
            currentVidDescription: response.data.items[0].snippet.description
        })
        console.log('current vid:',this.state.currentVid)
    }


    
    render() { 
        return (
            <div className = 'container'>
                <h2>NewTube</h2>
                <h2><SearchBar searchedVid = {this.searchedVid}/></h2>
                <div><h2>{this.state.currentVidTitle}</h2></div>
                <VideoPlayer videoId = {this.state.video} key = {this.state.key} /> 
                <div><p>{this.state.currentVidDescription}</p></div>
                <RelatedVideo vids = {this.state.relatedVids}/>

            </div>
        );
}
}
 
export default App;

