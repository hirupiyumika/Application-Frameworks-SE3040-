import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PostsHolder from './Components/PostsHolder';
import AddPost from './Components/AddPost';

export default class App extends Component {
 constructor(props) {
 super(props);
}

 render() {
    return (
      <Router>
         <Switch>
            <Route exact path="/">
               <PostsHolder/>
            </Route>
            <Route exact path="/add">
               <AddPost save={this.addNewPost}/>
            </Route>
         </Switch>
      </Router>
    )
 }
}