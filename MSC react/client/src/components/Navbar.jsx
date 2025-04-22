import React, { useState } from 'react'
import '../styles/Navbar.css'
import { assets } from '../assets/assets';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={assets.iconmsc} alt="MSC Logo" />
      </div>

      {/* Hamburger icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      {/* Navigation */}
      <nav id="nav-menu" className={menuOpen ? 'open' : ''}>
        <ul className="nav-links">
          <li><a href="#gioi-thieu">Giới thiệu</a></li>
          <li><a href="#chuyen-mon">Chuyên môn</a></li>
          <li><a href="#du-an">Dự án</a></li>

          <li className="dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#" className="dropdown-toggle">Ban Giảng Huấn &#x25BE;</a>
            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <li><a href="#ban-co-van-truc-tiep">Ban Cố Vấn Trực Tiếp</a></li>
              <li><a href="#ban-chu-nhiem">Ban Chủ Nhiệm</a></li>
            </ul>
          </li>

          <li><a href="#LH">Liên hệ</a></li>
        </ul>
      </nav>

      {/* Profile Button */}
      <a href="profile.html" target="_blank">
        <button className="profile-btn">PROFILE</button>
      </a>
    </header>
  );
};

export default Navbar;