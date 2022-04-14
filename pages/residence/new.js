import Head from "next/head";
import Image from "next/image";
import NewResidence from "../../components/formComponents/NewResidence";
import FormControls from "../../components/FormControls";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { supabase } from "../../utils/initSupabase";
import Flash from "../../components/Flash";
import { useRouter } from "next/router";
import Hashids from "hashids";

export default function Home({ user }) {
  const maxSteps = 14;
  const [step, setStep] = useState(1);
  const [state, setState] = useState({});
  const [showUploadError, setShowUploadError] = useState(false);
  const router = useRouter();
  const hashids = new Hashids("kollektiva-residence-id", 10);

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
      setShowUploadError(false);
      try {
        const r = await supabase
          .from("residence")
          .insert({ ...state, user_id: user.id });

        if (r.error) {
          setShowUploadError(true);
          return;
        }

        router.push(`/residence/${hashids.encode(r.data[0].id)}`);
      } catch (e) {
        setShowUploadError(true);
        return;
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <div className={styles.container}>
      {showUploadError && (
        <Flash type="error" message="Något gick fel, försök igen senare" />
      )}
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

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: user,
    },
  };
}