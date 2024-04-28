import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { channelDataActions } from "../store/channelDataSlice";
import { commentDataActions } from "../store/commentDataSlice";
import { useEffect } from "react";
import config from "../config/config";

const useFetchChannelComment = () => {
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.setVideoData.videoData);
  const { videoId } = useParams();

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
    fetchChannelInfo();
  }, [videoData]);

  return null;
};

export default useFetchChannelComment;
