import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const { id } = useParams()
    const { data: post, isLoading } = useFetch(`http://localhost:8000/posts/${ id }`)
    const navigate = useNavigate()

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/posts/${ id }`, {
            method: 'DELETE'
        })
            .then(() => {
                navigate('/')
            })
    }

    return (
        <div className="post">
            { isLoading && <p>Loading...</p> }
            { post &&
                <article>
                    <button onClick={ () => handleDelete(post.id) }>Delete</button>
                    <h1>{ post.title }</h1>
                    <p>Written by { post.author }</p>
                    <div>{ post.body }</div>
                </article>
             }
        </div>
    );
}
 
export default Post;