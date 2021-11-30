import axios from 'axios';
import React, {Component} from 'react';



class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
         comment : '',

        }
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async(event) =>{
        event.preventDefault();
        let response = await axios.post('http://127.0.0.1:8000/youtube_clone_backend',this.state.comment)
        this.setState({
            comment : response.data
        })
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
