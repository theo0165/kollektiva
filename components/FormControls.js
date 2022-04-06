import { useRouter } from "next/router";

const FormControls = ({ maxSteps, step, nextStep, prevStep }) => {
  const router = useRouter();

  return (
    <div>
      <div>
        {step - 1 < 1 ? (
          <button
            onClick={() => {
              router.push("/");
              console.log("hej");
            }}
          >
            Avbryt
          </button>
        ) : (
          <button onClick={prevStep}>Bakåt</button>
        )}
        {step + 1 > maxSteps ? (
          <button>Publicera</button>
        ) : (
          <button onClick={nextStep}>Nästa</button>
        )}
      </div>
    </div>
  );
};

export default FormControls;
