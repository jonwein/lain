"use client";

const ROW1 = [
  { num: "PRVW", label: "Nightmare", href: "/Layer/Nightmare" },
  { num: "01", label: "Weird", href: "/Layer/Wierd" },
  { num: "02", label: "Girls", href: "/Layer/Girls" },
  { num: "03", label: "Psyche", href: "/Layer/Psyche" },
  { num: "04", label: "Religion", href: "/Layer/Religion" },
  { num: "05", label: "Distortion", href: "/Layer/Distortion" },
  { num: "06", label: "Kids", href: "/" },
  { num: "07", label: "Society", href: "/Layer/Society" },
];

const ROW2 = [
  { num: "08", label: "Rumors", href: "/Layer/Rumors" },
  { num: "09", label: "Protocol", href: "/Layer/Protocol" },
  { num: "10", label: "Love", href: "/Layer/Love" },
  { num: "11", label: "Infornography", href: "/Layer/Infornography" },
  { num: "12", label: "Landscape", href: "/Layer/Landscape" },
  { num: "13", label: "Ego", href: "/Layer/Ego" },
  { num: "00", label: "Program", href: "/Layer/Program" },
];

export default function EgoPage() {
  const goto = (href: string) => () => {
    if (href) window.location.href = href;
  };
  return (
    <>
      <link rel="stylesheet" href="/stylesheets/ego.css" />
      <link rel="shortcut icon" href="/favico/favicone.ico" />
      <title>wired.ego.neocities</title>

      <audio autoPlay loop>
        <source src="/Hypermedia/Ego/egobg.mp3" />
      </audio>

      <div className="linkcol" id="col1">
        {ROW1.map((l) => (
          <div
            key={l.num}
            onClick={l.disabled ? undefined : goto(l.href)}
            className="layerlink"
          >
            <p>
              {l.num}:<br />
              &nbsp;&nbsp;{l.label}&nbsp;&nbsp;
            </p>
          </div>
        ))}
      </div>
      <div className="linkcol" id="col2">
        {ROW2.map((l) => {
          const current = l.href === "/Layer/Ego";
          return (
            <div
              key={l.num}
              onClick={current ? undefined : goto(l.href)}
              className={current ? "layerlink0" : "layerlink"}
            >
              <p>
                {l.num}:<br />
                &nbsp;&nbsp;{l.label}&nbsp;&nbsp;
              </p>
            </div>
          );
        })}
        <div onClick={goto("/")} id="col2return">
          <p>
            RETURN
            <br />
            TO INDEX
          </p>
        </div>
      </div>

      <div className="leftandright" id="bodyleft" />
      <div className="leftandright" id="bodyright" />

      <div id="main">
        <div id="header">
          <h1>Layer 13: Ego</h1>
        </div>
        <div id="primary">
          <main>
            There is a part of me I cannot control.
            <br />
            An ill wind that chills my words and twists my actions. A shadow
            that haunts my steps and darkens my thoughts.
            <br />
            It is as a beast; a feral hungering shape trapped with me in the
            wrought iron cage of my mind.
            <br />
            <br />
            Ego is equal parts malice and temptation. <br />
            She is as hot as fire and cold as ice. Sometimes, I can&apos;t tell
            her apart from the one I love.
            <br />
            It subjects me to pain and pleasure indivisible, like demons of
            limbo; The only function is misdirection.
            <br />
            What greater fear is there than that of self? It is a constant vigil
            for the seen and the unseen.
            <br />
            Even when it strikes, who can tell where fault lies? It is a trial
            where the defence is the prosecution, the judge and the executioner.
            <br />
            I cannot even begin to ask; &quot;Who am I?&quot; without first
            acknowledging who I am not.
            <br />
            <div style={{ position: "relative" }}>
              <img
                style={{
                  position: "absolute",
                  right: "-175px",
                  bottom: "-125px",
                  width: "200px",
                  height: "175px",
                }}
                alt="Lavender"
                src="/img/lavender4.png"
              />
            </div>
          </main>
        </div>

        <div id="contact">
          <h2>
            Wired Address:{" "}
            <span className="detail">(19.98.7.7.25.1.5)</span>
          </h2>
          <h2>
            Internet Relay Chat:{" "}
            <span className="detail">Xoro@Rizon</span>
          </h2>
          <h2>
            e-mail:{" "}
            <span className="detail">LainIsMaiWaifu@yahoo.co.jp</span>
          </h2>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          margin: "0.2%",
        }}
      >
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
