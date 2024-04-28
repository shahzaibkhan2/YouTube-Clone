import { useDispatch, useSelector } from "react-redux";
import { feedAreaAction } from "../store/feedAreaSlice";
import { useEffect } from "react";
import config from "../config/config";

const useFetchFeed = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.setCategory.category);

  const fetYoutubeApi = async () => {
    const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${config.youtubeApiKey}`;

    const response = await fetch(videoList_Url);
    const data = await response.json();
    dispatch(feedAreaAction.updateData(data.items));
  };

  useEffect(() => {
    fetYoutubeApi();
  }, [category]);

  return null;
};

export default useFetchFeed;
