import axios from "axios";
import React from "react";
import {Component} from 'react';
import SearchBar from "../SearchBar/SearchBar";
import RelatedVideo from "../RelatedVideo/RelatedVideo";

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            relatedVids:[]
         }
    }
    componentDidMount(){
        this.relatedVids()
    }
    relatedVids = async() =>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.props.videoId}&type=video&key=AIzaSyCZ6QMW_1qdf4B9Vsp9hdGTjb8yel8vzTo&part=snippet`)
        this.setState({
            relatedVids: response.data.items
        })
        console.log('related vids:',this.state.relatedVids)
    }

    render() { 
        return (  
            
            <div>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.videoId}`} title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <RelatedVideo vids = {this.state.relatedVids}/>
            </div>
                
        );
    }
}
 
export default VideoPlayer;

