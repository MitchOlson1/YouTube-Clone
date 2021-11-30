import axios from 'axios';
import React, {Component} from 'react';
import RelatedVideo from '../RelatedVideo/RelatedVideo';
import VideoPlayer from '../VideoPlayer/VideoPlayer';


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchWord : '',
            relatedVids: [],
            key: 'AIzaSyDJG62q7flQ5wuq5gC-NNPOTgBYsg5bOdU',
        }
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async(event) =>{
        event.preventDefault();
        this.props.searchedVid(this.state.searchWord);
        
        console.log("i did a thing")
    }

    render(){
        return(
            <form onSubmit ={(event) => this.handleSubmit(event)}>
                <label>Search</label>
                    <input type = 'text' name="searchWord" onChange = {this.handleChange} value = {this.state.searchWord}
                     />
                
                <button onclick={this.handleSubmit} type = "submit" value = "Submit"> Search</button>
                
            </form>
        )
    }
}

export default SearchBar;