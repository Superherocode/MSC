import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, image, content, duration, result, link }) => {
  return (
    <div className="project-card">
      <div
        className="project-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="project-content">
        <h3>{title}</h3>
        <ul>
          <li><strong>Nội dung:</strong> {content}</li>
          <li><strong>Thời gian:</strong> {duration}</li>
          <li><strong>Kết quả:</strong> {result}</li>
        </ul>
        <a href={link || "#"} className="btn" target="_blank" rel="noopener noreferrer">
          Tìm hiểu thêm
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
