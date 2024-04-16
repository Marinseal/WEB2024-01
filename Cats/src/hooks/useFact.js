import { useState, useEffect } from "react";
import { fetchFact } from "../services/fetch-fact";
import { fetchImg } from "../services/fetch-img";

export function useFact() {
  const [fact, setFact] = useState(null);
  const [img, setImg] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const getFactData = async () => {
    setLoader(true);
    try {
        const dataFact = await fetchFact();
        setFact(dataFact);

        const imgUrl = dataFact.split(' ').slice(0, 4).join(' ');
        const imgFact = await fetchImg(imgUrl);
        setImg(imgFact);

        } catch (error) {
            setError(error)
        } finally{
            setTimeout(()=>{
                setLoader(false)
            },2000)
        }
    }

    useEffect(()=>{
        getFactData();
    }, [])

    const newFact = () => { 
        getFactData();
    }

    return { fact, img, loader, error, newFact };
}