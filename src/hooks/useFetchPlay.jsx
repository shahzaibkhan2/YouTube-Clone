import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { videoDataActions } from "../store/videoDataSlice";
import config from "../config/config";

const useFetchPlay = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();

  const fetchVideoInfo = async () => {
    const videoDetails = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&id=${videoId}&key=${config.youtubeApiKey}`;
    const response = await fetch(videoDetails);
    const data = await response.json();
    dispatch(videoDataActions.updateVideoData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoInfo();
  }, [videoId]);

  return null;
};

export default useFetchPlay;
