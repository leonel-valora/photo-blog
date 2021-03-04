import PostDetails from "./PostDetails";
import {Link, useRouteMatch} from "react-router-dom";

function Post(props) {
    let match = useRouteMatch();
    return (
        <div className="post-container">
            <p className="post-title">{props.title}</p>
            <p>{props.body} <Link to={`${match.url}post/${props.id}`}>Ver post</Link></p>
        </div>
    );
}
export default Post;