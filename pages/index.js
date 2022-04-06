import Head from "next/head";
import Image from "next/image";
import NewResidence from "../components/formComponents/NewResidence";
import FormControls from "../components/FormControls";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const maxSteps = 14;
  const [step, setStep] = useState(1);
  // go back to previous step
  const prevStep = () => {
    console.log(step - 1);
    setStep(step - 1);
  };

  // proceed to the next step
  const nextStep = () => {
    console.log(step + 1);
    setStep(step + 1);
  };

  return (
    <div className={styles.container}>
      <div style={{ marginBottom: "200px" }}>
        <NewResidence step={step} nextStep={nextStep} prevStep={prevStep} />
      </div>
      <FormControls
        maxSteps={maxSteps}
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Header shouldExit={true} />
      {page}
    </>
  );
};
