import './FavsContainer.css';
import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';

export function FavsContainer () {
  const [favorites, setFavorites] = useState([]);

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

  return (
   <>
   <section className='container'>
      {
        favorites.map(({id,img,title})=>{
          const isFavorite = favorites.some((fav) => fav.id === id);
          return(
            <Card 
              key={id} 
              id={id}
              img={img} 
              title={title}
              onFavoriteToggle={handleFavoriteToggle}
              isFavorite={isFavorite}
            />
          )
        })
      }

      <p className='favorites'>{favorites.length} Favorites gifs </p>
   </section>
   </>
  )
}