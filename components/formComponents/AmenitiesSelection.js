import styles from "../../styles/formComponents/AmenitiesSelection.module.scss";

// step 10 choose what amenities are included (balcony, elevator, air condition, washer, dryer, dishwasher, bathtub, parking, fireplace, internet)
export default function AmenitiesSelection({ state, handleChange }) {
  return (
    <div className="col-10">
      <h1 className="form-title">Vilka bekvämligheter finns i bostaden?</h1>
      <p className="form-subtitle">Välj alla alternativ som stämmer.</p>
      <div className={`${styles.checkboxContainer} checkbox-outer`}>
        <div className="checkbox-buttons">
          <div className="checkbox">
            <input
              type="checkbox"
              id="balcony"
              name="balcony"
              value="true"
              onChange={handleChange("balcony")}
              checked={state.balcony}
              className="form-checkbox"
            />
            <label htmlFor="balcony">Balkong/Uteplats</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="elevator"
              name="elevator"
              value="true"
              onChange={handleChange("elevator")}
              checked={state.elevator}
              className="form-checkbox"
            />
            <label htmlFor="elevator">Hiss</label>{" "}
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="air"
              name="air"
              value="true"
              onChange={handleChange("air")}
              checked={state.air}
              className="form-checkbox"
            />
            <label htmlFor="air">Luftkonditionering</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="dishWasher"
              name="dishWasher"
              value="true"
              onChange={handleChange("dishWasher")}
              checked={state.dishWasher}
              className="form-checkbox"
            />
            <label htmlFor="dishWasher">Diskmaskin</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="washingMachine"
              name="washingMachine"
              value="true"
              onChange={handleChange("washingMachine")}
              checked={state.washingMachine}
              className="form-checkbox"
            />
            <label htmlFor="washingMachine">Tvättmaskin</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="dryer"
              name="dryer"
              value="true"
              onChange={handleChange("dryer")}
              checked={state.dryer}
              className="form-checkbox"
            />
            <label htmlFor="dryer">Torktumlare</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="bathTub"
              name="bathTub"
              value="true"
              onChange={handleChange("bathTub")}
              checked={state.bathTub}
              className="form-checkbox"
            />
            <label htmlFor="bathTub">Badkar</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="garage"
              name="garage"
              value="true"
              onChange={handleChange("garage")}
              checked={state.garage}
              className="form-checkbox"
            />
            <label htmlFor="garage">Garage</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="parking"
              name="parking"
              value="true"
              onChange={handleChange("parking")}
              checked={state.parking}
              className="form-checkbox"
            />
            <label htmlFor="parking">Parkeringsplats</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="furnace"
              name="furnace"
              value="true"
              onChange={handleChange("furnace")}
              checked={state.furnace}
              className="form-checkbox"
            />
            <label htmlFor="furnace">Kakelugn/Öppen spis</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="internet"
              name="internet"
              value="true"
              onChange={handleChange("internet")}
              checked={state.internet}
              className="form-checkbox"
            />
            <label htmlFor="internet">Internet</label>
          </div>
        </div>
      </div>
    </div>
  );
}
