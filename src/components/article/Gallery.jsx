import fly from "./fly.jpg";
import watch from "./watch.jpg";
import water from "./water.jpg";
import "./Gallery.css";

export const Gallery = () => {
  return (
    <>
      <div className="gallery-container">
        <div className="col item1">
          <img src={fly} />
        </div>
        <div className="col item2">
          <img src={water}></img>
        </div>
        <div className="col item3">
          <img src={watch}></img>
        </div>
      </div>
    </>
  );
};
