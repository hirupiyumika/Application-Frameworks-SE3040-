import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddPost from './AddPost';
import Posts from './Posts';

const posts = [
 {
 id: 1,
 name: 'React',
 description: 'Best UI library'
 }, {
 id: 2,
 name: 'Node',
 description: 'Server side JS'
 }
];


export default class PostsHolder extends Component {
    constructor(props) {
    super(props);
    }

    addNewPost({name, description}) {
        posts.push({id: posts.length + 1, name, description});
       }

 render() {
 return( 
     <>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Posts posts={posts}/>
                </Route>
                <Route path="/add">
                    <AddPost save={this.addNewPost}/>
                </Route>
            </Switch>
        </Router>
    </>
    );

 }
}