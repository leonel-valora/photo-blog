import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {loadDataById, loadFilterData} from "./fetch-data";

function User() {
    let { id } = useParams();
    const [usuario, setUsuario] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(async ()=> {
        const user = await loadDataById('https://jsonplaceholder.typicode.com/users', id);
        const postsByUser = await loadFilterData('https://jsonplaceholder.typicode.com/posts', 'userId', id);
        setUsuario(user);
        setPosts(postsByUser);
    }, []);
    return (
        <div>
            <p>{usuario.name}</p>
            <p>total post: {posts.length}</p>
        </div>
    );
}

export default User;