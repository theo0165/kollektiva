//step 2, choose if you want to rent out the entire house or just part of it
export default function PartSelection({ state, handleChange }) {
  return (
    <div>
      <h1>Jag vill hyra ut: </h1>
      <div className="radio-buttons">
        <input
          type="radio"
          id="partOne"
          name="rent"
          value="whole"
          onChange={handleChange("rent")}
          checked={state.rent === "whole" ? true : false}
        />
        <label htmlFor="partOne">Hela min bostad</label>
        <p>Eller</p>
        <input
          type="radio"
          id="partTwo"
          name="rent"
          value="part"
          onChange={handleChange("rent")}
          checked={state.rent === "part" ? true : false}
        />
        <label htmlFor="partTwo">En del av min bostad</label>
      </div>
    </div>
  );
}
