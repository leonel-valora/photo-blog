import { useEffect, useState } from "react";
import {loadData ,loadDataById}  from './fetch-data';
import {Link, useParams, useRouteMatch} from "react-router-dom";

function PostDetails(props) {
    let { id } = useParams();
    let match = useRouteMatch();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState([]);

    const loadData= () => {
      Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
          fetch(`https://jsonplaceholder.typicode.com/comments`),])
      .then(  
        async ([responsePost, responseComments]) => {
          const dataPost = await responsePost.json();
          const dataComments = await responseComments.json();
          const userResp = await fetch(`https://jsonplaceholder.typicode.com/users/${dataPost.userId}`);
          const userData = await userResp.json();
          return [dataPost, dataComments.filter((comment) => comment.postId == id), userData];
      })
      .then((json) => {
        setPost(json[0]);
        setComments(json[1]);
        setUser(json[2]);
      });
    } 
    useEffect(() => {
      loadData();
    }, []);
    //const [user, setUser] = useState([]);


    return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>by <Link to={`/user/${user.id}`}>{user.name}</Link></p>
          <p>Comentarios</p>
          <ul>
            {
              comments.map((comment, index) => 
              (<li key={index}>{comment.body}</li>)
              )
            }
          </ul>
        </div>
      );
}

export default PostDetails;