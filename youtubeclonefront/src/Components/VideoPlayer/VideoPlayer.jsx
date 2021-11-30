import axios from "axios";
import React from "react";
import {Component} from 'react';
import SearchBar from "../SearchBar/SearchBar";
import RelatedVideo from "../RelatedVideo/RelatedVideo";


class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            relatedVids:[],
            currentVid : []
         }
    }
    componentDidMount(){
        this.relatedVids()
        this.currentVid()
    }

    relatedVids = async() =>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.props.videoId}&type=video&key=AIzaSyBQFGUjvpPQQ8bVKmDyWNd9yFTDv0JOGm4&part=snippet`)
        this.setState({
            relatedVids: response.data.items
        })
        console.log('related vids:',this.state.relatedVids)
    }

    currentVid = async() =>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.props.videoId}&key=AIzaSyBQFGUjvpPQQ8bVKmDyWNd9yFTDv0JOGm4&part=snippet`,this.state.currentVid)
        this.setState({
            currentVid : response.data.items[0].snippet
        })
        console.log('current vid:',this.state.currentVid)
    }

    render() { 
        return (  
            
            <div>
                <div><p>{this.state.currentVid.title}</p></div>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.videoId}`} title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div><p>{this.state.currentVid.description}</p></div>
                <RelatedVideo vids = {this.state.relatedVids}/>
                {/* <Description test = {this.state.currentVid}/> */}
            </div>
                
        );
    }
}
 
export default VideoPlayer;

