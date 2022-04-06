//step 12 choose whether or not you wish to have a smoking free home, pet free home etc
export default function RestrictionSelection({ state, handleChange }) {
  return (
    <div>
      <h1 className="form-title">Vem får hyra bostaden?</h1>
      <p className="form-subtitle">Beskriv din framtida hyresgäst.</p>
      <div className="incomeContainer">
        <bold>Lägsta tillåtna årsinkomst: </bold>
        <input
          type="text"
          id="income"
          name="income"
          value="income"
          onChange={handleChange("income")}
          checked={state.income}
        />
        <label htmlFor="income">Balkong/Uteplats</label>
      </div>
      <div className="genderContainer">
        <bold>Bostaden får hyras av: </bold>
        <input
          type="checkbox"
          id="men"
          name="men"
          value="men"
          onChange={handleChange("men")}
          checked={state.men === "men" ? true : false}
        />
        <label htmlFor="men">Män</label>
        <input
          type="checkbox"
          id="women"
          name="women"
          value="women"
          onChange={handleChange("women")}
          checked={state.women === "women" ? true : false}
        />
        <label htmlFor="women">Kvinnor</label>
        <input
          type="checkbox"
          id="nonBinary"
          name="nonBinary"
          value="nonBinary"
          onChange={handleChange("nonBinary")}
          checked={state.nonBinary === "nonBinary" ? true : false}
        />
        <label htmlFor="nonBinary">Ickebinära</label>
      </div>
      <div className="petsContainer">
        <bold>Är husdjur tillåtna i bostaden?</bold>
        <input
          type="radio"
          id="petsYes"
          name="petsYes"
          value="petsYes"
          onChange={handleChange("petsYes")}
          checked={state.petsYes === "petsYes" ? true : false}
        />
        <label htmlFor="petsYes">Ja</label>
        <input
          type="radio"
          id="petsNo"
          name="petsNo"
          value="petsNo"
          onChange={handleChange("petsNo")}
          checked={state.petsNo === "petsNo" ? true : false}
        />
        <label htmlFor="petsNo">Nej</label>
      </div>
      <div className="smokingContainer">
        <input
          type="radio"
          id="smokingYes"
          name="smokingYes"
          value="smokingYes"
          onChange={handleChange("smokingYes")}
          checked={state.smokingYes === "smokingYes" ? true : false}
        />
        <label htmlFor="smokingYes">Ja</label>
        <input
          type="radio"
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
