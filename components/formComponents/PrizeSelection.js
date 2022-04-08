import { useState } from "react";

// step 11 choose prize for your residence
export default function PrizeSelection({ state, handleChange }) {
  const [suggestedPrice, setSuggestedPrice] = useState(0);

  return (
    <div className="col-10">
      <h1 className="form-title">Hur mycket kostar bostaden?</h1>
      <p className="form-subtitle">
        Ange vad som ingår i månadshyran och den totala månadshyran.
      </p>
      <div className="checkbox-outer">
        <div className="checkbox-container garden-container">
          <div className="checkbox">
            <input
              type="checkbox"
              className="form-checkbox"
              id="heating"
              name="heating"
              value="heating"
              onChange={handleChange("heating")}
              checked={state.heating}
            />
            <label htmlFor="heating">Värme</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              className="form-checkbox"
              id="water"
              name="water"
              value="water"
              onChange={handleChange("water")}
              checked={state.water}
            />
            <label htmlFor="water">Vatten</label>
          </div>
          <div className="checkbox">
            <input
              required="true"
              type="checkbox"
              className="form-checkbox"
              id="electricity"
              name="electricity"
              value="electricity"
              onChange={handleChange("electricity")}
              checked={state.electricity}
            />
            <label htmlFor="electricity">El</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              className="form-checkbox"
              id="broadband"
              name="broadband"
              value="broadband"
              onChange={handleChange("broadband")}
              checked={state.broadband}
            />
            <label htmlFor="broadband">Bredband</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              className="form-checkbox"
              id="garbage"
              name="garbage"
              value="garbage"
              onChange={handleChange("garbage")}
              checked={state.garbage}
            />
            <label htmlFor="garbage">Sophantering</label>
          </div>
        </div>
      </div>
      <div className="prize-container">
        <h3 className="form-subtitle">Rek. månadshyra</h3>
        <p>
          Baserat på informationen du har fyllt i är den rekommenderade
          månadshyran:
        </p>
        <h4>18 000 - 20 000kr</h4>
      </div>
      <div className="input-container">
        <label className="form-label" htmlFor="monthlyRent">
          Månadshyra
        </label>
        <input
          type="number"
          className="form-control"
          id="monthlyRent"
          name="monthlyRent"
          onChange={handleChange("monthlyRent")}
          defaultValue={state.monthlyRent}
        />
      </div>
    </div>
  );
}
