//step 8 choose whether or not your rental has a garden
export default function GardenSelection({ state, handleChange }) {
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
          value="true"
          onChange={handleChange("garden")}
          checked={state.garden === "yes" ? true : false}
        />
        <label className="form-label" htmlFor="yes">
          Ja
        </label>
        <input
          type="radio"
          className="form-radio"
          id="no"
          name="garden"
          value="false"
          onChange={handleChange("garden")}
          checked={state.garden === "no" ? true : false}
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
            value="true"
            onChange={handleChange("gardenEquipment")}
            checked={state.gardenEquipment === "yesGarden" ? true : false}
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
            value="false"
            onChange={handleChange("gardenEquipment")}
            checked={state.gardenEquipment === "noGarden" ? true : false}
          />
          <label className="form-label" htmlFor="noGarden">
            Nej
          </label>
        </div>
      </div>
    </div>
  );
}
