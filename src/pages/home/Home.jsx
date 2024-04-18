import React, { useState } from "react";
import styles from "./Home.module.css";
import SideBar from "../../components/sideBar/SideBar";
import FeedArea from "../../components/feedArea/FeedArea";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <SideBar
        category={category}
        setCategory={setCategory}
        sidebar={sidebar}
      />
      <div
        className={`${styles.container} ${
          sidebar ? "" : styles.big__container
        }`}
      >
        <FeedArea category={category} />
      </div>
    </>
  );
};

export default Home;
