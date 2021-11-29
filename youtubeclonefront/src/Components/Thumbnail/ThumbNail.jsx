import axios from "axios";
import React, {Component} from 'react';



class ThumbNail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
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
            {this.props.vids.map((element)=>
            <img src={`${element.snippet.thumbnails.default.url}`}  width="10%" height="10%"/>)}
        </div>
        )
    }

}

export default ThumbNail;