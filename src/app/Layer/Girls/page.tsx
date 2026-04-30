"use client";

import { useState } from "react";
import LayerNav from "@/components/LayerNav";

type GirlId = "default" | "lain" | "alice" | "chisa" | "reika" | "mika" | "juri" | "myumyu";

const NAMES: Array<{ id: GirlId; name: string; jp: string }> = [
  { id: "lain", name: "Lain", jp: "レイン" },
  { id: "alice", name: "Alice", jp: "アリス" },
  { id: "chisa", name: "Chisa", jp: "チサ" },
  { id: "reika", name: "Reika", jp: "レイカ" },
  { id: "mika", name: "Mika", jp: "ミカ" },
  { id: "juri", name: "Juri", jp: "ジュリ" },
  { id: "myumyu", name: "Myu-Myu", jp: "ミュウ-ミュウ" },
];

export default function GirlsPage() {
  const [selected, setSelected] = useState<GirlId>("default");

  const Profile = ({
    id,
    name,
    jp,
    age,
    description,
    secrets,
    images,
    comments,
  }: {
    id: GirlId;
    name: string;
    jp: string;
    age: number;
    description: string;
    secrets: string[];
    images: string[];
    comments: string;
  }) => (
    <div
      className="default"
      id={id}
      style={{ display: selected === id ? "block" : "none", padding: "10px" }}
    >
      <div className="definner">
        <div style={{ height: "25px" }}>
          <h1 style={{ textAlign: "left", display: "inline-block" }}>
            {name}/{jp}
          </h1>
          <h1 style={{ float: "right", display: "inline-block" }}>Age:{age}</h1>
        </div>
        <hr />
        <section>
          <h2 style={{ textDecoration: "underline", marginBottom: "5px" }}>
            Description:
          </h2>
          {description}
        </section>
        <hr />
        <section>
          <h2 style={{ textDecoration: "underline", marginBottom: "5px" }}>
            Secrets:
          </h2>
          <ul style={{ marginLeft: "2%" }}>
            {secrets.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
        <hr style={{ marginBottom: 0 }} />
        <div style={{ display: "table", margin: "auto" }}>
          {images.map((src) => (
            <img key={src} className="images" alt={name} src={src} />
          ))}
        </div>
        <hr style={{ marginTop: "-10px" }} />
        <section>
          <h2 style={{ textDecoration: "underline", marginBottom: "5px" }}>
            Comments:
          </h2>
          {comments}
        </section>
      </div>
    </div>
  );

  return (
    <>
      <link rel="stylesheet" href="/stylesheets/girls.css" />
      <link rel="shortcut icon" href="/favico/favicong2.ico" />
      <title>wired.girls.neocities</title>

      <audio autoPlay loop>
        <source
          src="/Hypermedia/Girls/205.%20Control%20Your%20Music.mp3"
          type="audio/mpeg"
        />
      </audio>

      <LayerNav />

      <div
        id="leftcolumn"
        style={{ position: "absolute", width: "300px" }}
      >
        <div
          style={{
            backgroundColor: "black",
            borderStyle: "outset",
            borderWidth: "15px",
            borderColor: "#E62EB8",
            padding: "5px",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              padding: "2px",
              backgroundColor: "#F505FF",
              borderStyle: "inset",
              borderWidth: "10px",
              borderColor: "#E62EB8",
              boxShadow: "inset 0px 0px 20px #CC00CC",
              color: "black",
              fontFamily: "LoveLetter",
            }}
          >
            <div>
              {NAMES.map((g, i) => (
                <div
                  key={g.id}
                  className="girl"
                  id={g.name}
                  style={{ marginTop: i === 0 ? "0px" : undefined, cursor: "pointer" }}
                  onClick={() => setSelected(g.id)}
                >
                  <p
                    style={{
                      textAlign: "left",
                      display: "inline-block",
                      color: "#9933FF",
                    }}
                  >
                    {g.name}
                  </p>
                  <p
                    style={{
                      float: "right",
                      display: "inline",
                      color: "#9933FF",
                    }}
                  >
                    {g.jp}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#F505FF",
              borderStyle: "inset",
              borderWidth: "10px",
              marginTop: "5px",
              borderColor: "#E62EB8",
              boxShadow: "inset 0px 0px 20px #CC00CC",
            }}
          >
            <img
              alt="Tachibana Labs and Venus symbol"
              src="/img/girls.png"
              draggable={false}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{ position: "relative", marginTop: "0%", marginBottom: "1%" }}
      >
        <div id="header">
          <p>Girls of Cyberia</p>
        </div>
        <div id="return">
          <h2
            onClick={() => (window.location.href = "/")}
            style={{ cursor: "pointer" }}
          >
            Return to Index
          </h2>
        </div>
      </div>

      <div
        className="default"
        id="defimage"
        style={{ display: selected === "default" ? "block" : "none" }}
      >
        <img
          draggable={false}
          alt="main image"
          style={{ width: "100%", height: "100%" }}
          src="/img/grildefault2.png"
        />
      </div>

      <Profile
        id="lain"
        name="Lain"
        jp="レイン"
        age={14}
        description="Lain is a pale-skinned, brown-eyed, petite girl. Her short brown hair is coupled by a unique hairclip clasping a long tail of hair on the left side of her face. What she's wearing depends on who she arrived here as. When she comes to dance it's always trendy, wearing a simple ensemble or sexy dress."
        secrets={[
          "Lain has been known to associate with: Alice, Reika and Juri as well as Myu-Myu and a few boys at a back table.",
          "She was involved in the incident with that one Accela freak they call \"Ash\" supposedly she said something to him just before he shot himself.",
          "Possesses a bizarre knowledge of computers for a girl, and one of her age.",
          "Carries around a red HandiNAVI but is rarely seen using it.",
          "Can be quite distant at times, like she's not all there.",
        ]}
        images={["/img/lain3.png", "/img/Lain1.png", "/img/lain2.png"]}
        comments="Lain has been to Cyberia quite a few times. Although whether she admits that depends on when and how you ask her. It's like she's a completely different person."
      />

      <Profile
        id="alice"
        name="Alice"
        jp="アリス"
        age={15}
        description="Alice is a kind-hearted teenage girl. Her dark brown hair reaches her chin from the side and down the nape of her neck. Her fair skin blends well with the flashing lights of the dance floor."
        secrets={[
          "Alice associates with; Lain, Reika and Juri and once brought along Chisa. She's also been seen alone with an older man.",
          "She was there when that Accela freak went berserk.",
          "Alice is constantly and eagerly tapping away on her HandiNAVI, probably messaging friends or arranging a rendevous.",
          "Alice is always happy to be at Cyberia. Whether with friends or her unknown adult companion.",
        ]}
        images={["/img/alice1.png", "/img/alice2.png", "/img/alice3.png"]}
        comments="Alice is something of a fast regular to Cyberia. She's only been coming for a few months but does so frequently."
      />

      <Profile
        id="chisa"
        name="Chisa"
        jp="チサ"
        age={14}
        description="Chisa is a small, shy, delicate girl. Her raven black hair descends to her shoulders where it's tied into bushy tails. She's constantly veiled in a sullen or grim demeanor."
        secrets={[
          "Chisa has been seen with JJ occasionally, just outside the club. During these meetings a hand-off usually takes place.",
          "That time she came, she spent most of it glued to the wall, eyeing a few notable patrons; Taro and Lain in particular.",
          "She spoke so little, despite being goaded and encouraged by her companions.",
          "It's just hearsay, but she supposedly talked to the 'Accela freak' the night she was here. A week before the night of the incident.",
        ]}
        images={["/img/chisa2.png", "/img/chisa1.png", "/img/chisa3.png"]}
        comments="Chisa is severe loner, best left alone, Being as distant as she is somewhat unattractive."
      />

      <Profile
        id="reika"
        name="Reika"
        jp="レイカ"
        age={15}
        description="Reika is an elegant girl at her age. She takes advantage of her above average height and wardrobe and fits well in Cyberia."
        secrets={[
          "Reika never comes to Cyberia alone. She's always accompanied by either Alice, Juri or another girl.",
          "Her beauty, dress and demeanor might hint at coming from a family with money. Moreso as she always offers to pay for drinks.",
          "She is something of a reserved dancer. Preferring to take to the floor with only the right songs.",
        ]}
        images={["/img/reika1.png", "/img/reika2.png", "/img/reika3.png"]}
        comments="Reika seems very down to earth, or atleast very well disciplined."
      />

      <Profile
        id="mika"
        name="Mika"
        jp="ミカ"
        age={16}
        description="Mika has light brown hair and brown eyes which upon closer inspection reveal a dark green tint."
        secrets={[
          "She tells her parents she makes money babysitting. Her real source of income is waiting tables at Cyberia.",
          "Mika is related to Lain, but doesn't recognize her sister when she's at the club.",
          "Mika doesn't seem innocent at all.",
          "She wears a gas mask while working, the manager's idea and hers.",
        ]}
        images={["/img/mika1.png", "/img/mika2.png", "/img/mika4.png"]}
        comments="Mika is unassuming on the outside, a teenager attending Cyberia like the rest."
      />

      <Profile
        id="juri"
        name="Juri"
        jp="ジュリ"
        age={15}
        description="Juri is an energetic, immature girl. Her auburn hair is a curly ball, tamed by scrunchies, ties and iron."
        secrets={[
          "Juri is quite innocent, she has trouble lying and can't hide any ill intentions.",
          "She only comes to the club with Alice and Reika, the only friends she seems to trust.",
          "Juri rarely pays for her own drinks or admissions on special nights.",
        ]}
        images={["/img/juri1.png", "/img/juri2.png", "/img/juri3.png"]}
        comments="Juri's cheerful energy is the kind of attitude can get her in trouble in the wrong corners of Cyberia."
      />

      <Profile
        id="myumyu"
        name="Myu-Myu"
        jp="ミュウ-ミュウ"
        age={10}
        description="Myu-Myu has dark black hair, usually tied back by a bow."
        secrets={[
          "Myu-Myu spends most of her time with Masayuki and Taro at the tables near the back where the unscrupulous traffic pass them by.",
          "She has something of a crush on Taro. One that he pretends to avoid.",
          "Though she doesn't have much of her own to say, she's quick to barge into other's conversations.",
        ]}
        images={["/img/myu1.png", "/img/myu2.png", "/img/myu3.png"]}
        comments="Myu-Myu is just a young girl. Despite this she's a regular."
      />

      <div style={{ position: "fixed", bottom: 0, right: "5px" }}>
        <a draggable={false} href="//www.tachibanalabs.net">
          <img
            draggable={false}
            src="/img/powernavi-badge.jpg"
            title="Copland OS is a trademarked product of Tachibana Labs"
          />
        </a>
      </div>
    </>
  );
}
