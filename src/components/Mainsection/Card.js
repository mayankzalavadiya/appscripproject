import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import "./card.css";

const Card = ({ item }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const description =
    item?.description.length > 30
      ? item.description.substring(0, 30) + "..."
      : item.description;

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="card-container">
      <div className="card-image">
        <img src={item?.image} alt={item?.title} />
      </div>
      <div className="card-content">
        <p>{description}</p>
        <p>{item?.category}</p>
        <CiHeart
          className={`heart-icon ${isFavorited ? "favorited" : ""}`}
          onClick={handleFavoriteClick}
        />
      </div>
    </div>
  );
};

export default Card;
