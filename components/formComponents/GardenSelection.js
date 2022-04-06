//step 8 choose whether or not your rental has a garden
export default function GardenSelection({ state, handleChange }) {
  return (
    <div>
      <h1>Har bostaden trädgård?</h1>
      <p className="form-subtitle">Välj ett alternativ.</p>
      <div className="radio-buttons">
        <input
          type="radio"
          id="yes"
          name="garden"
          value="yes"
          onChange={handleChange("garden")}
          checked={state.garden === "yes" ? true : false}
        />
        <label className="form-label" htmlFor="yes">
          Ja
        </label>
        <input
          type="radio"
          id="no"
          name="garden"
          value="no"
          onChange={handleChange("garden")}
          checked={state.garden === "no" ? true : false}
        />
        <label className="form-label" htmlFor="no">
          Nej
        </label>
      </div>
      <div className="gardenSuppliesContainer">
        <p className="form-subtitle">
          Om <b>Ja</b>, finns trädgårdsutrustning?
        </p>
        <label className="form-label" htmlFor="yesGarden">
          Trädgårdsutrustning finns
        </label>
        <input
          type="radio"
          id="yesGarden"
          name="gardenEquipment"
          value="yesGarden"
          onChange={handleChange("gardenEquipment")}
          checked={state.gardenEquipment === "yesGarden" ? true : false}
        />
        <label className="form-label" htmlFor="noGarden">
          Trädgårdsutrustning finns
        </label>
        <input
          type="radio"
          id="noGarden"
          name="gardenEquipment"
          value="noGarden"
          onChange={handleChange("gardenEquipment")}
          checked={state.gardenEquipment === "noGarden" ? true : false}
        />
      </div>
    </div>
  );
}
