import axios from 'axios';
import React, {Component} from 'react';



class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchWord : '',
            key: 'AIzaSyCZ6QMW_1qdf4B9Vsp9hdGTjb8yel8vzTo',
        }
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async(event) =>{
        event.preventDefault();
        this.props.searchedVid(this.state.searchWord)

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