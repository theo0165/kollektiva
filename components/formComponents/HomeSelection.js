// step 3, choose what kind of home you want to rent out (house, cabin etc)
export default function HomeSelection({ state, handleChange }) {
  return (
    <div>
      <h1 className="form-title">Vilken typ av boende vill du hyra ut? </h1>
      <p className="form-subtitle">Välj ett alternativ.</p>
      <div className="radio-buttons">
        <input
          type="radio"
          id="villa"
          name="type"
          value="villa"
          onChange={handleChange("type")}
          checked={state.type === "villa" ? true : false}
        />
        <label className="form-label" htmlFor="villa">
          Villa
        </label>
        <input
          type="radio"
          id="stuga"
          name="type"
          value="stuga"
          onChange={handleChange("type")}
          checked={state.type === "stuga" ? true : false}
        />
        <label className="form-label" htmlFor="stuga">
          Stuga
        </label>
        <input
          type="radio"
          id="radhus"
          name="type"
          value="radhus"
          onChange={handleChange("type")}
          checked={state.type === "radhus" ? true : false}
        />
        <label htmlFor="radhus">Radhus</label>
        <input
          type="radio"
          id="parhus"
          name="type"
          value="parhus"
          onChange={handleChange("type")}
          checked={state.type === "parhus" ? true : false}
        />
        <label className="form-label" htmlFor="parhus">
          Parhus
        </label>
      </div>
    </div>
  );
}
