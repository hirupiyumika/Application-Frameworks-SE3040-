import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';

export default class AddPost extends React.Component {
    static contextType = UserContext;

    constructor(props) {
    super(props);
    this.state = {
    name: '',
    description: ''
    }
    }
    onChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value})
    
    }
    render() {
    const {save} = this.props;
    return (
        <div>
            <h5>{this.context}</h5>
            <form>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" 
                value={this.state.name}
                onChange={event => 
                this.onChange(event)}/>
        </div>
        <div>
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" 
                id="description" value={this.state.description}
                onChange={event => 
                this.onChange(event)}/>
        </div>
    </form>

        <div>
            <button onClick={event => {
                event.preventDefault();
                save({name: this.state.name, description: 
                this.state.description});
                this.setState({
                name: '',
                description: ''
                })
                }}>Save
            </button>
        </div>
        <Link to="/">Posts</Link>
    </div>
    )
    }
   }