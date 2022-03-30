import FormControl from "../styles/FormControl.css";

export default function FormControl() {
  return (
    <div>
      <p>Steg {step} av 10</p>
      <div className="buttonContainer">
        <button className="back">Bakåt</button>
        <button className="next">Nästa</button>
      </div>
    </div>
  );
}
