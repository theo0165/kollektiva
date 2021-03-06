// step 7 choose how the rental is decorated (fully, partially, none)

export default function FurnitureSelection({ state, handleChange }) {
  return (
    <div className="col-10">
      <h1 className="form-title">Hur hyrs bostaden ut?</h1>
      <p className="form-subtitle">Välj ett alternativ.</p>
      <div className="input-container">
        <div className="radio-buttons">
          <input
            type="radio"
            className="form-radio"
            id="fullyFurnished"
            name="furniture"
            value="fullyFurnished"
            onChange={handleChange("furniture")}
            checked={state.furniture === "fullyFurnished" ? true : false}
          />
          <label className="form-label" htmlFor="fullyFurnished">
            Möblerad
          </label>
          <input
            type="radio"
            className="form-radio"
            id="partiallyFurnished"
            name="furniture"
            value="partiallyFurnished"
            onChange={handleChange("furniture")}
            checked={state.furniture === "partiallyFurnished" ? true : false}
          />
          <label className="form-label" htmlFor="partiallyFurnished">
            Delvis möblerad
          </label>
          <input
            type="radio"
            className="form-radio"
            id="unFurnished"
            name="furniture"
            value="unFurnished"
            onChange={handleChange("furniture")}
            checked={state.furniture === "unFurnished" ? true : false}
          />
          <label className="form-label" htmlFor="unFurnished">
            Omöblerad
          </label>
        </div>
      </div>
    </div>
  );
}
