import { BsHouseDoorFill } from "react-icons/bs";
import HalfHouse from "../../assets/icons/house_half.svg";
import styles from "../../styles/formComponents/PartSelection.module.scss";

//step 2, choose if you want to rent out the entire house or just part of it
export default function PartSelection({ state, handleChange }) {
  return (
    <div className="col-10">
      <h1 className="form-title">Jag vill hyra ut: </h1>
      <p className="form-subtitle">Välj ett alternativ.</p>
      <div className="radio-buttons">
        <div>
          <input
            type="radio"
            id="partOne"
            name="rent"
            value="whole"
            onChange={handleChange("rent")}
            checked={state.rent === "whole" ? true : false}
            className="form-radio"
          />
          <label htmlFor="partOne">
            <BsHouseDoorFill size="40px" color="#23449B" />
            Hela min bostad
          </label>
        </div>
        <p className={styles.subTitle}>Eller</p>
        <div>
          <input
            type="radio"
            id="partTwo"
            name="rent"
            value="part"
            onChange={handleChange("rent")}
            checked={state.rent === "part" ? true : false}
            className="form-radio"
          />
          <label htmlFor="partTwo">
            <img src={HalfHouse.src} width="40px" height="40px" />
            En del av min bostad
          </label>
        </div>
      </div>
    </div>
  );
}
