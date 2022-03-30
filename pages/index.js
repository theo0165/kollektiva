import Head from "next/head";
import Image from "next/image";
import NewResidence from "../components/formComponents/NewResidence";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  // go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className={styles.container}>
      <NewResidence step={step} nextStep={nextStep} prevStep={prevStep} />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}
