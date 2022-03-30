//step 4, choose how many residents are allowed + how many rooms and sqm

export default function SizeSelection({ state, handleChange }) {
  return (
    <div>
      <h1>Hur stor är bostaden?</h1>
      <input
        type="range"
        min="1"
        max="15"
        id="rooms"
        name="rooms"
        onChange={handleChange("rooms")}
        value={state.rooms}
      />
      <label htmlFor="rooms">Antal rum</label>
      <input
        type="range"
        min="1"
        max="1000"
        id="size"
        name="size"
        onChange={handleChange("size")}
        value={state.size}
      />
      <label htmlFor="size">Kvadratmeter</label>
      <div className="radio-buttons">
        <label htmlFor="sizeOne">1</label>
        <input
          type="radio"
          id="sizeOne"
          name="people"
          value="1"
          onChange={handleChange("people")}
          checked={state.people === "1" ? true : false}
        />
        <label htmlFor="sizeTwo">2</label>
        <input
          type="radio"
          id="SizeTwo"
          name="people"
          value="2"
          onChange={handleChange("people")}
          checked={state.people === "2" ? true : false}
        />
        <label htmlFor="sizeThree">3</label>
        <input
          type="radio"
          id="sizeThree"
          name="people"
          value="3"
          onChange={handleChange("people")}
          checked={state.people === "3" ? true : false}
        />
        <label htmlFor="sizeFour">4</label>
        <input
          type="radio"
          id="sizeFour"
          name="people"
          value="4"
          onChange={handleChange("people")}
          checked={state.people === "4" ? true : false}
        />
        <label htmlFor="sizeFive">5</label>
        <input
          type="radio"
          id="sizeFive"
          name="people"
          value="5"
          onChange={handleChange("people")}
          checked={state.people === "5" ? true : false}
        />
        <label htmlFor="sizeSix">6</label>
        <input
          type="radio"
          id="sizeSix"
          name="people"
          value="6"
          onChange={handleChange("people")}
          checked={state.people === "6" ? true : false}
        />
        <label htmlFor="sizeSeven">7</label>
        <input
          type="radio"
          id="sizeSeven"
          name="people"
          value="7"
          onChange={handleChange("people")}
          checked={state.people === "7" ? true : false}
        />
        <label htmlFor="sizeEight">8+</label>
        <input
          type="radio"
          id="sizeEight"
          name="people"
          value="8"
          onChange={handleChange("people")}
          checked={state.people === "8" ? true : false}
        />
      </div>
    </div>
  );
}
