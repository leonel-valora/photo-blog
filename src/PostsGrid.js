import { useEffect, useState } from "react";
import Post from './Post';

function PostsGrid() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
    }

    return (
        <div className="container">
            {
                posts.map((post) => (<Post key={post.id} id={post.id} title={post.title} body={post.body} />))
            }
        </div>
    );
}

export default PostsGrid;