import { useEffect } from "react";
import Residence from "../Residence";

//step 13 preview of your rental along with all your input information
export default function Preview({ state, handleChange, setStep }) {
  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div>
      <Residence data={state} isPreview={true} setStep={setStep} />
    </div>
  );
}
