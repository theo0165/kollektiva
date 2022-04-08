import Head from "next/head";
import Image from "next/image";
import NewResidence from "../components/formComponents/NewResidence";
import FormControls from "../components/FormControls";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Header from "../components/Header";
import { supabase } from "../utils/initSupabase";

export default function Home() {
  const maxSteps = 14;
  const [step, setStep] = useState(1);

  const [state, setState] = useState({
    rent: "",
    type: "",
    rooms: "",
    size: "",
    people: "",
    address: "",
    timeStart: "",
    timeEnd: "",
    furniture: "",
    garden: "",
    gardenEquipment: "",
    heatType: "",
    balcony: "",
    elevator: "",
    air: "",
    dishWasher: "",
    washingMachine: "",
    dryer: "",
    bathTub: "",
    garage: "",
    parking: "",
    furnace: "",
    internet: "",
    description: "",
    heating: "",
    water: "",
    electricity: "",
    broadband: "",
    garbage: "",
    monthlyRent: "",
  });

  // handle field change
  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  // go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  const publish = () => {};

  return (
    <div className={styles.container}>
      <div style={{ marginBottom: "200px" }}>
        <NewResidence
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          state={state}
          setState={setState}
        />
      </div>
      <FormControls
        maxSteps={maxSteps}
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        publish={publish}
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
