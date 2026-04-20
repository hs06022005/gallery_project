import { useEffect } from 'react'
import axios from 'axios'


const useFetchImage = (setData,setLoading,index ) => {
    useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=16`);
        setData(response.data);
        setLoading(false)
    }

    fetchData();
}, [index])
}

export default useFetchImage;