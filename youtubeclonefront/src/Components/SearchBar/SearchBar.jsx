import axios from 'axios';
import React, {Component} from 'react';
import RelatedVideo from '../RelatedVideo/RelatedVideo';



class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchWord : '',
            relatedVids: [],
            key: 'AIzaSyBQFGUjvpPQQ8bVKmDyWNd9yFTDv0JOGm4',
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
    // componentDidMount(){
    //     this.relatedVids()
    // }
    // relatedVids = async() =>{
    //     let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.props.videoId}&type=video&key=AIzaSyCZ6QMW_1qdf4B9Vsp9hdGTjb8yel8vzTo&part=snippet`)
    //     this.setState({
    //         relatedVids: response.data.items
    //     })
    //     console.log('related vids:',this.state.relatedVids)
    // }

    render(){
        return(
            <form onSubmit ={(event) => this.handleSubmit(event)}>
                <label>Search</label>
                    <input type = 'text' name="searchWord" onChange = {this.handleChange} value = {this.state.searchWord}
                     />
                
                <button onclick={this.handleSubmit} type = "submit" value = "Submit"> Search</button>
                {/* <div>
                <RelatedVideo vids = {this.state.relatedVids}/>
                </div> */}
            </form>


        )
    }

}

export default SearchBar;