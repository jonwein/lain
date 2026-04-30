"use client";

import Script from "next/script";
import LayerNav from "@/components/LayerNav";

export default function NightmarePage() {
  return (
    <>
      <link rel="stylesheet" href="/stylesheets/nightmare.css" />
      <link rel="shortcut icon" href="/favico/faviconn.ico" />
      <title>wired.nightmare.neocities</title>

      <audio autoPlay style={{ position: "absolute" }}>
        <source src="/Hypermedia/Nightmare/Jingle.mp3" type="audio/mpeg" />
      </audio>
      <audio
        id="static"
        autoPlay
        style={{ position: "absolute" }}
        ref={(el) => {
          if (el) el.volume = 0.6;
        }}
      >
        <source
          src="/Hypermedia/Nightmare/PsxGame_01%20-%20Theme%20-%20Acoustic.mp3"
          type="audio/mpeg"
        />
      </audio>

      <LayerNav />

      <div>
        <div
          style={{
            position: "absolute",
            display: "inline-block",
            right: 0,
            borderStyle: "outset",
            borderWidth: "10px",
            borderColor: "gray",
            borderTopWidth: 0,
            backgroundColor: "#363636",
            borderBottomLeftRadius: "50px",
          }}
        >
          <div
            style={{
              borderStyle: "solid",
              borderWidth: "5px",
              borderColor: "#363636",
              margin: "2px",
              background: "black",
              borderTopWidth: 0,
              padding: "2px",
              paddingLeft: "10px",
              borderBottomLeftRadius: "50px",
              fontFamily: "LoveLetter",
              color: "white",
              textAlign: "center",
            }}
          >
            <p
              id="return"
              onClick={() => (window.location.href = "/")}
              style={{ cursor: "pointer" }}
            >
              RETURN TO INDEX
            </p>
          </div>
        </div>

        <div className="tab">
          <div
            style={{
              borderStyle: "solid",
              borderWidth: "5px",
              borderColor: "#363636",
              margin: "2px",
              backgroundColor: "black",
              borderTopWidth: 0,
              padding: "5px",
              fontFamily: "LoveLetter",
              color: "white",
              textAlign: "center",
            }}
          >
            <p>Navigator</p>
          </div>
        </div>
      </div>

      <img
        alt="left"
        id="left"
        className="scissors"
        src="/img/Scissors3.png"
        style={{
          left: 0,
          transform: "rotate(180deg)",
        }}
      />
      <img
        alt="right"
        id="right"
        className="scissors"
        src="/img/Scissors3.png"
        style={{ right: 0 }}
      />

      <div
        id="area"
        style={{
          display: "table",
          backgroundColor: "black",
          borderStyle: "outset",
          borderWidth: "15px",
          margin: "auto",
          marginTop: "2%",
          marginBottom: 0,
          borderColor: "#919191",
          padding: 0,
          position: "relative",
        }}
      >
        <img
          alt="bike"
          draggable={false}
          id="bike"
          src="/img/bike.png"
          style={{
            position: "absolute",
            top: "65%",
            left: "50%",
            maxWidth: "300px",
            maxHeight: "300px",
            marginTop: "-150px",
            marginLeft: "-150px",
            zIndex: 10,
          }}
        />
        <img
          alt=""
          draggable={false}
          id="stage"
          style={{ verticalAlign: "top" }}
        />
      </div>

      <img id="bell" src="/img/bell4.png" alt="bell" />

      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"
        strategy="afterInteractive"
      />
      <Script src="/js/nightmare.js" strategy="afterInteractive" />
    </>
  );
}
