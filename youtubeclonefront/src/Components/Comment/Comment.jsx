<<<<<<< HEAD
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
        let response = await axios.post('http://127.0.0.1:8000/youtube_clone_backend/',this.state.comment)
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
=======
import React from "react";
import axios from "axios";


class AllComments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }

    getComments = async =>(){
        response = await axios.get(`http://127.0.0.1:8000/youtubeclone/comments`)
    }

    newComments = async =>(){
        response = await axios.post(`http://127.0.0.1:8000/youtubeclone/comments`)
    }

    likeComment = async =>(){
    }

    dislikeComment = async =>(){
    }


}
    render() { 
        return ( 
            <div className = "comment_section">
                <div class = "container">
            <form action = "{url"    
            
                </div>




            </div>

         );
    }
}
 
export default AllComments;










<form onSubmit ={(event) => this.handleSubmit(event)}>
                <label>Search</label>
                    <input type = 'text' name="searchWord" onChange = {this.handleChange} value = {this.state.searchWord}
                     />
                
                <button onclick={this.handleSubmit} type = "submit" value = "Submit"> Search</button>
                
            </form>
>>>>>>> 7fc07848167f8833fd8c91e91ee399355fcf7aed
