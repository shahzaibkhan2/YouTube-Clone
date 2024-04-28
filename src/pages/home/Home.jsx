import styles from "./Home.module.css";
import SideBar from "../../components/sideBar/SideBar";
import FeedArea from "../../components/feedArea/FeedArea";
import { useSelector } from "react-redux";

const Home = () => {
  const category = useSelector((state) => state.setCategory.category);

  return (
    <>
      <SideBar category={category} />
      <div className={`${styles.container}`}>
        <FeedArea />
      </div>
    </>
  );
};

export default Home;
