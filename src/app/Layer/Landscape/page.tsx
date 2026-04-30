"use client";

import { useState } from "react";

const LAYERS: Array<{ label: string; href: string }> = [
  { label: "PRVW:<br/>Nightmare", href: "/Layer/Nightmare" },
  { label: "Layer 01:<br/>Wierd", href: "/Layer/Wierd" },
  { label: "Layer 02:<br/>Girls", href: "/Layer/Girls" },
  { label: "Layer 03:<br/>Psyche", href: "/Layer/Psyche" },
  { label: "Layer 04:<br/>Religion", href: "/Layer/Religion" },
  { label: "Layer 05:<br/>Distortion", href: "/Layer/Distortion" },
  { label: "Layer 06:<br/>Kids", href: "" },
  { label: "Layer 07:<br/>Society", href: "/Layer/Society" },
  { label: "Layer 08:<br/>Rumors", href: "/Layer/Rumors" },
  { label: "Layer 09:<br/>Protocol", href: "/Layer/Protocol" },
  { label: "Layer 10:<br/>Love", href: "/Layer/Love" },
  { label: "Layer 11:<br/>Infornography", href: "/Layer/Infornography" },
  { label: "Layer 12:<br/>Landscape", href: "/Layer/Landscape" },
  { label: "Layer 13:<br/>Ego", href: "/Layer/Ego" },
  { label: "Layer 00:<br/>Program", href: "/Layer/Program" },
];

export default function LandscapePage() {
  const [i2, setI2] = useState(1);
  const [hidden, setHidden] = useState(false);

  const port = LAYERS[i2];
  const starboard = LAYERS[Math.max(0, i2 - 1)];

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (href) window.location.href = href;
  };

  return (
    <>
      <link rel="stylesheet" href="/stylesheets/landscape.css" />
      <link rel="shortcut icon" href="/favico/faviconl.ico" />
      <title>wired.landscape.neocities</title>

      <audio autoPlay loop>
        <source src="/Hypermedia/Landscape/60455_27178-lq.mp3" />
      </audio>

      <div id="wrap" onClick={() => setHidden(false)}>
        <video id="bg-video" autoPlay loop muted playsInline>
          <source src="/Hypermedia/Landscape/Landscape2.mp4" type="video/mp4" />
          <source src="/Hypermedia/Landscape/Landscape2.webm" type="video/webm" />
          <source src="/Hypermedia/Landscape/Landscape2.ogv" type="video/ogv" />
        </video>
      </div>

      <div
        className="wrapper"
        style={{
          position: "fixed",
          left: "10%",
          bottom: hidden ? "-400px" : "-20px",
          transition: "bottom 2s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-105px",
            top: "-80px",
            backgroundColor: "#333333",
            color: "black",
            width: "115px",
            height: "140px",
            border: "outset 8px #333333",
            borderRadius: "10px",
            zIndex: -10,
            transform: "rotateY(2deg)",
            boxShadow: "-10px -1px 0px #333333",
          }}
        >
          <p className="gp">
            <span style={{ marginLeft: "-3px" }}>10</span>
            <br />9<br />8<br />8<br />7<br />6<br />5<br />4<br />3<br />2
            <br />1
          </p>
          <div className="gbars" style={{ left: "15px" }}>
            <div
              style={{
                position: "absolute",
                bottom: "0%",
                height: "50%",
                width: "3px",
                backgroundColor: "cyan",
                zIndex: 1,
              }}
            />
          </div>
          <div className="gbars" style={{ left: "25px" }}>
            <div
              style={{
                position: "absolute",
                bottom: "0%",
                height: "70%",
                width: "3px",
                backgroundColor: "cyan",
                zIndex: 1,
              }}
            />
          </div>
          <div className="greds" style={{ top: "2px" }} />
          <div className="greds" style={{ top: "12px" }} />
          <div
            className="greds"
            style={{ top: "22px", backgroundColor: "red" }}
          />
          <div
            className="greds"
            style={{ top: "32px", backgroundColor: "red" }}
          />
        </div>

        <div
          className="right"
          style={{
            position: "absolute",
            left: "207px",
            top: "15px",
            backgroundColor: "blue",
            color: "white",
            width: "185px",
            height: "150px",
            border: "inset 5px red",
            borderRadius: "10px",
            backgroundImage: "URL('/img/lsl1.png')",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href={port.href || "#"}
            id="port"
            onClick={go(port.href)}
            style={{ color: "white", margin: "2px", textAlign: "center" }}
            dangerouslySetInnerHTML={{ __html: port.label }}
          />
        </div>

        <div
          className="handi"
          style={{
            width: "200px",
            height: "450px",
            padding: "2px",
            backgroundColor: "red",
            border: "outset 10px red",
            borderTopRightRadius: "25px",
            borderTopLeftRadius: "25px",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              color: "white",
              marginTop: "5px",
              width: "185px",
              height: "150px",
              border: "inset 5px red",
              borderRadius: "10px",
              backgroundImage: "URL('/img/lsl1.png')",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href={starboard.href || "#"}
              id="starboard"
              onClick={go(starboard.href)}
              style={{ color: "white", margin: "2px", textAlign: "center" }}
              dangerouslySetInnerHTML={{ __html: starboard.label }}
            />
          </div>

          <div
            style={{
              marginLeft: "9px",
              display: "flex",
              height: "75px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              id="leftb"
              className="butt"
              type="button"
              value="◄"
              onClick={() => setI2((v) => Math.max(1, v - 1))}
            />
            <div
              style={{
                order: 2,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                onClick={() => (window.location.href = "/")}
                id="upb"
                className="butt"
                type="button"
                value="Return ▲ "
              />
              <input
                id="downb"
                className="butt"
                type="button"
                value="Hide ▼"
                onClick={() => setHidden(true)}
              />
            </div>
            <input
              id="rightb"
              className="butt"
              type="button"
              value="►"
              onClick={() => setI2((v) => Math.min(LAYERS.length - 1, v + 1))}
            />
          </div>
        </div>
      </div>
    </>
  );
}
