import React from "react";
import "../styles/BoardLeaderCard.css";

const BoardLeaderCard = ({ name, title, img, description }) => {
  return (
    <div className="board-leader-card">
      <img src={img} alt={name} className="board-leader-img" />
      <div className="board-leader-info">
        <h3 className="leader-name">{name}</h3>
        <span className="badge">{title}</span>
        <ul className="leader-description">
          {description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BoardLeaderCard;
