//step 11 upload pictures of your rental

import house from "../../assets/house.png";
import kitchen from "../../assets/kitchen.png";
import livingroom from "../../assets/livingroom.png";
import bathroom from "../../assets/bathroom.jpeg";
import blank from "../../assets/blank.png";

import styles from "../../styles/formComponents/PictureSelection.module.scss";
import ImageUpload from "../ImageUpload";

export default function PictureSelection({
  state,
  handleChange,
  images,
  setImages,
}) {
  return (
    <div className="col-10">
      <h1 className="form-title">Hur ser bostaden ut?</h1>
      <p className={`${styles.subtitle} form-subtitle`}>
        Ladda upp några bilder och/eller videoklipp av bostaden.
      </p>
      <ImageUpload images={images} setImages={setImages} />
      <div>
        <label className="form-label" htmlFor="house-description">
          Beskriv bostaden
        </label>
        <div className={styles.descriptionContainer}>
          <textarea
            className={`${styles.description} form-control`}
            id="house-description"
            name="house-description"
            type="text"
            placeholder="Beskriv bostaden..."
            enterKeyHint="next"
            defaultValue={state.description ?? null}
            onChange={handleChange("description")}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
