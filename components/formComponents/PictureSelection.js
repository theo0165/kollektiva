//step 11 upload pictures of your rental

import house from "../../assets/house.png";
import kitchen from "../../assets/kitchen.png";
import livingroom from "../../assets/livingroom.png";
import bathroom from "../../assets/bathroom.jpeg";
import blank from "../../assets/blank.png";

import styles from "../../styles/formComponents/PictureSelection.module.scss";

export default function PictureSelection({ state, handleChange }) {
  return (
    <div className="col-10">
      <h1 className="form-title">Hur ser bostaden ut?</h1>
      <p className={`${styles.subtitle} form-subtitle`}>
        Ladda upp några bilder och/eller videoklipp av bostaden.
      </p>
      <div className={styles.pushDown}>
        <label className="form-label" htmlFor="picture-container">
          Ladda upp bilder
        </label>
        <div className={styles.pictureContainer}>
          <img className={styles.formImg} src={house.src} />
          <img className={styles.formImg} src={kitchen.src} />
          <img className={styles.formImg} src={livingroom.src} />
          <img className={styles.formImg} src={bathroom.src} />
          <div className={styles.blank}>+</div>
        </div>
      </div>
      <div>
        <label className="form-label" htmlFor="video-container">
          Ladda upp videoklipp
        </label>
        <div className={styles.videoContainer}>
          <div className={styles.blank}>+</div>
        </div>
      </div>
      <div>
        <label className="form-label" htmlFor="house-description">
          Beskriv bostaden
        </label>
        <div className="description-container">
          <textarea
            className={`${styles.description} form-control`}
            id="house-description"
            name="house-description"
            type="text"
            placeholder="Beskriv bostaden..."
            enterkeyhint="next"
            defaultValue={state.description ?? null}
            onChange={handleChange("description")}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
