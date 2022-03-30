// step 9 choose how your rental is heated (central, electric, gas etc)
export default function HeatingSelection() {
  return (
    <div>
      <h1>Hur värms bostaden upp?</h1>
      <div className="radio-buttons">
        <input type="radio" id="heatingOne" name="heat" value="central" />
        <label htmlFor="heatingOne">Centralvärme</label>
        <input type="radio" id="heatingTwo" name="heat" value="electric" />
        <label htmlFor="heatingTwo">Eluppvärmning</label>
        <input type="radio" id="heatingThree" name="heat" value="gas" />
        <label htmlFor="heatingThree">Gasvärme</label>
        <input type="radio" id="heatingFour" name="heat" value="radiator" />
        <label htmlFor="heatingFour">Radiatorvärme</label>
      </div>
    </div>
  );
}
