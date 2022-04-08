import { useRouter } from "next/router";
import styles from "../styles/FormControls.module.scss";

const FormControls = ({ maxSteps, step, nextStep, prevStep }) => {
  const router = useRouter();

  const stepDots = [];

  for (let i = 0; i < maxSteps - 1; i++) {
    stepDots.push(
      <div
        className={`${styles.dot} ${i < step - 1 ? styles.checked : ""}`}
        key={`form-control-dot-${i}`}
      ></div>
    );
  }

  return (
    <div className={`${styles.container} form-control`}>
      {step > 1 && (
        <div>
          <p className={styles.stepCount}>
            Steg {step - 1} av {maxSteps - 1}
          </p>
          <div className={styles.dotContainer}>{stepDots}</div>
        </div>
      )}

      <div className={styles.btnContainer + " col-10"}>
        {step - 1 < 1 ? (
          <button
            onClick={() => {
              router.push("/");
            }}
            className="btn"
          >
            Avbryt
          </button>
        ) : (
          <button onClick={prevStep} className="btn">
            Bakåt
          </button>
        )}
        {step + 1 > maxSteps ? (
          <button className="btn btn-success">Publicera</button>
        ) : (
          <button onClick={nextStep} className="btn btn-primary">
            Nästa
          </button>
        )}
      </div>
    </div>
  );
};

export default FormControls;
