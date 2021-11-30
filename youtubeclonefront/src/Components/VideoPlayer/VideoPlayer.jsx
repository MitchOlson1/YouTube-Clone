import React from "react";
import {Component} from 'react';
import SearchBar from "../SearchBar/SearchBar";
import RelatedVideo from "../RelatedVideo/RelatedVideo";

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
         }
    }

    render() { 
        return (
        
            <div>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.videoId}`} title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
                
            </div>
                
        );
    }
}
 
export default VideoPlayer;

