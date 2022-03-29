//step 4, choose how many residents are allowed + how many rooms and sqm
export default function SizeSelection() {
  return (
    <div>
      <h1>Hur stor är bostaden?</h1>
      <input
        type="range"
        min="1"
        max="15"
        id="rooms"
        name="SizeSelection"
        value="Villa"
      />
      <label for="rooms">Antal rum</label>
      <input
        type="range"
        min="1"
        max="1000"
        id="size"
        name="SizeSelection"
        value="kvadratmeter"
      />
      <label for="size">Kvadratmeter</label>
      <div className="radio-buttons">
        <label for="sizeOne">1</label>
        <input type="radio" id="sizeOne" name="people" value="1" checked />
        <label for="sizeTwo">2</label>
        <input type="radio" id="SizeTwo" name="people" value="2" />
        <label for="sizeThree">3</label>
        <input type="radio" id="sizeThree" name="people" value="3" />
        <label for="sizeFour">4</label>
        <input type="radio" id="sizeFour" name="people" value="4" />
        <label for="sizeFive">5</label>
        <input type="radio" id="sizeFive" name="people" value="5" />
        <label for="sizeSix">6</label>
        <input type="radio" id="sizeSix" name="people" value="6" />
        <label for="sizeSeven">7</label>
        <input type="radio" id="sizeSeven" name="people" value="7" />
        <label for="sizeEight">8+</label>
        <input type="radio" id="sizeEight" name="people" value="8" />
      </div>
    </div>
  );
}
