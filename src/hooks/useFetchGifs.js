import { useEffect, useState } from "react";
import { getApiGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true)

    const getImages = async () => {
        const newImages = await getApiGifs(category);

        setImages(newImages);
        setIsloading(false);
    }

    useEffect(() => { getImages(); }, [])

    return {
        images: images,
        isLoading: isLoading
    }
}
