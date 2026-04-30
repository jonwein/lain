"use client";

import Script from "next/script";
import LayerNav from "@/components/LayerNav";

export default function DistortionPage() {
  return (
    <>
      <link rel="stylesheet" href="/stylesheets/distortion.css" />
      <link rel="shortcut icon" href="/favico/Lain-Knights.ico" />
      <title>wired.distortion.neocities</title>

      <video autoPlay id="bg-video" loop>
        <source
          src="/Hypermedia/Distortion/Nepka_-_L_in.mp4"
          type="video/mp4"
        />
        <source
          src="/Hypermedia/Distortion/Nepka_-_L_in.webm"
          type="video/webm"
        />
        <source
          src="/Hypermedia/Distortion/Nepka_-_L_in.ogv"
          type="video/ogv"
        />
      </video>

      <LayerNav />

      <div style={{ position: "absolute", right: "260px", marginTop: "-1px" }}>
        <p
          className="tab"
          style={{
            position: "absolute",
            backgroundColor: "black",
            borderStyle: "solid",
            borderWidth: "5px",
            borderColor: "#313131",
            borderTopWidth: 0,
            borderBottomWidth: 0,
            padding: "2px",
            height: "1.2em",
            whiteSpace: "nowrap",
            fontFamily: "LoveLetter",
            color: "#FFEF00",
            textAlign: "center",
            fontSize: "0.9em",
            cursor: "pointer",
          }}
        >
          NAVIgate
        </p>
        <p
          onClick={() => (window.location.href = "/")}
          style={{
            left: "105px",
            position: "absolute",
            backgroundColor: "black",
            borderStyle: "solid",
            borderWidth: "5px",
            borderColor: "#313131",
            borderTopWidth: 0,
            borderBottomWidth: 0,
            padding: "2px",
            height: "1.2em",
            whiteSpace: "nowrap",
            fontFamily: "LoveLetter",
            color: "#FFEF00",
            textAlign: "center",
            fontSize: "0.9em",
            cursor: "pointer",
          }}
        >
          RETURN TO INDEX
        </p>
      </div>

      <div
        id="follower"
        style={{
          position: "fixed",
          width: "30%",
          borderStyle: "solid",
          borderWidth: "5px",
          borderColor: "red",
          borderRadius: "50px",
          borderTopLeftRadius: 0,
          fontFamily: "LoveLetter",
          color: "white",
          backgroundColor: "#1A1A1A",
          padding: "5px",
          zIndex: 999,
        }}
      >
        <div
          id="followin"
          style={{
            margin: 0,
            backgroundColor: "#1A1A1A",
            padding: "5px",
            borderStyle: "solid",
            borderWidth: "5px",
            borderColor: "black",
            borderRadius: "50px",
            borderTopLeftRadius: 0,
          }}
        >
          <h1
            style={{
              backgroundColor: "black",
              borderStyle: "solid",
              borderWidth: "5px",
              borderColor: "#1A1A1A",
              borderRadius: "50px",
              borderTopLeftRadius: 0,
              padding: "5px",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            DiSt0rTeD...
          </h1>
          <div
            style={{
              backgroundColor: "black",
              borderStyle: "solid",
              borderWidth: "5px",
              borderColor: "#1A1A1A",
              padding: "5px",
              borderRadius: "50px",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            <div style={{ padding: "10px", paddingBottom: "20px" }}>
              <p className="word_who"><span className="topic">Who</span> am I?</p>
              <p className="word_what"><span className="topic">What</span> happened...</p>
              <p className="word_where"><span className="topic">Where</span> am I...</p>
              <p className="word_when"><span className="topic">When</span> was it...</p>
              <p className="word_why"><span className="topic">Why</span> is this...</p>
              <p className="word_how"><span className="topic">How</span> did...</p>
              <p className="word_if"><span className="topic">If</span> only I could put myself together.</p>
            </div>
          </div>
        </div>
      </div>

      {(["who", "what", "when", "where", "why", "how", "if"] as const).map((w) => (
        <p key={w} className={`clickme word_${w}`}>
          {w[0].toUpperCase() + w.slice(1)}?
        </p>
      ))}

      <div
        id="end"
        style={{
          borderStyle: "outset",
          borderWidth: "15px",
          borderColor: "#1A1A1A",
          backgroundColor: "#1A1A1A",
          padding: "1%",
        }}
      >
        <div>
          <div
            style={{
              borderStyle: "inset",
              borderWidth: "5px",
              borderColor: "#1A1A1A",
              backgroundColor: "black",
              color: "#FFEF00",
              fontFamily: "LoveLetter",
            }}
          >
            <img
              alt="~/L@1N/"
              style={{ height: "100%", width: "100%" }}
              src="/img/1391945545.gif"
            />
          </div>
          <div
            style={{
              borderStyle: "inset",
              borderWidth: "5px",
              borderColor: "#1A1A1A",
              backgroundColor: "black",
              color: "#FFEF00",
              fontFamily: "LoveLetter",
              textAlign: "center",
              marginTop: "2%",
              padding: "5px",
            }}
          >
            <p>I don&apos;t feel so... &apos;different&apos; anymore.</p>
            <p>I am... Lain. My name is Lain.</p>
            <p>It all happened so fast. So long ago.</p>
            <p>I had no where else to go you see, even though I didn&apos;t really leave...</p>
            <p>It&apos;s not that hard to understand.</p>
            <p>But once I metaphorized into The Wired there were so many challenges.</p>
            <p>All the people I used to be didn&apos;t exist anymore and there was just Lain.</p>
            <p>I went looking for what was left of them. Here- No... There, in The Wired!</p>
            <p>Where I am now, it&apos;s not that place.</p>
            <p>If I only knew who you are.</p>
            <br />
            <p>I want to thank you. I can&apos;t tell you how long I&apos;ve been... scattered.</p>
            <p>But maybe it&apos;s not too late. Whoever you are, I want you to tell them.</p>
            <p>All the ones I love, all the ones that love me.</p>
            <p>Lain is real. I meant what I said that day and since we&apos;re always connected...</p>
            <p>
              It&apos;s only a matter of time before we&apos;re{" "}
              <span id="together" onClick={() => (window.location.href = "/not_found")} style={{ cursor: "pointer" }}>
                together
              </span>{" "}
              again!
            </p>
          </div>
        </div>
      </div>

      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"
        strategy="afterInteractive"
      />
      <Script src="/js/distortion.js" strategy="afterInteractive" />
    </>
  );
}
