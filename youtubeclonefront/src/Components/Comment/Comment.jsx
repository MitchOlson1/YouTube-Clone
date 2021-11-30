import axios from 'axios';
import React, {Component} from 'react';



class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
         comment : '',
         video_id : this.props.video_id,
         likes : 0,
         dislikes: 0
        }
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async(event) =>{
        event.preventDefault();
        await axios.post('http://127.0.0.1:8000/youtube_clone_backend/',this.state)
    }

    render(){
        return(
            <div class= "container" width="50%" height= "20%">
            <form onSubmit ={(event) => this.handleSubmit(event)}>
                <label>Comments</label>
                    <input type = 'text' name="comment" onChange = {this.handleChange} value = {this.state.comment}/>
                <button onclick={this.handleSubmit} type = "submit" value = "Submit"> Submit Comment</button>
            </form>
            </div>
        )
    }
}

export default Comment;
