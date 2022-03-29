// step 7 choose how the rental is decorated (fully, partially, none)
export default function FurnitureSelection() {
  return (
    <div>
      <h1>Hur hyrs bostaden ut?</h1>
      <div className="radio-buttons">
        <input
          type="radio"
          id="fullyFurnished"
          name="furniture"
          value="fullyFurnished"
          checked
        />
        <label htmlFor="fullyFurnished">Möblerad</label>
        <input
          type="radio"
          id="partiallyFurnished"
          name="furniture"
          value="partiallyFurnished"
        />
        <label htmlFor="partiallyFurnished">Delvis möblerad</label>
        <input
          type="radio"
          id="unFurnished"
          name="furniture"
          value="unFurnished"
        />
        <label htmlFor="unFurnished">Omöblerad</label>
      </div>
    </div>
  );
}
