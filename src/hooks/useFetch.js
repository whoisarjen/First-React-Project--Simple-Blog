import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) throw Error('Could not fetch data!')
                return res.json()
            })
            .then(data => setData(data))
            .catch((err) => {
                console.log(err)
            })
            .finally(() => setIsLoading(false))
    }, [url])

    return { data, isLoading }
}

export default useFetch;
