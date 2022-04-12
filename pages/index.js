import Head from "next/head";
import Image from "next/image";
import NewResidence from "../components/formComponents/NewResidence";
import FormControls from "../components/FormControls";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Header from "../components/Header";
import { supabase } from "../utils/initSupabase";
import Flash from "../components/Flash";

export default function Home({ user }) {
  const maxSteps = 14;
  const [step, setStep] = useState(1);

  const [state, setState] = useState({});

  // handle field change
  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  const manualChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  // go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  const publish = async () => {
    if (user && user.role === "authenticated") {
      try {
        const r = await supabase
          .from("residence")
          .insert({ ...state, user_id: user.id });
        console.log(r);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("No user");
    }
  };

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
          manualChange={manualChange}
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

export async function getServerSideProps({ req }) {
  const { data, user, error } = await supabase.auth.api.getUserByCookie(req);

  return {
    props: {
      user: user,
    },
  };
}
