"use client";

import LayerNav from "@/components/LayerNav";

export default function WierdPage() {
  return (
    <>
      <link rel="stylesheet" href="/stylesheets/wierd.css" />
      <link rel="shortcut icon" href="/favico/faviconw.ico" />
      <title>wired.wierd.neocities</title>

      <div
        style={{
          overflow: "hidden",
          marginLeft: "-2%",
          marginRight: "-2%",
          marginBottom: "-1%",
        }}
      >
        <audio autoPlay style={{ position: "absolute" }}>
          <source
            src="/Hypermedia/Wierd/%5bdisharmony%5d%28lain%20MAD%20MOVIE%29.mp3"
            type="audio/mpeg"
          />
        </audio>

        <div id="under">
          <LayerNav />

          <div
            style={{
              position: "absolute",
              margin: "0 20%",
              top: "110px",
              left: 0,
              right: 0,
              backgroundColor: "#470047",
              borderStyle: "outset",
              borderWidth: "5px",
              borderColor: "#4700B2",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                color: "red",
                marginTop: "-5px",
                marginBottom: "1%",
                border: "5px inset #4700B2",
                textAlign: "center",
                marginRight: "2%",
                marginLeft: "2%",
              }}
            >
              <h1
                style={{
                  fontFamily: "liquidcrystal",
                  display: "inline-block",
                }}
              >
                You are on the other side of the fence now.
              </h1>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              textAlign: "center",
              right: 0,
              top: "110px",
              display: "block",
              backgroundColor: "#470047",
              borderStyle: "outset",
              borderWidth: "5px",
              borderColor: "#4700B2",
              padding: "2px",
              paddingTop: 0,
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                color: "red",
                padding: "4px",
                marginTop: "-5px",
                marginBottom: "1%",
                border: "5px inset #4700B2",
                borderTop: 0,
              }}
            >
              <h3
                id="return"
                onClick={() => (window.location.href = "/")}
                style={{ cursor: "pointer" }}
              >
                RETURN TO INDEX
              </h3>
            </div>
          </div>
        </div>

        <div id="center">
          <div
            id="centerOuter"
            style={{
              position: "relative",
              margin: "150px auto",
              backgroundColor: "#470047",
              borderStyle: "solid",
              borderWidth: "5px",
              borderColor: "#4700B2",
              height: "395px",
              width: "395px",
              borderRadius: "200px",
              boxShadow: "10px 10px 5px black",
            }}
          >
            <div
              id="centerInner"
              style={{
                backgroundColor: "#101010",
                color: "red",
                height: "365px",
                width: "365px",
                border: "5px solid #4700B2",
                textAlign: "center",
                borderRadius: "100%",
                margin: "auto",
                marginTop: "10px",
              }}
            >
              <pre id="name">{`

 ▓░     ▄███▒    ▄█▒    █▓    ▄█▒
██░    █  ▓▒    ██▒  ███▒   ▓█▒
▓█░    ▀█ ▓▒    ██▓   █ ██▄░▓█▒
▓█░░█  ████▓░   ▓██▒  ▓▌  ██▒█▓░
▓█▓██ ░██░▒██▒  ▄██▒  █▓░  ██▓░
░ ▓░ ░ ▒ ▒ ░▓  ▒ ▒▓▒▒ ▒▒   ░▓
░ ░░░  ░ ▒░ ▒ ░░ ░▒ ▒░░░    ░
░   ░ ░ ▒ ░░ ░░ ░ ░ ░░ ░     ▒

`}</pre>
            </div>
            <div
              id="pillcontainer"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                zIndex: -2,
              }}
            >
              {Array.from({ length: 11 }).map((_, idx) => {
                const id = idx + 1;
                const isFirstTwo = id <= 2;
                const inner = (
                  <div>
                    <div id={id % 2 === 0 ? "blu" : "re"}></div>
                  </div>
                );
                return (
                  <div
                    className="pill"
                    id={isFirstTwo ? `pill1${id}` : `pill${id}`}
                    key={id}
                  >
                    {isFirstTwo ? <div id="shell">{inner}</div> : inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ position: "fixed", bottom: 0, right: "5px" }}>
          <a draggable={false} href="http://www.tachibanalabs.net">
            <img
              alt="CoplandOS badge"
              draggable={false}
              src="/img/dis-badge.png"
              title="Copland OS is a trademarked product of Tachibana Labs"
            />
          </a>
        </div>
      </div>
    </>
  );
}
