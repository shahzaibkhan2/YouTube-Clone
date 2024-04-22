import React, { useEffect } from "react";
import styles from "./FeedArea.module.css";
import { Link } from "react-router-dom";
import { valueConverter } from "../../apiData.js";
import config from "../../config/config.js";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { feedAreaAction } from "../../store/feedAreaSlice.js";

const FeedArea = ({ category }) => {
  const feedData = useSelector((state) => state.feedArea.feedData);
  const dispatch = useDispatch();

  const fetYoutubeApi = async () => {
    const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${config.youtubeApiKey}`;

    const response = await fetch(videoList_Url);
    const data = await response.json();
    dispatch(feedAreaAction.updateData(data.items));
  };

  useEffect(() => {
    fetYoutubeApi();
  }, [category]);

  // const [data, setData] = useState([]);
  // const fetYoutubeApi = async () => {
  //   const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${config.youtubeApiKey}`;

  //   await fetch(videoList_Url)
  //     .then((response) => response.json())
  //     .then((data) => useDispatch(feedAreaAction.updateData(data.items)));
  // };

  // useEffect(() => {
  //   fetYoutubeApi();
  // }, [category]);

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
