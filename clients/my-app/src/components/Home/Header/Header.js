import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Thay đổi import
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ic_vip from "../../../images/icon-vip.svg";
const Header = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={scrolled ? "header-container2" : "header-container"}>
      <div className="content-1">
        <img src={logo} className="img" />
        <div className="content-menu">
          <ul className="content-menu_u">
            <li className="item item-1">
              <a href="/">Sách điện tử</a>
            </li>
            <li className="item item-2">
              <a href="/about">Sách nói</a>
            </li>
            <li className="item item-3">
              <a href="/users">Sách hiệu nổi</a>
            </li>
            <li className="item item-4">
              <a href="/">Sách tóm tắt</a>
            </li>
            <li className="item item-5">
              <a href="/about">Podcast</a>
            </li>
            <li className="item item-6">
              <a href="/users">Compo</a>
            </li>
            <li className="item item-7">
              <a href="/">Tuyển tập</a>
            </li>
            <li className="item item-8">
              <a href="/about">Tủ sách cộng đồng</a>
            </li>
            <li className="item item-9">
              <a href="/users">Sáng tác</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-2">
        <div className="icon">
          <FontAwesomeIcon icon={faSearch} className="icon-search" />
        </div>
        <div className="">
          <div className="button">
            <img src={ic_vip} />
            <button>Gói cước</button>
          </div>
        </div>
        <div className="content-button">
          <button className="button-register bt">Đăng ký</button>
        </div>
        <div className="content-button">
          <button className="button-login bt">Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
