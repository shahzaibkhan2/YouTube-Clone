import React, { useEffect } from "react";
import styles from "./PlayVideo.module.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { valueConverter } from "../../apiData.js";
import config from "../../config/config.js";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { commentDataActions } from "../../store/commentDataSlice.js";
import { videoDataActions } from "../../store/videoDataSlice";
import { channelDataActions } from "../../store/channelDataSlice.js";

const PlayVideo = () => {
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.setVideoData.videoData);
  const channelData = useSelector((state) => state.setVideoData.channelData);
  const commentData = useSelector((state) => state.setCommentData.commentData);
  const { videoId } = useParams();

  const fetchVideoInfo = async () => {
    const videoDetails = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&id=${videoId}&key=${config.youtubeApiKey}`;
    const response = await fetch(videoDetails);
    const data = await response.json();
    dispatch(videoDataActions.updateVideoData(data.items[0]));
  };

  const fetchChannelInfo = async () => {
    const channelApi = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20contentDetails%2C%20statistics&id=${videoData.snippet.channelId}&key=${config.youtubeApiKey}`;
    const response = await fetch(channelApi);
    const data = await response.json();
    dispatch(channelDataActions.updateChannelData(data.items[0]));

    const commentApi = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&maxResults=40&videoId=${videoId}&key=${config.youtubeApiKey}`;
    const response2 = await fetch(commentApi);
    const data2 = await response2.json();
    dispatch(commentDataActions.updateCommentData(data2.items));
  };

  useEffect(() => {
    fetchVideoInfo();
  }, [videoId]);

  useEffect(() => {
    fetchChannelInfo();
  }, [videoData]);

  return (
    <div className={`${styles.playvideo}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{videoData ? videoData.snippet.title : "Title is here"}</h3>
      <div className={`${styles.play__video__info}`}>
        <p>
          {videoData ? valueConverter(videoData.statistics.viewCount) : "Views"}
          Views &bull;
          {videoData ? moment(videoData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="Like" />
            {videoData
              ? valueConverter(videoData.statistics.likeCount)
              : "140K"}
          </span>
          <span>
            <img src={dislike} alt="Dislike" />
            114
          </span>
          <span>
            <img src={share} alt="Share" />
            Share
          </span>
          <span>
            <img src={save} alt="Save" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className={`${styles.publishers}`}>
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt="Person"
        />
        <div>
          <p>{videoData ? videoData.snippet.channelTitle : "Channel"}</p>
          <span>
            {channelData
              ? valueConverter(channelData.statistics.subscriberCount)
              : "No Data"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className={`${styles.video__description}`}>
        <p>
          {videoData
            ? videoData.snippet.description.slice(0, 300)
            : "Description here"}
        </p>
        <hr />
        <h4>
          {videoData ? valueConverter(videoData.statistics.commentCount) : 124}{" "}
          Comments
        </h4>
        {commentData.map((comment, i) => {
          return (
            <div key={i} className={`${styles.comment}`}>
              <img
                src={
                  comment.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                alt="Comment"
              />
              <div>
                <h3>
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>2 Days Ago</span>
                </h3>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className={`${styles.comment__action}`}>
                  <img src={like} alt="Like" />
                  <span>
                    {valueConverter(
                      comment.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="Dislike" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
