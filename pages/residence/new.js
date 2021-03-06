import Head from "next/head";
import Image from "next/image";
import NewResidence from "../../components/formComponents/NewResidence";
import FormControls from "../../components/FormControls";
import styles from "../../styles/Home.module.scss";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { supabase } from "../../utils/initSupabase";
import Flash from "../../components/Flash";
import { useRouter } from "next/router";
import hashids from "../../utils/hashids";

export default function Home({ user }) {
  const maxSteps = 13;
  const [step, setStep] = useState(1);
  const [state, setState] = useState({
    address: "",
    air: false,
    balcony: false,
    bathTub: false,
    biarea: 0,
    broadband: false,
    description: "",
    dishWasher: false,
    dryer: false,
    electricity: false,
    elevator: false,
    furnace: false,
    furniture: "",
    garage: false,
    garbage: false,
    garden: null,
    gardenEquipment: null,
    heat: "",
    heating: false,
    income: 0,
    internet: false,
    men: false,
    monthlyRent: 0,
    nonBinary: false,
    parking: false,
    people: 0,
    pets: null,
    plot: 0,
    rent: "",
    rentByAll: false,
    rooms: 0,
    size: 0,
    smoking: null,
    timeEnd: "",
    timeStart: "",
    type: "",
    washingMachine: false,
    water: false,
    women: false,
  });

  const [images, setImages] = useState([]);

  const [showUploadError, setShowUploadError] = useState(false);
  const router = useRouter();

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

        images.forEach(async (image) => {
          const filename = `${randomFilename()}.${image.type.replace(
            "image/",
            ""
          )}`;
          const path = `${user.id}/${hashids.encode(r.data[0].id)}/${filename}`;
          const imageUpload = await supabase.storage
            .from("residence")
            .upload(path, image);

          const saveImageMeta = await supabase.from("images").insert({
            user_id: user.id,
            residence_id: r.data[0].id,
            image: path,
          });

          if (imageUpload.error || saveImageMeta.error) {
            setShowUploadError(true);
            return;
          }
        });

        router.push(`/residence/${hashids.encode(r.data[0].id)}`);
      } catch (e) {
        setShowUploadError(true);
        return;
      }
    } else {
      router.push("/login");
    }
  };

  const randomFilename = () => {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Pick characers randomly
    let str = "";
    for (let i = 0; i < 20; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
  };

  return (
    <div className={styles.container}>
      {showUploadError && (
        <Flash type="error" message="N??got gick fel, f??rs??k igen senare" />
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
          setStep={setStep}
          images={images}
          setImages={setImages}
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
