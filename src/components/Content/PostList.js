import classes from "./PostList.module.css";
import Post from "./Post";

const PostList = (props) => {
    return (
        <div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default PostList;