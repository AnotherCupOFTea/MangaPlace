import React from "react";

const CardProduct = ({ item }) => {
  // document.getElementById("card-container")
  return (
    <div className="card-container">
      <img className="card-image" src={item.image} alt="" />
      <div className="card-footer">
        <div className="card-type">{item.type}</div>
        <div className="card-title">{item.name}</div>
      </div>
      <div className="card-overflow">
        <p>Title: {item.title}</p>
        <p>Type: {item.type}</p>
        <p>Genres: {item.genres.map((item) => `${item}, `)}</p>
        <p className="card-description">Description: {item.description}</p>
        <p>Year: {item.year}</p>
      </div>
    </div>
  );
};

export default CardProduct;
