//step 4, choose how many residents are allowed + how many rooms and sqm

export default function SizeSelection({ state, handleChange }) {
  return (
    <div className="col-10">
      <h1 className="form-title">Hur stor är bostaden?</h1>
      <p className="form-subtitle">Fyll i dina uppgifter.</p>
      <div className="input-container">
        <label className="form-label" htmlFor="rooms">
          Antal rum
        </label>
        <input
          type="number"
          className="form-control"
          id="rooms"
          name="rooms"
          onChange={handleChange("rooms")}
          defaultValue={state.rooms}
        />
        <label className="form-label" htmlFor="size">
          Boarea (m²)
        </label>
        <input
          type="number"
          id="size"
          name="size"
          onChange={handleChange("size")}
          defaultValue={state.size}
        />
        <label className="form-label" htmlFor="rooms">
          Biarea (m²)
        </label>
        <input
          type="number"
          id="biarea"
          name="biarea"
          onChange={handleChange("biarea")}
          defaultValue={state.biarea}
        />
        <label className="form-label" htmlFor="tomt">
          Tomt (m²)
        </label>
        <input
          type="number"
          id="tomt"
          name="tomt"
          onChange={handleChange("tomt")}
          defaultValue={state.tomt}
        />
      </div>
      <p className="form-subtitle">Hur många kan bo i bostaden?</p>
      <div className="radio-buttons people-container">
        <div>
          <input
            type="radio"
            className="form-radio"
            id="sizeOne"
            name="people"
            value="1"
            onChange={handleChange("people")}
            checked={state.people === "1" ? true : false}
          />
          <label htmlFor="sizeOne">1</label>
        </div>
        <div>
          <input
            className="form-radio"
            type="radio"
            id="sizeTwo"
            name="people"
            value="2"
            onChange={handleChange("people")}
            checked={state.people === "2" ? true : false}
          />
          <label htmlFor="sizeTwo">2</label>
        </div>
        <div>
          <input
            type="radio"
            className="form-radio"
            id="sizeThree"
            name="people"
            value="3"
            onChange={handleChange("people")}
            checked={state.people === "3" ? true : false}
          />
          <label htmlFor="sizeThree">3</label>
        </div>
        <div>
          <input
            type="radio"
            className="form-radio"
            id="sizeFour"
            name="people"
            value="4"
            onChange={handleChange("people")}
            checked={state.people === "4" ? true : false}
          />
          <label htmlFor="sizeFour">4</label>
        </div>
        <div>
          <input
            type="radio"
            className="form-radio"
            id="sizeFive"
            name="people"
            value="5"
            onChange={handleChange("people")}
            checked={state.people === "5" ? true : false}
          />
          <label htmlFor="sizeFive">5</label>
        </div>
        <div>
          <input
            type="radio"
            className="form-radio"
            id="sizeSix"
            name="people"
            value="6"
            onChange={handleChange("people")}
            checked={state.people === "6" ? true : false}
          />
          <label htmlFor="sizeSix">6</label>
        </div>
        <div>
          <input
            type="radio"
            className="form-radio"
            id="sizeSeven"
            name="people"
            value="7"
            onChange={handleChange("people")}
            checked={state.people === "7" ? true : false}
          />
          <label htmlFor="sizeSeven">7</label>
        </div>
        <div>
          <input
            type="radio"
            className="form-radio"
            id="sizeEight"
            name="people"
            value="8"
            onChange={handleChange("people")}
            checked={state.people === "8" ? true : false}
          />
          <label htmlFor="sizeEight">8</label>
        </div>
      </div>
    </div>
  );
}
