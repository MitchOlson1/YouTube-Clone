import react from react;

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchWord : '',
        }
    }
    
    handleChange = (event) =>{
        this.setState({
            searchWord : event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.submission(this.state)
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <label>Search Below</label>
                    Name: <input type = 'text' value = {this.state}
                    onChange = {this.handleChange} />
                
                <input type = "submit" value = "Submit" />
            </form>

        )
    }

}

export default SearchBar;