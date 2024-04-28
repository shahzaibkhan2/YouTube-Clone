import React from "react";
import styles from "./FeedArea.module.css";
import { Link } from "react-router-dom";
import { valueConverter } from "../../apiData.js";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import useFetchFeed from "../../hooks/useFetchFeed";

const FeedArea = () => {
  const feedData = useSelector((state) => state.feedArea.feedData);
  useFetchFeed();

  return (
    <div className={`${styles.feedarea}`}>
      {feedData.map((item, i) => (
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
