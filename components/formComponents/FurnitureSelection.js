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
        <label for="fullyFurnished">Möblerad</label>
        <input
          type="radio"
          id="partiallyFurnished"
          name="furniture"
          value="partiallyFurnished"
        />
        <label for="partiallyFurnished">Delvis möblerad</label>
        <input
          type="radio"
          id="unFurnished"
          name="furniture"
          value="unFurnished"
        />
        <label for="unFurnished">Omöblerad</label>
      </div>
    </div>
  );
}
