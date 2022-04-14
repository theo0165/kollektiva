//step 4, choose how many residents are allowed + how many rooms and sqm
export default function SizeSelection({ state, handleChange, manualChange }) {
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
          required={true}
          className="form-control"
          id="rooms"
          name="rooms"
          onChange={(e) => manualChange("rooms", parseInt(e.target.value))}
          defaultValue={state.rooms != 0 ? state.rooms.toString() : ""}
        />
        <label className="form-label" htmlFor="size">
          Boarea (m²)
        </label>
        <input
          required={true}
          type="number"
          id="size"
          name="size"
          onChange={(e) => manualChange("size", parseInt(e.target.value))}
          defaultValue={state.size != 0 ? state.size.toString() : ""}
        />
        <label className="form-label" htmlFor="rooms">
          Biarea (m²)
        </label>
        <input
          required={true}
          type="number"
          id="biarea"
          name="biarea"
          onChange={(e) => manualChange("biarea", parseInt(e.target.value))}
          defaultValue={state.biarea != 0 ? state.biarea.toString() : ""}
        />
        <label className="form-label" htmlFor="plot">
          Tomt (m²)
        </label>
        <input
          required={true}
          type="number"
          id="plot"
          name="plot"
          onChange={(e) => manualChange("plot", parseInt(e.target.value))}
          defaultValue={state.plot != 0 ? state.plot.toString() : ""}
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
            onChange={(e) => manualChange("people", 1)}
            checked={state.people === 1 ? true : false}
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
            onChange={(e) => manualChange("people", 2)}
            checked={state.people === 2 ? true : false}
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
            onChange={(e) => manualChange("people", 3)}
            checked={state.people === 3 ? true : false}
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
            onChange={(e) => manualChange("people", 4)}
            checked={state.people === 4 ? true : false}
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
            onChange={(e) => manualChange("people", 5)}
            checked={state.people === 5 ? true : false}
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
            onChange={(e) => manualChange("people", 6)}
            checked={state.people === 6 ? true : false}
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
            onChange={(e) => manualChange("people", 7)}
            checked={state.people === 7 ? true : false}
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
            onChange={(e) => manualChange("people", 8)}
            checked={state.people === 8 ? true : false}
          />
          <label htmlFor="sizeEight">8</label>
        </div>
      </div>
    </div>
  );
}
