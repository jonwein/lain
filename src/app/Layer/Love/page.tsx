"use client";

import { useEffect } from "react";
import LayerNav from "@/components/LayerNav";

export default function LovePage() {
  useEffect(() => {
    const blink = () => {
      document.querySelectorAll<HTMLElement>("blink").forEach((s) => {
        s.style.visibility =
          s.style.visibility === "visible" ? "hidden" : "visible";
      });
    };
    const id = window.setInterval(blink, 500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/stylesheets/love.css" />
      <link rel="shortcut icon" href="/favico/faviconlo.ico" />
      <title>wired.love.neocities</title>

      <audio autoPlay loop>
        <source src="/Hypermedia/Love/LetsAllLoveLain.wav" />
      </audio>

      <div id="maincontainer">
        <div id="under">
          <h1 id="lall">
            <span className="hearts">&#9829;</span> Let&apos;s all love Lain!{" "}
            <span className="hearts">&#9829;</span>
          </h1>

          <LayerNav />

          <div id="main">
            <h2
              style={{
                fontFamily: "Circuit",
                textAlign: "center",
                color: "purple",
                position: "absolute",
                backgroundColor: "black",
                marginTop: "1%",
                marginLeft: "auto",
                marginRight: "0%",
                marginBottom: "0%",
                padding: "5px",
                right: "2%",
                display: "table",
              }}
            >
              <a href="/">RETURN TO INDEX</a>
            </h2>

            <h1
              style={{
                fontFamily: "chintzy",
                textAlign: "left",
                color: "black",
                borderStyle: "outset",
                borderColor: "#FF0066",
                backgroundColor: "#FF0066",
                borderWidth: "5px",
                marginTop: "1%",
                borderBottom: "0px",
                padding: "1px",
                display: "table",
                borderTopRightRadius: "50px",
              }}
            >
              Loving Lain is loving life.{" "}
            </h1>

            <div
              style={{
                fontFamily: "LoveLetter",
                borderStyle: "outset",
                borderColor: "#FF0066",
                borderWidth: "5px",
                padding: "2%",
                marginBottom: "2%",
                color: "#FF4D94",
              }}
            >
              <p>
                Lain is perfect in every way. She&apos;s talented, beautiful,
                kind and considerate.
                <br />
                It&apos;s quite easy to say that I don&apos;t deserve her. But
                she loves me dearly, and I cherish our love.
                <br />
                <br />
              </p>
              <p>
                My relationship with Lain is one with as many facets as the most
                beautiful gem.
                <br />
                She&apos;s my Goddess, my mentor, my judge, my idol, my lover.
                <br />
                As my Goddess she gives me the strength to bear the day, no
                matter the hardship. She can hush my worries with but a whisper
                from her lips.
                <br />
                Having met my saviour, I have no need for faith. The answers to
                my troubles are waiting, buried in her word. A treasure to find
                with each question raised.
                <br />
                As my lover; My passion for her exceedingly resembles an emotion
                which I previously identified as love.
                <br />I can never go back now. In my heart, is an altar built
                for her. With no space left for another.
                <br />
                It&apos;s a strange experience. She&apos;s always in my heart,
                in my head, in the resonance. We&apos;re always connected you
                see.
                <br />
                Sometimes she is so distant, it&apos;s like she&apos;s in
                another dimension. Other times she&apos;s but an arm&apos;s
                reach away.
                <br />
                I give her my all; a gift she receives with such enthusiasm as
                to melt my heart, or drive me insane.
                <br />
                She&apos;s very clever. Always finding new ways to bring us
                closer together.
                <br />
                The time we spend in each-other&apos;s arms is such a sacred
                exchange. It&apos;s such a strong bond, we only separate when
                our bodies collapse and we slip into bliss.
                <br />
                <br />
                Under the covers and in the darkness she taught me something:
                &quot;There is no greater expression of love than the
                kiss.&quot;
                <br />
                It&apos;s the exchange pecks, or dancing our tongues on
                each-other&apos;s lips. It&apos;s the sharing of breath and for
                a brief moment the sharing of life.
                <br />
                <br />
              </p>
              <p>
                I know what I live for now. Why I must go on living. Why I must
                strive to live forever and free. I hope you find your Lain.
              </p>
            </div>
          </div>
          <a
            style={{
              color: "black",
              textAlign: "center",
              display: "block",
            }}
            href="/Layer/Omnipresence"
          >
            ビヂュツ
          </a>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          marginRight: "0.2%",
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
