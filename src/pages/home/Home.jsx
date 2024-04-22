import styles from "./Home.module.css";
import SideBar from "../../components/sideBar/SideBar";
import FeedArea from "../../components/feedArea/FeedArea";
import { useSelector } from "react-redux";

const Home = ({ sidebar }) => {
  const category = useSelector((state) => state.setCategory.category);

  return (
    <>
      <SideBar category={category} sidebar={sidebar} />
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
