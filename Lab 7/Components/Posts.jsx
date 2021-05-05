import React, {Component} from 'react';
import PostListItem from './PostListItem';
import Post from './Post';
import { Link } from 'react-router-dom';

export default class Posts extends Component {
 constructor(props) {
 super(props);
 this.state = {
    post: null
   };
 }

 selectPost(post) {
    this.setState({post: post})
   }
   

 render() {
    const {posts} = this.props;
    return(
     <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {posts.map(post => (
            <PostListItem key={post.id.toString()} post={post}
            selectPost={post => this.selectPost(post)}/>
            ))}
            </tbody>
        </table>
        <div>
            {this.state.post ? <Post post={this.state.post}/> : ''}
        </div>
        <Link to="/add">Add</Link> 
    </div>
    )
    }
   }