//step 8 choose whether or not your rental has a garden
export default function GardenSelection() {
  return (
    <div>
      <h1>Har bostaden trädgård?</h1>
      <div className="radio-buttons">
        <input type="radio" id="yes" name="garden" value="yes" />
        <label htmlFor="yes">Möblerad</label>
        <input type="radio" id="no" name="garden" value="no" />
      </div>
      <div className="gardenSuppliesContainer">
        <p>
          Om <b>Ja</b>, finns trädgårdsutrustning?
        </p>
        <label htmlFor="yesGarden">Trädgårdsutrustning finns</label>
        <input
          type="radio"
          id="yesGarden"
          name="gardenEquipment"
          value="yesGarden"
        />
        <label htmlFor="noGarden">Trädgårdsutrustning finns</label>
        <input
          type="radio"
          id="noGarden"
          name="gardenEquipment"
          value="noGarden"
        />
      </div>
    </div>
  );
}
