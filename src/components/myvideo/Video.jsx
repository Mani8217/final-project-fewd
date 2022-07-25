import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";

const Video = () => {
  return (
    <div className="vdContainer">
      <ReactPlayer
        url="https://youtu.be/MCH2MuSRpuk"
        width="330px"
      ></ReactPlayer>

      <ReactPlayer
        url="https://youtu.be/rr1ZJgbBymA"
        width="330px"
      ></ReactPlayer>

      <ReactPlayer
        url="https://youtu.be/vUwFcFpx_W0"
        width="330px"
      ></ReactPlayer>

      <ReactPlayer
        url="https://youtu.be/ZlElWl8D2t0"
        width="330px"
      ></ReactPlayer>

      <ReactPlayer
        url="https://youtu.be/kpiMZdGQGEo"
        width="330px"
      ></ReactPlayer>
      <ReactPlayer
        url="https://youtu.be/KKhTNKpfqzM"
        width="330px"
      ></ReactPlayer>
    </div>
  );
};

export default Video;
