//step 12 choose whether or not you wish to have a smoking free home, pet free home etc
export default function RestrictionSelection({
  state,
  handleChange,
  manualChange,
}) {
  return (
    <div className="col-10">
      <h1 className="form-title">Vem får hyra bostaden?</h1>
      <p className="form-subtitle">Beskriv din framtida hyresgäst.</p>
      <div className="input-container">
        <label className="form-label" htmlFor="income">
          Lägsta årsinkomst
        </label>
        <input
          type="number"
          className="form-control"
          id="income"
          name="income"
          onChange={(e) => manualChange("income", parseInt(e.target.value))}
          defaultValue={state.income != 0 ? state.income.toString() : ""}
        />
      </div>
      <div className="checkbox-outer">
        <div className="checkbox-buttons">
          <p className="form-label">Bostaden får hyras av: </p>
          <div className="checkbox-container garden-container">
            <div className="checkbox">
              <input
                type="checkbox"
                className="form-checkbox"
                id="men"
                name="men"
                onChange={(e) => manualChange("men", e.target.checked)}
                checked={state.men}
              />
              <label className="form-label" htmlFor="men">
                Män
              </label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                className="form-checkbox"
                id="women"
                name="women"
                onChange={(e) => manualChange("women", e.target.checked)}
                checked={state.women}
              />
              <label className="form-label" htmlFor="women">
                Kvinnor
              </label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                className="form-checkbox"
                id="nonBinary"
                name="nonBinary"
                onChange={(e) => manualChange("nonBinary", e.target.checked)}
                checked={state.nonBinary}
              />
              <label className="form-label" htmlFor="nonBinary">
                Ickebinära
              </label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                className="form-checkbox"
                id="rentByAll"
                name="rentByAll"
                onChange={(e) => manualChange("rentByAll", e.target.checked)}
                checked={state.rentByAll}
              />
              <label className="form-label" htmlFor="rentByAll">
                Alla
              </label>
            </div>
          </div>
        </div>
      </div>
      <p className="form-label">Är husdjur tillåtna i bostaden?</p>
      <div className="radio-buttons has-margin">
        <div>
          <input
            type="radio"
            className="form-radio"
            id="petsYes"
            name="pets"
            onChange={(e) => manualChange("pets", true)}
            checked={state.pets === true}
          />
          <label className="form-label" htmlFor="petsYes">
            Ja
          </label>
        </div>
        <div>
          <input
            type="radio"
            className="form-radio"
            id="petsNo"
            name="pets"
            onChange={(e) => manualChange("pets", false)}
            checked={state.pets === false}
          />
          <label className="form-label" htmlFor="petsNo">
            Nej
          </label>
        </div>
      </div>
      <p className="form-label">
        Är rökning tillåtet i anslutning till bostaden?
      </p>
      <div className="radio-buttons has-margin">
        <div>
          <input
            type="radio"
            className="form-radio"
            id="smokingYes"
            name="smoking"
            value="true"
            onChange={(e) => manualChange("smoking", true)}
            checked={state.smoking === true}
          />
          <label className="form-label" htmlFor="smokingYes">
            Ja
          </label>
        </div>
        <div>
          <input
            type="radio"
            className="form-radio"
            id="smokingNo"
            name="smoking"
            value="false"
            onChange={(e) => manualChange("smoking", false)}
            checked={state.smoking === false}
          />
          <label className="form-label" htmlFor="smokingNo">
            Nej
          </label>
        </div>
      </div>
    </div>
  );
}
