// step 11 choose prize for your residence
export default function PrizeSelection({ state, handleChange }) {
  return (
    <div>
      <h1 className="form-title">Hur mycket kostar bostaden?</h1>
      <p className="form-subtitle">
        Ange vad som ingår i månadshyran och den totala månadshyran.
      </p>
      <div className="includedContainer">
        <bold>Vad ingår i månadshyran? </bold>
        <input
          type="checkbox"
          id="heating"
          name="heating"
          value="heating"
          onChange={handleChange("heating")}
          checked={state.heating}
        />
        <label htmlFor="heating">Värme</label>
        <input
          type="checkbox"
          id="water"
          name="water"
          value="water"
          onChange={handleChange("water")}
          checked={state.water}
        />
        <label htmlFor="water">Vatten</label>
        <input
          type="checkbox"
          id="electricity"
          name="electricity"
          value="electricity"
          onChange={handleChange("electricity")}
          checked={state.electricity}
        />
        <label htmlFor="electricity">El</label>
        <input
          type="checkbox"
          id="broadband"
          name="broadband"
          value="broadband"
          onChange={handleChange("broadband")}
          checked={state.broadband}
        />
        <label htmlFor="broadband">Bredband</label>
        <input
          type="checkbox"
          id="garbage"
          name="garbage"
          value="garbage"
          onChange={handleChange("garbage")}
          checked={state.garbage}
        />
        <label htmlFor="garbage">Sophantering</label>
      </div>
      <div className="prizeContainer"></div>
      <bold>Rekommenderad månadshyra</bold>
      <p>
        Baserat på informationen du har fyllt i är den rekommenderade
        månadshyran:{" "}
      </p>
      <bold>{prize} kr.</bold>
      <input
        type="text"
        id="monthlyRent"
        name="monthlyRent"
        value="monthlyRent"
        onChange={handleChange("monthlyRent")}
        checked={state.monthlyRent}
      />
      <label htmlFor="monthlyRent">Månadshyra</label>
    </div>
  );
}
