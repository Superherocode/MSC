import React, { useEffect, useState } from "react";
import "../styles/Home/Home.css";
import { assets } from "../assets/assets";
import ProjectCard from "../components/ProjectCard";
import { projects, advisors, boardLeaders } from "../assets/assets";
import AdvisorCard from "../components/AdvisorCard";
import BoardLeaderCard from "../components/BoardLeaderCard";

const rotatingLines = [
  "Đội ngũ chuyên gia đồng hành và hỗ trợ trực tiếp cho sự phát triển của bạn.",
  "Với kinh nghiệm dày dặn và kiến thức thực tiễn sâu rộng,",
  "Các cố vấn sẽ giúp bạn định hình tư duy chiến lược hiệu quả.",
  "Chúng tôi không chỉ hướng dẫn, mà còn đồng hành lâu dài.",
  "Cùng nhau kiến tạo nên giá trị bền vững cho tương lai.",
];

const rotatingLines1 = [
  "Bạn cần tư vấn, đồng hành hay hỗ trợ?",
  "Chúng tôi luôn sẵn sàng kết nối với bạn.",
  "Đừng ngần ngại để lại thông tin!",
];

const Home = () => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % rotatingLines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % rotatingLines1.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="Home">
      {/* HERO SECTION */}
      <section id="gioi-thieu" className="hero">
        <div className="hero-text">
          <h1>
            Mentoring <br /> For Success
          </h1>
          <p>
            Our non-revenue sales team ensures the sales process runs smoothly
            and efficiently
          </p>
          <button className="cta">TÌM HIỂU THÊM</button>
        </div>
        <div className="hero-image">
          <img src={assets.image1} alt="Laptop và Táo" />
        </div>
      </section>

      {/* DỰ ÁN */}
      <section id="du-an" className="project-section">
        <h2 className="project-title">
          Dự Án <span>đã triển khai</span>
        </h2>
        <div className="project-grid">
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </section>

      {/* Tiêu đề và mô tả */}
      <section id="ban-co-van-truc-tiep" className="advisor-section">
        <div className="advisor-header">
          <h2>
            Ban Cố Vấn <span>Trực Tiếp</span>
          </h2>
          <div className="rotating-text-container">
            <p className="rotating-text fade">{rotatingLines[lineIndex]}</p>
          </div>
        </div>

        <div className="advisor-cards">
          {advisors.map((advisor, idx) => (
            <AdvisorCard key={idx} {...advisor} />
          ))}
        </div>
      </section>

      {/* BAN CHỦ NHIỆM */}
      <section id="ban-chu-nhiem" className="board-section">
        <h2 className="section-title">
          <span>Ban</span> Chủ Nhiệm
        </h2>
        <div className="board-leader-container">
          {boardLeaders.map((leader, idx) => (
            <BoardLeaderCard key={idx} {...leader} />
          ))}
        </div>
      </section>

      {/* LIÊN HỆ */}
      <section id="LH" className="contact-section">
        <div className="advisor-header">
          <h2>LIÊN HỆ</h2>
          <div className="rotating-text-container">
            <p className="rotating-text fade">{rotatingLines[lineIndex]}</p>
          </div>
        </div>

        <div className="contact-container">
          {/* Thông tin liên hệ */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon-circle">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="text-info">
                <h4>Địa chỉ</h4>
                <p>Việt Nam</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="text-info">
                <h4>Số điện thoại</h4>
                <p>+84 xxxx xxx</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text-info">
                <h4>Email</h4>
                <p>hoichogiaoduc.edu.vn@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form liên hệ */}
          <form
            className="contact-form"
            action="https://formspree.io/f/xanowzge"
            method="POST"
          >
            <div className="input-group">
              <input type="text" name="name" placeholder="Họ & tên" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Thông tin cần tư vấn:"
              required
            ></textarea>
            <button type="submit">NHẬN THÔNG TIN TƯ VẤN NGAY!</button>
          </form>
        </div>

            {/* Lỗi này cần tìm hiểu sau */}
        {/* Lottie animation */}
        {/* <div className="lottie-wrapper">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_tno6cg2w.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px", margin: "0 auto" }}
            loop
            autoPlay
          ></lottie-player>
        </div> */}
      </section>
    </div>
  );
};

export default Home;
