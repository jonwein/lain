"use client";

const ALL_LAYERS = [
  { num: "PRVW", label: "Nightmare", href: "/Layer/Nightmare", ico: "faviconn.ico" },
  { num: "01", label: "Weird", href: "/Layer/Wierd", ico: "faviconw.ico" },
  { num: "02", label: "Girls", href: "/Layer/Girls", ico: "favicong2.ico" },
  { num: "03", label: "Psyche", href: "/Layer/Psyche", ico: "faviconps.ico" },
  { num: "04", label: "Religion", href: "/Layer/Religion", ico: "Lain-Knights.ico" },
  { num: "05", label: "Distortion", href: "/Layer/Distortion", ico: "Lain-Knights.ico" },
  { num: "06", label: "Kids", href: "/", ico: "Lain-Knights.ico" },
  { num: "07", label: "Society", href: "/Layer/Society", ico: "Lain-Knights.ico" },
  { num: "08", label: "Rumors", href: "/Layer/Rumors", ico: "Lain-Knights.ico" },
  { num: "09", label: "Protocol", href: "/Layer/Protocol", ico: "faviconp.ico" },
  { num: "10", label: "Love", href: "/Layer/Love", ico: "faviconlo.ico" },
  { num: "11", label: "Infornography", href: "/Layer/Infornography", ico: "faviconi.ico" },
  { num: "12", label: "Landscape", href: "/Layer/Landscape", ico: "faviconl.ico" },
  { num: "13", label: "Ego", href: "/Layer/Ego", ico: "favicone.ico" },
  { num: "00", label: "Program", href: "/Layer/Program", ico: "faviconpr.ico" },
];

const ROW1 = ALL_LAYERS.slice(0, 8);
const ROW2 = ALL_LAYERS.slice(8);

export default function SocietyPage() {
  const goto = (href: string) => () => {
    if (href) window.location.href = href;
  };
  const renderCell = (l: (typeof ALL_LAYERS)[number]) => {
    const current = l.href === "/Layer/Society";
    return (
      <div
        key={l.num}
        style={{
          background: `URL('/favico/${l.ico}') no-repeat left`,
          backgroundSize: "26px 26px",
        }}
        onClick={current ? undefined : goto(l.href)}
        className={current ? "layerlink0" : "layerlink"}
      >
        <p>
          {l.num}:<br />
          &nbsp;&nbsp;{l.label}&nbsp;&nbsp;
        </p>
      </div>
    );
  };

  return (
    <>
      <link rel="stylesheet" href="/stylesheets/society.css" />
      <link rel="shortcut icon" href="/favico/Lain-Knights.ico" />
      <title>wired.society.neocities</title>

      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "-75px",
          zIndex: -9,
          pointerEvents: "none",
        }}
      >
        <img alt="CoplandOS 95" draggable={false} src="/img/coplandblock.png" />
      </div>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 9,
          pointerEvents: "none",
        }}
      >
        <img
          alt="spiderweb"
          draggable={false}
          src="/img/spider-311050__180.png"
        />
      </div>

      <div id="linkcontainer">
        <div
          style={{
            position: "absolute",
            top: "-185px",
            left: 0,
            zIndex: 9,
            transform: "rotate(180deg)",
            pointerEvents: "none",
          }}
        >
          <img
            alt="spiderweb"
            draggable={false}
            src="/img/spider-311050__180.png"
          />
        </div>
        <div style={{ width: "100%" }}>
          <div className="linkrow">{ROW1.map(renderCell)}</div>
          <div className="linkrow">
            {ROW2.map(renderCell)}
            <div
              style={{
                display: "flex",
                flex: "1 1",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={goto("/")}
              className="layerlink"
            >
              <p style={{ textAlign: "center" }}> Return to Index </p>
            </div>
          </div>
        </div>
      </div>

      <div id="under">
        <div className="sborder" style={{ marginBottom: "1%" }}>
          <h1>Layer 07: Society</h1>
        </div>

        <div className="sborderd">
          <div className="main">
            <h3>The Wired is; now, then and what is yet to be.</h3>
            <div style={{ backgroundColor: "white" }}>
              <div className="rule">
                <div id="feed">
                  <article style={{ display: "flex", margin: "1%" }}>
                    <div className="main">
                      <h3>Changes.exe</h3>
                      <div
                        style={{
                          display: "flex",
                          background: "white",
                          border: "2px #bfb8bf inset",
                        }}
                      >
                        <img
                          style={{ position: "relative" }}
                          alt=""
                          src="/img/vw.png"
                        />
                        <p style={{ padding: "10px" }}>
                          This page had become irrelevant in the wake of some
                          changes to The Wired. It&apos;s purpose must also
                          change, what it will appear to be shall develop in the
                          near future.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
