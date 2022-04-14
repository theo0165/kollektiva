import styles from "../styles/Residence.module.scss";
import {
  BsArrowRightShort,
  BsArrowLeftShort,
  BsHouseDoorFill,
} from "react-icons/bs";
import HalfHouse from "../assets/icons/house_half.svg";

const Residence = ({ data, isPreview, setStep }) => {
  const addressArray = formatAddress(data.address);

  return (
    <div className="col-10">
      {isPreview && (
        <div>
          <h1 className="form-title">Förhandsgranska din annons.</h1>
          <p className="form-subtitle">
            Kontrollera att all information är korrekt.
          </p>
        </div>
      )}
      <div>
        <h2 className={styles.addressStreet}>{addressArray[0]}</h2>
        <p className={styles.addressPost}>{addressArray[1]}</p>
        {isPreview && (
          <button className="residence-button" onClick={() => setStep(4)}>
            Ändra address
          </button>
        )}
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageSlider}>
          <img src="" />
        </div>
        <div className={styles.sliderControls}>
          <div className={styles.sliderButton}>
            <BsArrowLeftShort />
          </div>
          <div className={styles.sliderNumbers}>1/10</div>
          <div className={styles.sliderButton}>
            <BsArrowRightShort />
          </div>
        </div>
        <p className={styles.description}>{data.description}</p>
      </div>
      {isPreview && (
        <button onClick={() => setStep(10)}>Ändra bilder & beskrivning</button>
      )}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Hyra</h2>
        <div className={styles.sectionBlock}>
          {data.rent === "whole" && (
            <>
              <BsHouseDoorFill size="40px" />
              <p>Hela bostaden</p>
            </>
          )}
          {data.rent === "part" && (
            <>
              <img src={HalfHouse.src} width="40px" height="40px" />
              <p>Del av bostaden</p>
            </>
          )}
        </div>
        <button onClick={() => setStep(1)}>
          Ändra till "
          {data.rent === "whole" ? "Del av bostaden" : "Hela bostaden"}"
        </button>
      </div>
    </div>
  );
};

Residence.defaultProps = {
  data: {},
  isPreview: false,
  setStep: () => {},
};

const formatAddress = (address) => {
  const REGEX = /\d{3}[ ]?\d{2}/gm;
  const splitIndex = REGEX.exec(address).index;

  return [
    address.slice(0, splitIndex).replace(", ", ""),
    address.slice(splitIndex).replace(", ", "") + ", Sverige",
  ];
};

export default Residence;
