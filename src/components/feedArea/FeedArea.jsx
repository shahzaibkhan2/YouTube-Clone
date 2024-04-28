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
