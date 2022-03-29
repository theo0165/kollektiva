import dynamic from "next/dynamic";

//step 5 choose where in the country the rental is located
export default function LocationSelection() {
  const Map = dynamic(() => import("../Map"), { ssr: false });

  return (
    <>
      <h1>Vart finns bostaden</h1>
      <div>
        <label htmlFor="address">Sök efter din address</label>
        <input type="text" placeholder="Gatan 1, 123 45 Staden"></input>
      </div>
      <Map />
    </>
  );
}
