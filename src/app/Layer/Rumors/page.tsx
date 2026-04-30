"use client";

import { LayerNavColumn } from "@/components/LayerNav";
import { useEffect } from "react";

const LINKS: Array<{ title: string; img: string; url: string }> = [
  { title: "Thought Experiments Lain", img: "/img/telain.png", url: "http://www.cjas.org/~leng/lain.htm" },
  { title: "SEL Wiki", img: "/img/mcom-thumb.png", url: "http://lain.wiki/" },
  { title: "Omnipresence", img: "/img/globe.png", url: "/Layer/Omnipresence" },
  { title: "Ain's Tumblr", img: "/img/ain-thumb.png", url: "http://ain-and-lain.tumblr.com/" },
  { title: "Fauux's Neocity", img: "/img/fauux-thumb.png", url: "http://fauux.neocities.org/" },
  { title: "PSX translation team", img: "/img/psx-thumb.png", url: "http://psx.lain.pl/" },
  { title: "Tachibana Labs", img: "/img/tl-thumb.png", url: "http://tachibanalabs.net/" },
  { title: "YWOT:mebious", img: "/img/ywot-thumb.png", url: "http://www.yourworldoftext.com/mebious" },
  { title: "lain.ru", img: "/img/ru-thumb.png", url: "http://lain.ru/" },
  { title: "lain.xq3", img: "/img/xq3-thumb.png", url: "http://lain.xq3.ru/" },
  { title: "La-incarnation", img: "/img/la-thumb.png", url: "http://www.otherman-records.com/releases/WIRED001" },
  { title: "SUBHUMAN by 3x6", img: "/img/subhuman-thumb.jpg", url: "http://3x6x.com/discography.html" },
  { title: "Lain Dictionary", img: "/img/ld-thumb.png", url: "http://www.geocities.jp/zatugakubeya/lain/dictionary-layer.html" },
  { title: "Angelic Trust", img: "/img/at-thumb.png", url: "http://lain.angelic-trust.net/" },
];

export default function RumorsPage() {
  useEffect(() => {
    const fade = document.getElementById("fade");
    if (!fade) return;
    let opacity = 1;
    const id = window.setInterval(() => {
      opacity -= 0.02;
      fade.style.opacity = String(opacity);
      if (opacity <= 0) {
        fade.style.display = "none";
        window.clearInterval(id);
      }
    }, 30);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/stylesheets/rumors.css" />
      <link rel="shortcut icon" href="/favico/Lain-Knights.ico" />
      <title>wired.rumors.neocities</title>

      <audio autoPlay loop>
        <source src="/Hypermedia/Rumors/05%20-%20selFa.mp3" type="audio/mpeg" />
      </audio>

      <div
        id="fade"
        style={{
          pointerEvents: "none",
          marginLeft: "-300px",
          position: "fixed",
          backgroundColor: "white",
          width: "200%",
          height: "200%",
          zIndex: 999999,
          overflow: "hidden",
        }}
      />

      <LayerNavColumn />

      <div>
        <div
          style={{
            fontFamily: "liquidcrystal",
            position: "fixed",
            textAlign: "center",
            zIndex: 9,
            marginLeft: "165px",
            top: 0,
            right: "20%",
            width: "100%",
            color: "red",
            backgroundColor: "white",
            borderStyle: "outset",
            borderBottomWidth: "10px",
            borderTopStyle: "solid",
            borderColor: "white",
            borderTopWidth: "10px",
          }}
        >
          <p
            id="pass"
            style={{
              fontSize: "2em",
              borderStyle: "inset",
              borderWidth: "5px",
              borderColor: "white",
              backgroundColor: "black",
            }}
          >
            Pass it around...
          </p>
          <div
            style={{
              fontFamily: "LoveLetter",
              position: "fixed",
              textAlign: "center",
              zIndex: 10,
              marginLeft: "165px",
              top: 0,
              right: 0,
              height: "30px",
              width: "25%",
              color: "red",
              backgroundColor: "white",
              borderBottomStyle: "outset",
              borderBottomWidth: "10px",
              borderLeftStyle: "solid",
              borderColor: "white",
              borderLeftWidth: "10px",
            }}
          >
            <h2
              style={{
                borderStyle: "inset",
                borderWidth: "5px",
                borderColor: "white",
                backgroundColor: "black",
              }}
            >
              LAYER 08: Rumors
            </h2>
          </div>
          <div id="return">
            <h2
              style={{
                borderStyle: "inset",
                borderWidth: "5px",
                borderColor: "white",
                backgroundColor: "white",
                borderBottomLeftRadius: "50px",
              }}
              onClick={() => (window.location.href = "/")}
            >
              Return to Index
            </h2>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "100px", paddingBottom: "150px" }}>
        {LINKS.map((l) => (
          <div className="linkbox" key={l.title}>
            <h3>{l.title}</h3>
            <img src={l.img} alt={l.title} />
            <p>
              <a href={l.url}>{l.url.startsWith("/") ? `mebious.neocities.org${l.url}.html` : l.url}</a>
            </p>
          </div>
        ))}
      </div>

      <div style={{ position: "fixed", bottom: 0, right: "5px" }}>
        <a draggable={false} href="http://www.tachibanalabs.net">
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
