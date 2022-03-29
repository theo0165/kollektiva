// step 3, choose what kind of home you want to rent out (house, cabin etc)
export default function HomeSelection() {
  return (
    <div>
      <h1>Vilken typ av boende vill du hyra ut? </h1>
      <div className="radio-buttons">
        <input type="radio" id="villa" name="villa" value="villa" checked />
        <label for="villa">Villa</label>
        <input type="radio" id="stuga" name="stuga" value="stuga" />
        <label for="stuga">Stuga</label>
        <input type="radio" id="radhus" name="radhus" value="radhus" />
        <label for="radhus">Radhus</label>
        <input type="radio" id="parhus" name="parhus" value="parhus" />
        <label for="parhus">Parhus</label>
      </div>
    </div>
  );
}
