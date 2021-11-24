import React from "react";
import {Component} from 'react';
import SearchBar from "../SearchBar/SearchBar";

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            video_id: "0U2zJOryHKQ"
         }
    }
    render() { 
        return (  
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0U2zJOryHKQ" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src={SearchBar} title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}
 
export default VideoPlayer;

