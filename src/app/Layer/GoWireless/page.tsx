"use client";

import { useEffect, useState } from "react";

const STYLES = `
  @font-face {
    font-family: 'LoveLetter';
    src: local('LoveLetter'), url('/fonts/LoveLetterWeb.ttf#font') format('truetype');
  }
  .gw-wrap *, .gw-wrap {
    font-family: monospace;
    margin: 0; padding: 0; overflow: hidden;
  }
  .gw-wrap { background-color: black; cursor: wait; user-select: none; -webkit-user-select: none; }
  #hide_all {
    background: rgb(246,240,163);
    position: fixed; left: 0; right: 0; top: 0;
    height: 37px; z-index: 1;
  }
  #hide_all:hover { cursor: auto; }
  @keyframes gwpulse {
    0%   { opacity: 0.20; }
    10%  { opacity: 0.30; }
    20%  { opacity: 0.40; }
    30%  { opacity: 0.50; }
    40%  { opacity: 0.60; }
    50%  { opacity: 0.70; }
    60%  { opacity: 0.80; }
    70%  { opacity: 0.90; }
    80%, 100% { opacity: 1.00; }
  }
  #bg.back {
    background-image: url('/img/gwbg.png');
    background-repeat: no-repeat;
    background-position: 60% -10%;
    animation-name: gwpulse;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
  }
`;

export default function GoWirelessPage() {
  const [pluginVisible, setPluginVisible] = useState(true);

  useEffect(() => {
    const ageGet = () => {
      alert(
        "Attempting to access the Wired without a NAVI may result in rejection and permanent brain damage."
      );
      let age = window.prompt(
        "You should be atleast 18 years of age to proceeed. Please enter your age to continue."
      );
      while (age !== null && isNaN(Number(age))) {
        alert("Input is not a number.");
        age = window.prompt(
          "You should be atleast 18 years of age to proceeed. Please enter your age to continue."
        );
      }
      if (age === null || Number(age) <= 17) {
        alert("ACCESS DENIED");
        window.location.href = "/";
      }
    };
    ageGet();
  }, []);

  return (
    <div className="gw-wrap">
      <link rel="shortcut icon" href="/favico/attention.png" />
      <title>PRESENT DAY, PRESENT TIME.</title>
      <style>{STYLES}</style>

      <audio autoPlay loop>
        <source
          src="/Hypermedia/GoWireless/08-arpanet-devoid_of_wires.m4a"
          type="audio/mpeg"
        />
      </audio>

      <a href="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            backgroundColor: "black",
            borderStyle: "solid",
            borderWidth: "5px",
            color: "red",
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            right: 0,
            padding: "5px",
            zIndex: 99,
            cursor: "pointer",
          }}
        >
          <h1>RETURN</h1>
        </div>
      </a>

      {pluginVisible && (
        <div id="hide_all">
          <a href="http://www.mebious.co.uk">
            <img
              alt="plugin check"
              draggable={false}
              src="/img/lol1.png"
              style={{ position: "fixed", top: 0, left: 0, zIndex: 998 }}
            />
          </a>
          <img
            id="show_image"
            alt="plugin check"
            draggable={false}
            src="/img/lol2.png"
            onClick={() => setPluginVisible(false)}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              zIndex: 999,
              cursor: "pointer",
            }}
          />
        </div>
      )}

      <div
        id="bg"
        className="back"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: -5,
          margin: "auto",
        }}
      />

      <div
        id="container"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    </div>
  );
}
