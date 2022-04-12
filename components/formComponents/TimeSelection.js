import { AiOutlineClockCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import styles from "../../styles/formComponents/TimeSelection.module.scss";

//step 6 choose the amount of time you wish to rent out your house
export default function TimeSelection({ state, handleChange }) {
  const [timePeriod, setTimePeriod] = useState("0 dagar");

  useEffect(() => {
    if (state.timeStart && state.timeEnd) {
      setTimePeriod(
        calculateDate(new Date(state.timeStart), new Date(state.timeEnd))
      );
    }
  }, [state]);

  return (
    <div className="col-10">
      <h1 className="form-title">Hur länge vill du hyra ut bostaden?</h1>
      <p className="form-subtitle">
        Välj startdatum och slutdatum för uthyrningsperioden.
      </p>
      <div className="date-inputs">
        <div className="input-container">
          <label htmlFor="timeStart" className="form-label">
            Hyr ut från:
          </label>
          <input
            type="date"
            id="timeStart"
            name="timeStart"
            onChange={handleChange("timeStart")}
            defaultValue={state.timeStart}
            className="form-control"
          />
        </div>
        <div className="input-container">
          <label htmlFor="timeEnd" className="form-label">
            Hyr ut till:
          </label>
          <input
            type="date"
            id="timeEnd"
            name="timeEnd"
            onChange={handleChange("timeEnd")}
            defaultValue={state.timeEnd}
            className="form-control"
          />
        </div>
      </div>
      <h3 className={styles.subtitle}>Uthyrningsperiod</h3>
      <p className={styles.dates}>
        Från <b>{state.timeStart != "" ? state.timeStart : "dd/mm/åååå"}</b>{" "}
        till <b>{state.timeEnd != "" ? state.timeEnd : "dd/mm/åååå"}</b>
      </p>
      <p className={styles.timePeriod}>
        <AiOutlineClockCircle /> {timePeriod}.
      </p>
    </div>
  );
}

const calculateDate = (d1, d2) => {
  const timeDiff = d2.getTime() - d1.getTime();
  const dayDiff = timeDiff / (1000 * 3600 * 24);

  const months = 0;
  const years = 0;

  let message = "";

  console.log(dayDiff);

  if (dayDiff <= 0) {
    return "0 dagar";
  }

  if (dayDiff >= 365) {
    years = Math.floor(dayDiff / 365);

    dayDiff = dayDiff % 365;

    message += `${years} år `;
  }

  if (dayDiff >= 30) {
    months = Math.floor(dayDiff / 30);

    dayDiff = dayDiff % 30;

    message += `${months} ${months > 1 ? "månader" : "månad"} `;
  }

  if (months > 0 || years > 0) {
    message += "och ";
  }

  if (!((months > 0 || years > 0) && dayDiff === 0)) {
    message += `${dayDiff} ${dayDiff > 1 ? "dagar" : "dag"}`;
  }

  return message;
};
