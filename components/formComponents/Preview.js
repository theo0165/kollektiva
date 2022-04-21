import { useEffect } from "react";
import Residence from "../Residence";

//step 13 preview of your rental along with all your input information
export default function Preview({ state, images, handleChange, setStep }) {
  return (
    <div>
      <Residence
        data={state}
        images={images}
        isPreview={true}
        setStep={setStep}
      />
    </div>
  );
}
