import dynamic from "next/dynamic";
import { useState } from "react";

//step 5 choose where in the country the rental is located
export default function LocationSelection() {
  const [coords, setCoords] = useState([null, null]);
  const Map = dynamic(() => import("../Map"), { ssr: false });

  const handleInputChange = async (e) => {
    const value = e.target.value;

    if (value === null || value === "") {
      setCoords([null, null]);
      return;
    }

    const addressLookup = await fetch(
      `/api/address_lookup?q=${decodeURIComponent(value)}`
    );
    const lookupResult = await addressLookup.json();

    console.log(lookupResult);

    if (!lookupResult.error) {
      setCoords([lookupResult.latitude, lookupResult.longitude]);
      console.log("Setting coords", coords);
    }
  };

  return (
    <>
      <h1>Vart finns bostaden</h1>
      <div>
        <label htmlFor="address">Sök efter din address</label>
        <input
          type="text"
          placeholder="Gatan 1, 123 45 Staden"
          onBlur={(e) => handleInputChange(e)}
        ></input>
      </div>
      <Map latitude={coords[0]} longitude={coords[1]} />
    </>
  );
}
