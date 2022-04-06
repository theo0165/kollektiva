import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "../../styles/formComponents/LocationSelection.module.scss";

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
      <div className="col-10">
        <h1 className="form-title">Vart finns bostaden</h1>
        <div className="form-container">
          <label htmlFor="address" className={styles.label + " form-label"}>
            Sök efter din address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className={styles.input + " form-control full-w"}
            placeholder="Gatan 1, 123 45 Staden"
            onChange={handleInputChange}
            defaultValue={state.address}
          ></input>
        </div>
      </div>
      <Map address={address} />
    </>
  );
}
