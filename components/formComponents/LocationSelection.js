import dynamic from "next/dynamic";
import { useState } from "react";

//step 5 choose where in the country the rental is located
export default function LocationSelection({ state, handleChange, setState }) {
  const [address, setAddress] = useState(state.address);
  const Map = dynamic(() => import("../Map"), { ssr: false });

  const handleInputChange = async (e) => {
    const value = e.target.value;

    if (value.length < 10) {
      setAddress(null);
      return;
    }

    if (value === null || value === "") {
      setAddress(null);
      return;
    }

    setAddress(value);
    setState({ ...state, ["address"]: value });
  };

  return (
    <>
      <h1 className="form-title">Vart finns bostaden?</h1>
      <div>
        <label htmlFor="address">Sök efter din address</label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Gatan 1, 123 45 Staden"
          onChange={handleInputChange}
          defaultValue={state.address}
        ></input>
      </div>
      <Map address={address} />
    </>
  );
}
