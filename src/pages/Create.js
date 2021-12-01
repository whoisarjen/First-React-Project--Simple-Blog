import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending(true)
        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ title, body, author })
        })
            .then(() => {
                setIsPending(false)
                navigate('/')
            })
    }

    return (
        <div className="create">
            { isPending && <p>Adding...</p>}
            { !isPending &&
                <div>
                    <h2>Add a New Blog</h2>
                    <form onSubmit={ handleSubmit }>
                        <label>Blog title:</label>
                        <input 
                        type="text" 
                        required 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Blog body:</label>
                        <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <label>Blog author:</label>
                        <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        >
                        <option value="Mario">Mario</option>
                        <option value="Kamil">Kamil</option>
                        </select>
                        <button>Add Blog</button>
                    </form>
                </div>
            }
        </div>
    );
}
 
export default Create;