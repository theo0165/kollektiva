import heroimagemobile from "../assets/heroimagemobile.png";
import heroimagelandscape from "../assets/heroimagelandscape.jpeg";
import easy_check from "../assets/icons/easy_check.svg";
import safe_check from "../assets/icons/safe_check.svg";
import terms_check from "../assets/icons/terms_check.svg";
import logotype from "../assets/icons/logotype.svg";

import couple from "../assets/couple.png";
import coupleTwo from "../assets/coupletwo.png";
import { supabase } from "../utils/initSupabase";
import { useState, useEffect } from "react";
import LatestsAds from "../components/LatestAds";
import { BsFillStarFill } from "react-icons/bs";

export default function Index({ latestAds }) {
  const [user, setUser] = useState(supabase.auth.user() || null);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      let newUser = supabase.auth.user();
      if (newUser) {
        await fetch("/api/auth/set", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        });
      }

      setUser(supabase.auth.user() || null);
    });
  }, []);

  return (
    <div>
      <div className="hero">
        <img className="hero-landscape" src={heroimagelandscape.src}></img>
        <img className="hero-mobile" src={heroimagemobile.src}></img>
        <h2 className="hero-title">
          Hyra ut din bostad? <br></br> Vi hjälper dig!
        </h2>
        <div className="hero-text-container">
          <p className="hero-text">
            Med Kollektiva är det tryggt och enkelt att hyra ut — delar av eller
            hela din bostad
          </p>
          <button className="btn btn-primary">Skapa annons</button>
        </div>
      </div>
      <div className="content">
        <h3 className="title col-10">Varför ska du välja Kollektiva?</h3>

        <div className="reason-container">
          <div className="reason">
            <img className="check" src={terms_check.src}></img>
            <h5>1. På dina villkor</h5>
            <p className="reason-text">
              Kollektiva ger dig friheten att välja den boendesituation som
              passar dig bäst idag och i framtiden.
            </p>
          </div>
          <div className="reason">
            <img className="check" src={safe_check.src}></img>
            <h5>2. Ett tryggt val</h5>
            <p className="reason-text">
              Alla parter måste verifiera sig samt signera samtliga avtal genom
              Kollektiva. Vi jobbar aktivt för att säkerställa kontakt med
              seriösa och bra hyresgäster.
            </p>
          </div>
          <div className="reason">
            <img className="check" src={easy_check.src}></img>
            <h5>3. Enkelt att använda</h5>
            <p className="reason-text last">
              Kollektiva erbjuder en enkel och användarvänlig tjänst för
              långtidsuthyrning av småhus.
            </p>
          </div>
        </div>
        <div className="quote-container">
          <p className="quote">
            “Det trygga och enkla valet för dig som vill hyra ut din bostad.”
          </p>
          <img className="qoute-logo" src={logotype.src}></img>
        </div>
      </div>
      <div className="latest-ads">
        <h4>Senaste annonserna</h4>
        <LatestsAds data={latestAds} />
        <button className="btn btn-primary">Se fler annonser</button>
      </div>
      <div className="testemonials">
        <h4>Läs om våra kära kunder:</h4>
        <div className="testemonial-container">
          <div className="testimonial">
            <img className="couple-image" src={coupleTwo.src}></img>
            <div className="testimonial-meta">
              <p className="testimonial-text">
                Vi valde att hyra ut via Kollektiva eftersom det är ett enkelt
                och tryggt alternativ. Vi är väldigt nöjda så här långt!
              </p>
              <h5>- Eva & Gösta Persson</h5>
              <div className="stars">
                <BsFillStarFill size="14px" color="#23449B" />
                <BsFillStarFill size="14px" color="#23449B" />
                <BsFillStarFill size="14px" color="#23449B" />
                <BsFillStarFill size="14px" color="#23449B" />
                <BsFillStarFill size="14px" color="#23449B" />
              </div>
            </div>
          </div>
          <div className="testimonial">
            <img className="couple-image" src={couple.src}></img>
            <div className="testimonial-meta">
              <p className="testimonial-text">
                Vi valde att hyra ut via Kollektiva eftersom det är ett enkelt
                och tryggt alternativ. Vi är väldigt nöjda så här långt!
              </p>
              <h5>– Peter & Anita Svensson</h5>
              <div className="stars">
                <BsFillStarFill size="14px" color="#23449B" />
                <BsFillStarFill size="14px" color="#23449B" />
                <BsFillStarFill size="14px" color="#23449B" />
                <BsFillStarFill size="14px" color="#23449B" />
                <BsFillStarFill size="14px" color="#23449B" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const data = await supabase
    .from("residence")
    .select()
    .order("created_at", true)
    .limit(5);

  if (data.r) {
    console.log(data.r);
  }

  const ads = data.body.map(async (residence) => {
    const image = await supabase
      .from("images")
      .select("image")
      .eq("residence_id", residence.id)
      .limit(1);

    if (image.r) {
      console.log(image.r);
    }

    return {
      ...residence,
      image: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/residence/${image.body[0].image}`,
    };
  });

  return {
    props: {
      latestAds: await Promise.all(ads),
    },
  };
};
