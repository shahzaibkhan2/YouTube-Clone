import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import VideoPlayer from "./pages/videoPlayer/VideoPlayer.jsx";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <NavBar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route
          path="/videoPlayer/:categoryId/:videoId"
          element={<VideoPlayer />}
        />
      </Routes>
    </div>
  );
};

export default App;
