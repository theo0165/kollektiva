// step 9 choose how your rental is heated (central, electric, gas etc)
export default function HeatingSelection({ state, handleChange }) {
  return (
    <div className="col-10">
      <h1 className="form-title">Hur värms bostaden upp?</h1>
      <p className="form-subtitle">Välj ett alternativ.</p>
      <div className="input-container">
        <input
          type="radio"
          className="form-radio"
          id="heatingOne"
          name="heat"
          value="central"
          onChange={handleChange("heatType")}
          checked={state.heat === "central" ? true : false}
        />
        <label className="form-label" htmlFor="heatingOne">
          Centralvärme
        </label>
        <input
          type="radio"
          className="form-radio"
          id="heatingTwo"
          name="heat"
          value="electric"
          onChange={handleChange("heatType")}
          checked={state.heat === "electric" ? true : false}
        />
        <label className="form-label" htmlFor="heatingTwo">
          Eluppvärmning
        </label>
        <input
          type="radio"
          className="form-radio"
          id="heatingThree"
          name="heat"
          value="gas"
          onChange={handleChange("heatType")}
          checked={state.heat === "gas" ? true : false}
        />
        <label className="form-label" htmlFor="heatingThree">
          Gasvärme
        </label>
        <input
          type="radio"
          className="form-radio"
          id="heatingFour"
          name="heat"
          value="radiator"
          onChange={handleChange("heatType")}
          checked={state.heat === "radiator" ? true : false}
        />
        <label className="form-label" htmlFor="heatingFour">
          Radiatorvärme
        </label>
      </div>
    </div>
  );
}
