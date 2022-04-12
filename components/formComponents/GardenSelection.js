//step 8 choose whether or not your rental has a garden
export default function GardenSelection({ state, handleChange, manualChange }) {
  return (
    <div className="col-10">
      <h1 className="form-title">Har bostaden trädgård?</h1>
      <p className="form-subtitle">Välj ett alternativ.</p>
      <div className="radio-buttons garden-container">
        <input
          type="radio"
          className="form-radio"
          id="yes"
          name="garden"
          onChange={(e) => manualChange("garden", true)}
          checked={state.garden === true}
        />
        <label className="form-label" htmlFor="yes">
          Ja
        </label>
        <input
          type="radio"
          className="form-radio"
          id="no"
          name="garden"
          onChange={(e) => manualChange("garden", false)}
          checked={state.garden === false}
        />
        <label className="form-label" htmlFor="no">
          Nej
        </label>
      </div>
      <p className="form-subtitle">
        Om <b>Ja</b>, finns trädgårdsutrustning?
      </p>
      <div className="radio-buttons garden-container">
        <div>
          <input
            type="radio"
            className="form-radio"
            id="yesGarden"
            name="gardenEquipment"
            onChange={(e) => manualChange("gardenEquipment", true)}
            checked={state.gardenEquipment === true}
          />
          <label className="form-label" htmlFor="yesGarden">
            Ja
          </label>
        </div>
        <div>
          <input
            type="radio"
            className="form-radio"
            id="noGarden"
            name="gardenEquipment"
            onChange={(e) => manualChange("gardenEquipment", false)}
            checked={state.gardenEquipment === false}
          />
          <label className="form-label" htmlFor="noGarden">
            Nej
          </label>
        </div>
      </div>
    </div>
  );
}
