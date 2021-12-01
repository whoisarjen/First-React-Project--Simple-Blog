import { Link } from "react-router-dom";

const PostsList = ({ posts, title }) => {
    return (
        <div className="postsList">
            <h2>{ title }</h2>
            { posts.map((post) => (
                <div className="blog-preview" key={ post.id }>
                    <Link to={ `/blog/${ post.id }` }>
                        <h2>{ post.title }</h2>
                    </Link>
                    <p>Written by { post.author }</p>
                </div>
            )) }
        </div>
    );
}
 
export default PostsList;
