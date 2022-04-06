//step 6 choose the amount of time you wish to rent out your house
export default function TimeSelection({ state, handleChange }) {
  return (
    <div>
      <h1 className="form-title">Hur länge vill du hyra ut bostaden?</h1>
      <p className="form-subtitle">
        Välj startdatum och slutdatum för uthyrningsperioden.
      </p>
      <div className="date-inputs">
        <input
          type="date"
          id="timeStart"
          name="timeStart"
          onChange={handleChange("timeStart")}
          checked={state.timeStart}
        />
        <label htmlFor="timeStart">Hyr ut från:</label>
        <input
          type="date"
          id="timeEnd"
          name="timeEnd"
          onChange={handleChange("timeEnd")}
          checked={state.timeEnd}
        />
        <label htmlFor="timeEnd">Hyr ut till:</label>
      </div>
      <h3>Uhyrningsperiod: </h3>
      <p>{/* Från {timeStart} till {timeEnd} */}</p>
    </div>
  );
}
