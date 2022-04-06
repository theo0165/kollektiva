// step 10 choose what amenities are included (balcony, elevator, air condition, washer, dryer, dishwasher, bathtub, parking, fireplace, internet)
export default function AmenitiesSelection({ state, handleChange }) {
  return (
    <div>
      <h1 className="form-title">Vilka bekvämligheter finns i bostaden?</h1>
      <p className="form-subtitle">Välj alla alternativ som stämmer.</p>
      <div className="checkbox-buttons">
        <div className="checkbox">
          <input
            type="checkbox"
            id="balcony"
            name="balcony"
            value="balcony"
            onChange={handleChange("balcony")}
            checked={state.balcony}
          />
          <label htmlFor="balcony">Balkong/Uteplats</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="elevator"
            name="elevator"
            value="elevator"
            onChange={handleChange("elevator")}
            checked={state.elevator}
          />
          <label htmlFor="elevator">Hiss</label>{" "}
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="air"
            name="air"
            value="air"
            onChange={handleChange("air")}
            checked={state.air}
          />
          <label htmlFor="air">Luftkonditionering</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="dishWasher"
            name="dishWasher"
            value="dishWasher"
            onChange={handleChange("dishWasher")}
            checked={state.dishWasher}
          />
          <label htmlFor="dishWasher">Diskmaskin</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="washingMachine"
            name="washingMachine"
            value="washingMachine"
            onChange={handleChange("washingMachine")}
            checked={state.washingMachine}
          />
          <label htmlFor="washingMachine">Tvättmaskin</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="dryer"
            name="dryer"
            value="dryer"
            onChange={handleChange("dryer")}
            checked={state.dryer}
          />
          <label htmlFor="dryer">Torktumlare</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="bathTub"
            name="bathTub"
            value="bathTub"
            onChange={handleChange("bathTub")}
            checked={state.bathTub}
          />
          <label htmlFor="bathTub">Badkar</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="garage"
            name="garage"
            value="garage"
            onChange={handleChange("garage")}
            checked={state.garage}
          />
          <label htmlFor="garage">Garage</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="parking"
            name="parking"
            value="parking"
            onChange={handleChange("parking")}
            checked={state.parking}
          />
          <label htmlFor="parking">Parkeringsplats</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="furnace"
            name="furnace"
            value="furnace"
            onChange={handleChange("furnace")}
            checked={state.furnace}
          />
          <label htmlFor="furnace">Kakelugn/Öppen spis</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="internet"
            name="internet"
            value="internet"
            onChange={handleChange("internet")}
            checked={state.internet}
          />
          <label htmlFor="internet">Internet</label>
        </div>
      </div>
    </div>
  );
}
