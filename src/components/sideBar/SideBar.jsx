import React from "react";
import styles from "./SideBar.module.css";
import sideBarImages from "./images";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../store/categorySlice.js";

const SideBar = () => {
  const category = useSelector((state) => state.setCategory.category);
  const sidebar = useSelector((state) => state.setSidebarSlice.sidebar);
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.sidebar} ${
        sidebar ? styles.transition__sidebar : styles.mini__sidebar
      }`}
    >
      <div className={`${styles.shortcut__links}`}>
        <div
          onClick={() => dispatch(categoryActions.updateCategory(0))}
          className={`${styles.side__link} ${
            category === 0 ? styles.active : ""
          }`}
        >
          <img src={sideBarImages.home} alt="Home" />
          <p>Home</p>
        </div>

        <div
          onClick={() => dispatch(categoryActions.updateCategory(2))}
          className={`${styles.side__link} ${
            category === 2 ? styles.active : ""
          }`}
        >
          <img src={sideBarImages.automobile} alt="Automobiles" />
          <p>Automobiles</p>
        </div>
        <div
          onClick={() => dispatch(categoryActions.updateCategory(17))}
          className={`${styles.side__link} ${
            category === 17 ? styles.active : ""
          }`}
        >
          <img src={sideBarImages.sports} alt="Sports" />
          <p>Sports</p>
        </div>
        <div
          onClick={() => dispatch(categoryActions.updateCategory(22))}
          className={`${styles.side__link} ${
            category === 22 ? styles.active : ""
          }`}
        >
          <img src={sideBarImages.blog} alt="Blogs" />
          <p>Blogs</p>
        </div>
        <div
          onClick={() => dispatch(categoryActions.updateCategory(24))}
          className={`${styles.side__link} ${
            category === 24 ? styles.active : ""
          }`}
        >
          <img src={sideBarImages.entertainment} alt="Entertainment" />
          <p>Entertainment</p>
        </div>
        <div
          onClick={() => dispatch(categoryActions.updateCategory(20))}
          className={`${styles.side__link} ${
            category === 20 ? styles.active : ""
          }`}
        >
          <img src={sideBarImages.game} alt="Game" />
          <p>Gaming</p>
        </div>
        <div
          onClick={() => dispatch(categoryActions.updateCategory(28))}
          className={`${styles.side__link} ${
            category === 28 ? styles.active : ""
          }`}
        >
          <img src={sideBarImages.techno} alt="Technology" />
          <p>Technology</p>
        </div>
        <div
          onClick={() => dispatch(categoryActions.updateCategory(25))}
          className={`${styles.side__link} ${
            category === 25 ? styles.active : ""
          }`}
        >
          <img src={sideBarImages.news} alt="News" />
          <p>News</p>
        </div>
        <div
          onClick={() => dispatch(categoryActions.updateCategory(10))}
          className={`${styles.side__link} ${
            category === 10 ? styles.active : ""
          }`}
        >
          <img src={sideBarImages.music} alt="Music" />
          <p>Music</p>
        </div>
        <hr />
      </div>
      <div className={`${styles.subscribed__users}`}>
        <h3>Subscribed</h3>
        <div className={`${styles.side__link}`}>
          <img src={sideBarImages.bill} alt="Bill" />
          <p>Bill Martin</p>
        </div>
        <div className={`${styles.side__link}`}>
          <img src={sideBarImages.jack} alt="Jack" />
          <p>Jack Hammer</p>
        </div>
        <div className={`${styles.side__link}`}>
          <img src={sideBarImages.simon} alt="Simon" />
          <p>Supreme Coder</p>
        </div>
        <div className={`${styles.side__link}`}>
          <img src={sideBarImages.people} alt="Tom" />
          <p>Tom Cruise</p>
        </div>
        <div className={`${styles.side__link}`}>
          <img src={sideBarImages.people} alt="James" />
          <p>James Watson Crick</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
