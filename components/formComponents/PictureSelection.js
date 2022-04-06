//step 11 upload pictures of your rental
export default function PictureSelection({ state, handleChange }) {
  return (
    <div>
      <h1 className="form-title">Hur ser bostaden ut?</h1>
      <p className="form-subtitle">
        Ladda upp några bilder och/eller videoklipp av bostaden.
      </p>
      <div className="picture-container">
        <label htmlFor="picture-container">Ladda upp bilder</label>
        <img className="form-img" src="../assets/house.png" />
        <img className="form-img" src="./assets/kitchen.png" />
        <img className="form-img" src="./assets/livingroom.png" />
        <img className="form-img" src="./assets/bathroom.jpeg" />
        <img className="form-img" src="./assets/blank.png" />
      </div>
      <div className="video-container">
        <label htmlFor="video-container">Ladda upp videoklipp</label>
        <img className="form-img" src="./assets/blank.png" />
      </div>
      <div className="description-container">
        <label htmlFor="house-description">Beskriv bostaden</label>
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
