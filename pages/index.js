import heroimagemobile from "../assets/heroimagemobile.png";
import couple from "../assets/couple.png";
import { supabase } from "../utils/initSupabase";

export default function Index({}) {
  return (
    <div>
      <div className="hero">
        <img src={heroimagemobile.src}></img>
        <p>
          Med Kollektiva är det tryggt och enkelt att hyra ut — delar av eller
          hela din bostad
        </p>
        <button className="btn btn-primary">Skapa annons</button>
      </div>
      <div className="reason-container col-10">
        <h3 className="title">Varför Kollektiva?</h3>
        <div className="reason">
          <h5>1. På dina villkor</h5>
          <p className="reason-text">
            Kollektiva ger dig friheten att göra det du vill utan att behöva
            släppa tryggheten.
          </p>
        </div>
        <div className="reason">
          <h5>2. Tryggt</h5>
          <p className="reason-text">
            Kollektiva erbjuder säker uthyrning, alla som hyr och hyr ut behöver
            bekräfta sin identitet.
          </p>
        </div>
        <div className="reason">
          <h5>3. Lätt att använda</h5>
          <p className="reason-text last">
            Kollektiva erbjuder det smidigaste och enklaste sättet att hyra ut.
          </p>
        </div>
      </div>
      <div className="quote-container">
        <p className="quote">
          “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.”
        </p>
      </div>
      <div className="latest-ads col-10">
        <h4>Senaste annonserna</h4>
        <div className="carousel"></div>
        <button className="btn btn-primary">Se fler annonser</button>
      </div>
      <div className="col-10 testimonial">
        <img className="couple-image" src={couple.src}></img>
        <h5>Eva & Gösta Persson</h5>
        <p className="testimonial-text">
          Vi valde att hyra ut via Kollektiva eftersom det är ett enkelt och
          tryggt alternativ. Vi är väldigt nöjda så här långt!
        </p>
      </div>
    </div>
  );
}
