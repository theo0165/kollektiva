import styles from "../styles/formComponents/PictureSelection.module.scss";

const ImageUpload = ({ images, setImages }) => {
  const handleImageSelect = (e) => {
    setImages([...images, ...e.target.files]);

    console.log(...e.target.files);
  };

  return (
    <>
      <div className={styles.pushDown}>
        <label className="form-label" htmlFor="picture-container">
          Ladda upp bilder
        </label>
        <div className={styles.pictureContainer}>
          {images.map((image, index) => (
            <img
              className={styles.formImg}
              src={URL.createObjectURL(image)}
              key={`residence-image-${index}`}
            />
          ))}
          <div className={styles.blank}>
            <label htmlFor="imageUpload">+</label>
            <input
              type="file"
              id="imageUpload"
              name="imageUpload"
              accept="image/*"
              className={styles.blank}
              onChange={handleImageSelect}
            />
          </div>
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
    </>
  );
};

export default ImageUpload;
