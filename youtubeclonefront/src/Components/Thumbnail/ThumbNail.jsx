import axios from "axios";
import React, {Component} from 'react';



class ThumbNail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
            // i = 0
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
            <div>
            <img src={`${this.props.videoOptions.[0].data.items[2].snippet.thumbnails.default.url}`} alt={`${this.props.videoOptions[0].data.items[2].snippet.description}`} width="10%" height="10%"></img>
            </div>

        )
    }

}

export default ThumbNail;