// step 10 choose what amenities are included (balcony, elevator, air condition, washer, dryer, dishwasher, bathtub, parking, fireplace, internet)
export default function AmenitiesSelection() {
  return (
    <div>
      <h1>Vilka bekvämligheter finns i bostaden?</h1>
      <p>Välj alla alternativ som stämmer.</p>
      <div className="checkbox-buttons">
        <input type="checkbox" id="balcony" name="balcony" value="balcony" />
        <label htmlFor="balcony">Balkong/Uteplats</label>
        <input type="checkbox" id="elevator" name="elevator" value="elevator" />
        <label htmlFor="elevator">Hiss</label>
        <input type="checkbox" id="air" name="air" value="air" />
        <label htmlFor="air">Luftkonditionering</label>
        <input
          type="checkbox"
          id="dishWasher"
          name="dishWasher"
          value="dishWasher"
        />
        <label htmlFor="dishWasher">Diskmaskin</label>
        <input
          type="checkbox"
          id="washingMachine"
          name="washingMachine"
          value="washingMachine"
        />
        <label htmlFor="washingMachine">Tvättmaskin</label>
        <input type="checkbox" id="dryer" name="dryer" value="dryer" />
        <label htmlFor="dryer">Torktumlare</label>
        <input type="checkbox" id="bathTub" name="bathTub" value="bathTub" />
        <label htmlFor="bathTub">Badkar</label>
        <input type="checkbox" id="garage" name="garage" value="garage" />
        <label htmlFor="garage">Garage</label>
        <input type="checkbox" id="parking" name="parking" value="parking" />
        <label htmlFor="parking">Parkeringsplats</label>
        <input type="checkbox" id="furnace" name="furnace" value="furnace" />
        <label htmlFor="furnace">Kakelugn/Öppen spis</label>
        <input type="checkbox" id="internet" name="internet" value="internet" />
        <label htmlFor="internet">Internet</label>
      </div>
    </div>
  );
}
