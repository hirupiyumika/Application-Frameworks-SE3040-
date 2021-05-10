import React, {Component} from 'react';
import PostsHolder from './Components/PostsHolder';
import UserContext from './Context/UserContext';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: ''
         }
      }

      componentDidMount() {
         this.setState({user: 'admin'})
         
      }
      

 render() {
    return (
      <div>
         <UserContext.Provider value={this.state.user}>
         <PostsHolder/>
         </UserContext.Provider>
      </div>
    )
 }
}