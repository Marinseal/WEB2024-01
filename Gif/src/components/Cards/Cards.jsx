import './Cards.css';
import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { fetchGif } from '../../services/fetch-gif';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export function Cards ({searchInput}) {
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState();
  const [gif, setGif] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      setLoading(true);
      try {
        const data = await fetchGif(searchInput);
        setGif(data.data);
      } catch (error) {
        console.error('Error al obtener los gifs', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchInput) {
      fetchGifs();
    } else {
      setGif([]);
    }
  }, [searchInput]);

  useEffect(() => {
    const saveFavorites = JSON.parse(window.localStorage.getItem("favorites")) ?? [];
    setFavorites(saveFavorites);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteToggle = ({ id, img, title }) => {
    const isFavorite = favorites.some((fav) => fav.id === id);
    if (!isFavorite) {
      setFavorites([...favorites, { id, img, title }]);
    } else {
      const updatedFavorites = favorites.filter((fav) => fav.id !== id);
      setFavorites(updatedFavorites);
    }
  };

  if (Error) {
    return <ErrorMessage/> ;
  }

  if (loading) {
    return <ErrorMessage/> ;
  }

  if (loading) {
    return <Loader/>
  }

  return (
   <>
   <section className='container'>
      {
        gif.map(({id,images,title})=>{
          const isFavorite = favorites.some((fav) => fav.id === id);
          return(
            <Card 
              key={id} 
              id={id}
              img={images.fixed_width_small.url} 
              title={title}
              onFavoriteToggle={handleFavoriteToggle}
              isFavorite={isFavorite}
            />
          )
        })
      }

      <p className='results'>{gif.length} results for "{searchInput}"</p>
   </section>
   </>
  )
}