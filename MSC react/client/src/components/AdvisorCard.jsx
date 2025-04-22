import React from "react";
import '../styles/AdvisorSection.css'; // optional nếu bạn tách style riêng

const AdvisorCard = ({ name, title, img, profile, highlights }) => {
  return (
    <div className="advisor-card">
      <a href={profile} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={name} className="advisor-img" />
        <p className="advisor-title">{title}</p>
        <h3 className="advisor-name">{name}</h3>
        <ul className="advisor-info">
          {highlights.map((line, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: line }}></li>
          ))}
        </ul>
      </a>
    </div>
  );
};

export default AdvisorCard;
