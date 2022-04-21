import styles from "../styles/Residence.module.scss";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsHouseDoorFill,
  BsTrash,
} from "react-icons/bs";
import { MdChairAlt, MdBolt, MdOutlineElevator } from "react-icons/md";
import { GiWaterDrop } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import HalfHouse from "../assets/icons/house_half.svg";
import dateformat from "dateformat";
import heatIcon from "../assets/icons/heating.svg";
import benchIcon from "../assets/icons/bench.svg";
import acIcon from "../assets/icons/ac.svg";
import dishwasherIcon from "../assets/icons/dishwasher.svg";
import washingMachineIcon from "../assets/icons/washingmachine.svg";
import dryerIcon from "../assets/icons/dryer.svg";
import bathtubIcon from "../assets/icons/bathtub.svg";
import garageIcon from "../assets/icons/garage.svg";
import parkingIcon from "../assets/icons/parking.svg";
import furnaceIcon from "../assets/icons/furnace.svg";
import AliceCarousel from "react-alice-carousel";

const Residence = ({ data, images, isPreview, setStep }) => {
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
      <div className={styles.address}>
        <h2 className={styles.addressStreet}>{addressArray[0]}</h2>
        <p className={styles.addressPost}>{addressArray[1]}</p>
        {isPreview && (
          <button className={styles.button} onClick={() => setStep(4)}>
            Ändra address
          </button>
        )}
      </div>
      <div className={`${styles.imageContainer} ${styles.section}`}>
        <div>
          <div className={styles.imageSlider}>
            <AliceCarousel
              disableDotsControls
              disableButtonsControls
              infinite
              autoPlay
              autoPlayInterval={3000}
              items={images.map((image, index) => (
                <img
                  src={
                    typeof image === "string"
                      ? image
                      : URL.createObjectURL(image)
                  }
                  key={`image-${index}`}
                  className={styles.image}
                />
              ))}
            />
          </div>
          <div className={styles.sliderControls}>
            <div className={styles.sliderButton}>
              <BsFillArrowLeftCircleFill size="40px" color="#23449B" />
            </div>
            <div className={styles.sliderNumbers}>{`1/${images.length}`}</div>
            <div className={styles.sliderButton}>
              <BsFillArrowRightCircleFill size="40px" color="#23449B" />
            </div>
          </div>
          <p className={styles.description}>{data.description}</p>
        </div>
      </div>
      {isPreview && (
        <button onClick={() => setStep(10)} className={styles.button}>
          Ändra bilder {"&"} beskrivning
        </button>
      )}
      <div className={styles.section}>
        <div className={`${styles.sectionBlock} ${styles.flex}`}>
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
      </div>
      {isPreview && (
        <button onClick={() => setStep(1)} className={styles.button}>
          Ändra till &quot;
          {data.rent === "whole" ? "Del av bostaden" : "Hela bostaden"}&quot;
        </button>
      )}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Hyra</h2>
        <div
          className={`${styles.sectionBlock} ${styles.rentSectionBlock} ${styles.flex}`}
        >
          <p
            className={`${styles.sectionInfo} ${styles.blue}`}
            style={{ fontSize: "36px" }}
          >
            {formatRent(data.monthlyRent)}
            kr
          </p>
          <p className={styles.sectionSubtitle}>Månadshyra</p>
        </div>
      </div>
      {isPreview && (
        <button onClick={() => setStep(11)} className={styles.button}>
          Ändra Hyra
        </button>
      )}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Storlek</h2>
        <div className={`${styles.sectionBlock} ${styles.sizeSection}`}>
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
        </div>
        <div className={`${styles.sectionBlock} ${styles.sizeSection}`}>
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
      </div>
      {isPreview && (
        <button onClick={() => setStep(3)} className={styles.button}>
          Ändra storlek
        </button>
      )}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Uthyrningsdatum</h2>
        <div className={`${styles.halfSplit} ${styles.timeSection}`}>
          <div>
            <p className={styles.sectionBigSubtitle}>Flytta in</p>
            <p>{dateformat(new Date(data.timeStart), "dd/mm/yyyy")}</p>
          </div>
          <div>
            <p className={styles.sectionBigSubtitle}>Flytta ut</p>
            <p>{dateformat(new Date(data.timeEnd), "dd/mm/yyyy")}</p>
          </div>
        </div>
      </div>
      {isPreview && (
        <button onClick={() => setStep(5)} className={styles.button}>
          Ändra uthyrningsdatum
        </button>
      )}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Uppvärmning</h2>
        <div className={styles.sectionBlock}>
          <p className={styles.heating}>
            <img src={heatIcon.src} width="40px" height="40px" />
            {heating()}
          </p>
        </div>
      </div>
      {isPreview && (
        <button onClick={() => setStep(8)} className={styles.button}>
          Ändra uppvärmning
        </button>
      )}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Möblering</h2>
        <div className={`${styles.sectionBlock} ${styles.furnitureSection}`}>
          <div className={styles.furniture}>
            <MdChairAlt color="#23449B" size="40px" />
            <p>
              {data.furniture === "fullyFurnished" && "Möblerad"}
              {data.furniture === "partiallyFurnished" && "Delvis möblerad"}
              {data.furniture === "unFurnished" && "Omöblerad"}
            </p>
          </div>
        </div>
      </div>
      {isPreview && (
        <button onClick={() => setStep(6)} className={styles.button}>
          Ändra möblering
        </button>
      )}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Ingår i hyran</h2>
        <div className={`${styles.sectionBlock} ${styles.includedSection}`}>
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
      </div>
      {isPreview && (
        <button onClick={() => setStep(11)} className={styles.button}>
          Ändra vad som ingår
        </button>
      )}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Bekvämligheter</h2>
        <div className={`${styles.sectionBlock} ${styles.amenitiesSection}`}>
          <div className={styles.amenities}>
            {data.balcony && (
              <div>
                <img src={benchIcon.src} width="40px" height="40px" />
                Uteplats
              </div>
            )}
            {data.elevator && (
              <div>
                <MdOutlineElevator size="40px" color="#23449B" />
                Hiss
              </div>
            )}
            {data.air && (
              <div>
                <img src={acIcon.src} width="40px" height="40px" />
                AC
              </div>
            )}
            {data.dishWasher && (
              <div>
                <img src={dishwasherIcon.src} width="40px" height="40px" />
                Diskmaskin
              </div>
            )}
            {data.washingMachine && (
              <div>
                <img src={washingMachineIcon.src} width="40px" height="40px" />
                Tvättmaskin
              </div>
            )}
            {data.dryer && (
              <div>
                <img src={dryerIcon.src} width="40px" height="40px" />
                Torktumlare
              </div>
            )}
            {data.bathTub && (
              <div>
                <img src={bathtubIcon.src} width="40px" height="40px" />
                Badkar
              </div>
            )}
            {data.garage && (
              <div>
                <img src={garageIcon.src} width="40px" height="40px" />
                Garage
              </div>
            )}
            {data.parking && (
              <div>
                <img src={parkingIcon.src} width="40px" height="40px" />
                Parkering
              </div>
            )}
            {data.furnace && (
              <div>
                <img src={furnaceIcon.src} width="40px" height="40px" />
                Eldstad
              </div>
            )}
            {data.internet && (
              <div>
                <IoWifi color="#23449B" size="40px" />
                Internet
              </div>
            )}
          </div>
        </div>
      </div>
      {isPreview && (
        <button onClick={() => setStep(9)} className={styles.button}>
          Ändra bekvämligheter
        </button>
      )}
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
