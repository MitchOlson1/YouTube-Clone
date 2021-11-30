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
            key:'AIzaSyDJG62q7flQ5wuq5gC-NNPOTgBYsg5bOdU',
            videoOptions: [],
            vidDescription:'',
            vidTitle : '',
            currentVid: '',
            currentVidtitle : '',
            currentViddescription : '',
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
            vidTitle : response.data.items[0].snippet.title
        });
        console.log("I made it again")
        console.log("options:", this.state.videoOptions)
    }

    relatedVids = async() =>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.props.videoId}&type=video&key=AIzaSyDJG62q7flQ5wuq5gC-NNPOTgBYsg5bOdU&part=snippet`)
        this.setState({
            relatedVids: response.data.items
        })
        console.log('related vids:',this.state.relatedVids)
    }

    currentVid = async() =>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.props.videoId}&key=AIzaSyDJG62q7flQ5wuq5gC-NNPOTgBYsg5bOdU&part=snippet`,this.state.currentVid)
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
                <div><p>{this.state.currentVidtitle}</p></div>
                <SearchBar searchedVid = {this.searchedVid}/>
                <VideoPlayer videoId = {this.state.video} key = {this.state.key} /> 
                <div><p>{this.state.currentViddescription}</p></div>
                <RelatedVideo vids = {this.state.relatedVids}/>

            </div>
        );
}
}
 
export default App;

