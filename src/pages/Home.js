import PostsList from '../components/PostsList'
import useFetch from '../hooks/useFetch'

const Home = () => {
    const { data: posts, isLoading } = useFetch('http://localhost:8000/posts')

    return (
        <div className="home">
            { isLoading && <p>Loading...</p> }
            { posts && <PostsList posts={ posts } title="Latest posts:" /> }
        </div>
    );
}

export default Home;
