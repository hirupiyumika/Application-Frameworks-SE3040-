import React, {Component} from 'react';
import PostsHolder from './Components/PostsHolder';

export default class App extends Component {
 constructor(props) {
 super(props);
}

 render() {
    return (
      <div>
         <PostsHolder/>
      </div>
    )
 }
}