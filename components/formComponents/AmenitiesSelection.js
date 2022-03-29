// step 10 choose what amenities are included (balcony, elevator, air condition, washer, dryer, dishwasher, bathtub, parking, fireplace, internet)
export default function AmenitiesSelection() {
  return (
    <div>
      <h1>Vilka bekvämligheter finns i bostaden?</h1>
      <p>Välj alla alternativ som stämmer.</p>
      <div className="checkbox-buttons">
        <input type="checkbox" id="heatingOne" name="heat" value="central" />
        <label htmlFor="heatingOne">Centralvärme</label>
        <input type="checkbox" id="heatingTwo" name="heat" value="electric" />
        <label htmlFor="heatingTwo">Eluppvärmning</label>
        <input type="checkbox" id="heatingThree" name="heat" value="gas" />
        <label htmlFor="heatingThree">Gasvärme</label>
        <input type="checkbox" id="heatingFour" name="heat" value="radiator" />
        <label htmlFor="heatingFour">Radiatorvärme</label>
      </div>
    </div>
  );
}
