import React, { useEffect, useState } from "react";
import styles from "./FeedArea.module.css";
import { Link } from "react-router-dom";
import { API_KEY, valueConverter } from "../../apiData.js";
import moment from "moment/moment";

const FeedArea = ({ category }) => {
  const [data, setData] = useState([]);

  const fetYoutubeApi = async () => {
    const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

    await fetch(videoList_Url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetYoutubeApi();
  }, [category]);

  return (
    <div className={`${styles.feedarea}`}>
      {data.map((item, i) => (
        <Link
          key={i}
          to={`videoPlayer/${item.snippet.categoryId}/${item.id}`}
          className={`${styles.card}`}
        >
          <img src={item.snippet.thumbnails.medium.url} alt="Thumbnail" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {valueConverter(item.statistics.viewCount)} views &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default FeedArea;
