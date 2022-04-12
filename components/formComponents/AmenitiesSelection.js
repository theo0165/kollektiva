import styles from "../../styles/formComponents/AmenitiesSelection.module.scss";

// step 10 choose what amenities are included (balcony, elevator, air condition, washer, dryer, dishwasher, bathtub, parking, fireplace, internet)
export default function AmenitiesSelection({
  state,
  handleChange,
  manualChange,
}) {
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
              onChange={(e) => manualChange("balcony", e.target.checked)}
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
              onChange={(e) => manualChange("elevator", e.target.checked)}
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
              onChange={(e) => manualChange("air", e.target.checked)}
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
              onChange={(e) => manualChange("dishWasher", e.target.checked)}
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
              onChange={(e) => manualChange("washingMachine", e.target.checked)}
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
              onChange={(e) => manualChange("dryer", e.target.checked)}
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
              onChange={(e) => manualChange("bathTub", e.target.checked)}
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
              onChange={(e) => manualChange("garage", e.target.checked)}
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
              onChange={(e) => manualChange("parking", e.target.checked)}
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
              onChange={(e) => manualChange("furnace", e.target.checked)}
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
              onChange={(e) => manualChange("internet", e.target.checked)}
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
