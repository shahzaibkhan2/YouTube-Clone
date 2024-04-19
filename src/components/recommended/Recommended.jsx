import React, { useEffect, useState } from "react";
import styles from "./Recommended.module.css";
import { valueConverter } from "../../apiData.js";
import config from "../../config/config.js";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [recommendData, setRecommendData] = useState([]);

  const fetRecommendedApi = async () => {
    const recommended_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=${categoryId}&key=${config.youtubeApiKey}`;

    await fetch(recommended_Url)
      .then((response) => response.json())
      .then((data) => setRecommendData(data.items));
  };

  useEffect(() => {
    fetRecommendedApi();
  }, []);

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
