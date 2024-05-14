import "./Card.css";
import React from "react";

export const Card = ({ id, img, title, onFavoriteToggle, isFavorite }) => {

  const handleFavoriteToggle = () => {
    onFavoriteToggle({ id, img, title });
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={img} alt={title} />
      </div>
      <p className="card-title">{title}</p>
      <button onClick={handleFavoriteToggle}>
        {isFavorite ? (
          <img src="./src/assets/favorite-on.png"/>
        ) : (
          <img src="./src/assets/favorite-off.png"/>
        )}
      </button>
    </div>
  );
};