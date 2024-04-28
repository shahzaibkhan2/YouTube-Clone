import { useDispatch } from "react-redux";
import { useEffect } from "react";
import config from "../config/config";
import { recommendDataActions } from "../store/recommendDataSlice";

const useFetchRecommend = (categoryId) => {
  const dispatch = useDispatch();

  const fetRecommendedApi = async () => {
    const recommended_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=${categoryId}&key=${config.youtubeApiKey}`;

    const response = await fetch(recommended_Url);
    const data = await response.json();
    dispatch(recommendDataActions.updateRecommendData(data.items));
  };

  useEffect(() => {
    fetRecommendedApi();
  }, []);

  return null;
};

export default useFetchRecommend;
