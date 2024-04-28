import React from "react";
import styles from "./NavBar.module.css";
import menuOpen from "../../assets/menu_open.svg";
import logo from "../../assets/shahzaibLogo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.svg";
import notification from "../../assets/notification.png";
import profile from "../../assets/user_profile.jpg";
import mic from "../../assets/micIcon.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sidebarActions } from "../../store/sidebarSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <nav className={`flex__box`}>
      <div className={`${styles.nav__left}  flex__box`}>
        <img
          className={`${styles.menu__icon}`}
          onClick={() => dispatch(sidebarActions.setSidebar())}
          src={menuOpen}
          alt="Menu"
        />
        <Link to="/">
          <img className={`${styles.logo}`} src={logo} alt="Logo" />
        </Link>
      </div>

      <div className={`${styles.nav__middle} flex__box`}>
        <div className={`${styles.search__box}`}>
          <input type="text" placeholder="Search" />
          <img src={search} alt="Search" />
        </div>
        <div className={`${styles.mic}`}>
          <img src={mic} alt="Mic" />
        </div>
      </div>

      <div className={`${styles.nav__right} flex__box`}>
        <img src={upload} alt="Upload" />
        <img src={notification} alt="Notification" />
        <img
          className={`${styles.profile__icon}`}
          src={profile}
          alt="Profile"
        />
      </div>
    </nav>
  );
};

export default NavBar;
