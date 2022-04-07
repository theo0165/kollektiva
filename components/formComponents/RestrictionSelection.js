//step 12 choose whether or not you wish to have a smoking free home, pet free home etc
export default function RestrictionSelection({ state, handleChange }) {
  return (
    <div className="col-10">
      <h1 className="form-title">Vem får hyra bostaden?</h1>
      <p className="form-subtitle">Beskriv din framtida hyresgäst.</p>
      <div className="input-container">
        <label htmlFor="income">Lägsta tillåtna årsinkomst</label>
        <input
          type="number"
          className="form-control"
          id="income"
          name="income"
          onChange={handleChange("income")}
          checked={state.income}
        />
      </div>
      <div className="input-container">
        <bold>Bostaden får hyras av: </bold>
        <input
          type="checkbox"
          className="form-checkbox"
          id="men"
          name="men"
          value="men"
          onChange={handleChange("men")}
          checked={state.men === "men" ? true : false}
        />
        <label htmlFor="men">Män</label>
        <input
          type="checkbox"
          className="form-checkbox"
          id="women"
          name="women"
          value="women"
          onChange={handleChange("women")}
          checked={state.women === "women" ? true : false}
        />
        <label htmlFor="women">Kvinnor</label>
        <input
          type="checkbox"
          className="form-checkbox"
          id="nonBinary"
          name="nonBinary"
          value="nonBinary"
          onChange={handleChange("nonBinary")}
          checked={state.nonBinary === "nonBinary" ? true : false}
        />
        <label htmlFor="nonBinary">Ickebinära</label>
      </div>
      <div className="input-container">
        <p className="form-subtitle">Är husdjur tillåtna i bostaden?</p>
        <input
          type="radio"
          className="form-radio"
          id="petsYes"
          name="petsYes"
          value="petsYes"
          onChange={handleChange("petsYes")}
          checked={state.petsYes === "petsYes" ? true : false}
        />
        <label htmlFor="petsYes">Ja</label>
        <input
          type="radio"
          className="form-radio"
          id="petsNo"
          name="petsNo"
          value="petsNo"
          onChange={handleChange("petsNo")}
          checked={state.petsNo === "petsNo" ? true : false}
        />
        <label htmlFor="petsNo">Nej</label>
      </div>
      <p className="form-subtitle">
        Är rökning tillåtet i anslutning till bostaden?
      </p>
      <div className="input-container">
        <input
          type="radio"
          className="form-radio"
          id="smokingYes"
          name="smokingYes"
          value="smokingYes"
          onChange={handleChange("smokingYes")}
          checked={state.smokingYes === "smokingYes" ? true : false}
        />
        <label htmlFor="smokingYes">Ja</label>
        <input
          type="radio"
          className="form-radio"
          id="smokingNo"
          name="smokingNo"
          value="smokingNo"
          onChange={handleChange("smokingNo")}
          checked={state.smokingNo === "smokingNo" ? true : false}
        />
        <label htmlFor="smokingNo">Nej</label>
      </div>
    </div>
  );
}
