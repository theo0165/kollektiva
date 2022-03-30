//step 6 choose the amount of time you wish to rent out your house
export default function TimeSelection() {
  return (
    <div>
      <h1>Hur länge vill du hyra ut bostaden?</h1>
      <div className="date-inputs">
        <input type="date" id="timeStart" name="timeStart" value="timeStart" />
        <label htmlFor="timeStart">Hyr ut från:</label>
        <input type="date" id="timeEnd" name="timeEnd" value="timeEnd" />
        <label htmlFor="timeEnd">Hyr ut till:</label>
      </div>
      <h3>Uhyrningsperiod: </h3>
      <p>
        Från {timeStart} till {timeEnd}
      </p>
    </div>
  );
}
