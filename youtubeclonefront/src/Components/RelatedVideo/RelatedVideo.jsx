import axios from "axios";
import React, {Component} from 'react';
import VideoPlayer from "../VideoPlayer/VideoPlayer";




class RelatedVideo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
    
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
        <div>
            {this.props.vids.map((element)=>
            <a  href={`https://www.youtube.com/embed/${element.id.videoId}`}><img src={`${element.snippet.thumbnails.default.url}`} alt={`${element.snippet.description}`} width="15%" height="15%"/></a>)}
           
        </div>
        )
    }

}

export default RelatedVideo;