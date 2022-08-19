import { useState, useEffect } from 'react';
import axios from 'axios';

function LoadImages(pagecount) {
    const [imageData, setimageData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://api.unsplash.com/photos?client_id=tcFmvGK3-Z2KJWbsfXDGpqFN_vd4oC__LoPaksDJCZg&page=${pagecount}`)
            .then((data) => {
                setimageData([...imageData, ...data.data]);
            })
    }, [pagecount])

    return imageData;
}

function SearchImages(query, pagecount) {
    const [searchimageData, setsearchimageData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://api.unsplash.com/search/photos?query=${query}&client_id=tcFmvGK3-Z2KJWbsfXDGpqFN_vd4oC__LoPaksDJCZg&page=${pagecount}`)
            .then((data) => {
                setsearchimageData([...searchimageData, ...data.data.results]);
            })
    }, [query, pagecount])

    return searchimageData;
}

export { LoadImages, SearchImages };