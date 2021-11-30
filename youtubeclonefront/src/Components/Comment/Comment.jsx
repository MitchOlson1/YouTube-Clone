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