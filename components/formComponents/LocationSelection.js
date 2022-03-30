import dynamic from "next/dynamic";
import { useState } from "react";

//step 5 choose where in the country the rental is located
export default function LocationSelection() {
  const [address, setAddress] = useState(null);
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
  };

  return (
    <>
      <h1>Vart finns bostaden</h1>
      <div>
        <label htmlFor="address">Sök efter din address</label>
        <input
          type="text"
          placeholder="Gatan 1, 123 45 Staden"
          onChange={(e) => handleInputChange(e)}
        ></input>
      </div>
      <Map address={address} />
    </>
  );
}
