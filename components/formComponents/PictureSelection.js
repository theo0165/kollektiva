//step 11 upload pictures of your rental

import house from "../../assets/house.png";
import kitchen from "../../assets/kitchen.png";
import livingroom from "../../assets/livingroom.png";
import bathroom from "../../assets/bathroom.jpeg";
import blank from "../../assets/blank.png";

export default function PictureSelection({ state, handleChange }) {
  return (
    <div>
      <h1 className="form-title">Hur ser bostaden ut?</h1>
      <p className="form-subtitle">
        Ladda upp några bilder och/eller videoklipp av bostaden.
      </p>
      <div className="picture-container">
        <label className="form-label" htmlFor="picture-container">
          Ladda upp bilder
        </label>
        <img className="form-img" src={house.src} />
        <img className="form-img" src={kitchen.src} />
        <img className="form-img" src={livingroom.src} />
        <img className="form-img" src={bathroom.src} />
        <img className="form-img" src={blank.src} />
      </div>
      <div className="video-container">
        <label className="form-label" htmlFor="video-container">
          Ladda upp videoklipp
        </label>
        <img className="form-img" src={blank.src} />
      </div>
      <div className="description-container">
        <label className="form-label" htmlFor="house-description">
          Beskriv bostaden
        </label>
        <input
          className=""
          id="house-description"
          name="house-description"
          value="house-description"
          type="text"
          defaultValue="Beskriv bostaden"
        ></input>
      </div>
    </div>
  );
}
