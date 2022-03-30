// step 9 choose how your rental is heated (central, electric, gas etc)
export default function HeatingSelection() {
  return (
    <div>
      <h1>Hur värms bostaden upp?</h1>
      <div className="radio-buttons">
        <input
          type="radio"
          id="heatingOne"
          name="heat"
          value="central"
          onChange={handleChange("heat")}
          checked={state.heat === "central" ? true : false}
        />
        <label htmlFor="heatingOne">Centralvärme</label>
        <input
          type="radio"
          id="heatingTwo"
          name="heat"
          value="electric"
          onChange={handleChange("heat")}
          checked={state.heat === "electric" ? true : false}
        />
        <label htmlFor="heatingTwo">Eluppvärmning</label>
        <input
          type="radio"
          id="heatingThree"
          name="heat"
          value="gas"
          onChange={handleChange("heat")}
          checked={state.heat === "gas" ? true : false}
        />
        <label htmlFor="heatingThree">Gasvärme</label>
        <input
          type="radio"
          id="heatingFour"
          name="heat"
          value="radiator"
          onChange={handleChange("heat")}
          checked={state.heat === "radiator" ? true : false}
        />
        <label htmlFor="heatingFour">Radiatorvärme</label>
      </div>
    </div>
  );
}
