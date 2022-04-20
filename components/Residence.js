import styles from "../styles/Residence.module.scss";
import {
  BsArrowRightShort,
  BsArrowLeftShort,
  BsHouseDoorFill,
  BsTrash,
} from "react-icons/bs";
import { MdChairAlt, MdBolt } from "react-icons/md";
import { GiWaterDrop } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import HalfHouse from "../assets/icons/house_half.svg";
import dateformat from "dateformat";
import heatIcon from "../assets/icons/heating.svg";

const Residence = ({ data, isPreview, setStep }) => {
  const addressArray = formatAddress(data.address);

  const heating = () => {
    switch (data.heat) {
      case "central":
        return "Centralvärme";
      case "electric":
        return "Eluppvärmning";
      case "gas":
        return "Gasvärme";
      case "radiator":
        return "Radiatorvärme";
    }
  };

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
          Ändra till &quot;
          {data.rent === "whole" ? "Del av bostaden" : "Hela bostaden"}&quot;
        </button>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Hyra</h2>
        <div className={styles.sectionBlock}>
          <p className={styles.sectionInfo}>
            {formatRent(data.monthlyRent)}
            kr
          </p>
          <p className={styles.sectionSubtitle}>Månadshyra</p>
        </div>
        <button onClick={() => setStep(11)}>Ändra Hyra</button>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Storlek</h2>
        <div className={styles.sectionBlock}>
          <div className={styles.halfSplit}>
            <div>
              <p className={styles.sectionInfo}>{data.rooms}</p>
              <p className={styles.sectionSubtitle}>Rum</p>
            </div>
            <div>
              <p className={styles.sectionInfo}>
                {data.people < 7 ? `Max ${data.people}` : `8+`}
              </p>
              <p className={styles.sectionSubtitle}>Personer</p>
            </div>
          </div>
          <div className={styles.threeSplit}>
            <div>
              <p className={styles.sectionInfo}>{data.size}&#13217;</p>
              <p className={styles.sectionSubtitle}>Boarea</p>
            </div>
            <div>
              <p className={styles.sectionInfo}>{data.biarea}&#13217;</p>
              <p className={styles.sectionSubtitle}>Biarea</p>
            </div>
            <div>
              <p className={styles.sectionInfo}>{data.plot}&#13217;</p>
              <p className={styles.sectionSubtitle}>Tomt</p>
            </div>
          </div>
        </div>
        <button onClick={() => setStep(3)}>Ändra storlek</button>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Uthyrningsdatum</h2>
        <div className={styles.halfSplit}>
          <div>
            <p className={styles.sectionBigSubtitle}>Flytta in</p>
            <p>{dateformat(new Date(data.timeStart), "dd/mm/yyyy")}</p>
          </div>
          <div>
            <p className={styles.sectionBigSubtitle}>Flytta ut</p>
            <p>{dateformat(new Date(data.timeEnd), "dd/mm/yyyy")}</p>
          </div>
        </div>
        <button onClick={() => setStep(5)}>Ändra uthyrningsdatum</button>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Uppvärmning</h2>
        <div className={styles.sectionBlock}>
          <p className={styles.heating}>
            <img src={heatIcon.src} width="40px" height="40px" />
            {heating()}
          </p>
        </div>
        <button onClick={() => setStep(8)}>Ändra uppvärmning</button>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Möblering</h2>
        <div className={styles.sectionBlock}>
          <div className={styles.furniture}>
            <MdChairAlt color="#23449B" size="40px" />
            <p>
              {data.furniture === "fullyFurnished" && "Möblerad"}
              {data.furniture === "partiallyFurnished" && "Delvis möblerad"}
              {data.furniture === "unFurnished" && "Omöblerad"}
            </p>
          </div>
        </div>
        <button onClick={() => setStep(6)}>Ändra möblering</button>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Ingår i hyran</h2>
        <div className={styles.sectionBlock}>
          <div className={styles.included}>
            {data.heating && (
              <div>
                <img src={heatIcon.src} width="40px" height="40px" />
                <p>Värme</p>
              </div>
            )}
            {data.water && (
              <div>
                <GiWaterDrop color="#23449B" size="40px" />
                <p>Vatten</p>
              </div>
            )}
            {data.electricity && (
              <div>
                <MdBolt color="#23449B" size="40px" />
                <p>El</p>
              </div>
            )}
            {data.broadband && (
              <div>
                <IoWifi color="#23449B" size="40px" />
                <p>Internet</p>
              </div>
            )}
            {data.garbage && (
              <div>
                <BsTrash color="#23449B" size="40px" />
                <p>Sophant.</p>
              </div>
            )}
          </div>
        </div>
        <button onClick={() => setStep(11)}>Ändra vad som ingår</button>
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
  if (address.length < 1) {
    return ["", ""];
  }

  const REGEX = /\d{3}[ ]?\d{2}/gm;
  const splitIndex = REGEX.exec(address).index;

  return [
    address.slice(0, splitIndex).replace(", ", ""),
    address.slice(splitIndex).replace(", ", "") + ", Sverige",
  ];
};

const formatRent = (rent) => {
  return Intl.NumberFormat({ style: "currency", currency: "SEK" })
    .format(rent)
    .replace(",", " ");
};

export default Residence;
