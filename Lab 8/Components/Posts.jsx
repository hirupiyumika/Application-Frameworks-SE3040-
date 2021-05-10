import React, {useState,useEffect} from 'react';
import PostListItem from './PostListItem';
import Post from './Post';
import { Link } from 'react-router-dom';

const Posts = ({posts}) => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        console.log('Mount and update from the effect hook');
        return () => console.log("Un-mount from the effect hook");
       });
       
    selectPost = (post) =>{
        setPost(post)
    }

    return ( 
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
            selectPost={post => selectPost(post)}/>
            ))}
            </tbody>
        </table>
        <div>
            {post ? <Post post={post}/> : ''}
        </div>
        <Link to="/add">Add</Link> 
    </div>
     );
}
 
export default Posts;