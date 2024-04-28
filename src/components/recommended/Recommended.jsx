import styles from "./Recommended.module.css";
import { valueConverter } from "../../apiData.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetchRecommend from "../../hooks/useFetchRecommend";

const Recommended = ({ categoryId }) => {
  const recommendData = useSelector(
    (state) => state.setRecommendData.recommendData
  );
  useFetchRecommend(categoryId);

  return (
    <div className={`${styles.recommended}`}>
      {recommendData.map((recommend, i) => {
        return (
          <Link
            to={`/videoPlayer/${recommend.snippet.categoryId}/${recommend.id}`}
            key={i}
            className={`${styles.side__video__list}`}
          >
            <img src={recommend.snippet.thumbnails.medium.url} alt="Image" />
            <div className={`${styles.video__info}`}>
              <h4>{recommend.snippet.title}</h4>
              <p className={`${styles.recommend__channel}`}>
                {recommend.snippet.channelTitle}
              </p>
              <p>{valueConverter(recommend.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
