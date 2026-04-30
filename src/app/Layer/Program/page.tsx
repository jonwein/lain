"use client";

import Script from "next/script";
import LayerNav from "@/components/LayerNav";

export default function ProgramPage() {
  return (
    <>
      <link rel="stylesheet" href="/stylesheets/program.css" />
      <link rel="shortcut icon" href="/favico/faviconpr.ico" />
      <title>wired.program.neocities</title>

      <div className="bg">
        <audio autoPlay loop>
          <source src="/Hypermedia/Program/programbg.mp3" />
        </audio>

        <div
          id="vid"
          style={{
            backgroundColor: "rgba(255,0,0,0.5)",
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 999,
          }}
        />

        <div id="maincontainer">
          <div id="under">
            <h1
              style={{
                fontFamily: "meninblue",
                textAlign: "left",
                color: "cyan",
                backgroundColor: "black",
                borderStyle: "inset",
                borderWidth: "5px",
                marginTop: "2%",
                marginBottom: 0,
                padding: "10px",
                borderColor: "white",
              }}
            >
              LAYER 00: PROGRAM
              <img
                style={{
                  display: "inline-block",
                  float: "right",
                  right: 0,
                  width: "36px",
                  height: "30px",
                }}
                src="/img/ShrunkenCoplandOSIcon.png"
                alt=""
              />
            </h1>

            <LayerNav />

            <div id="main">
              <h2
                id="return"
                onClick={() => (window.location.href = "/")}
                style={{ cursor: "pointer" }}
              >
                RETURN TO INDEX
              </h2>

              <div>
                <h2
                  style={{
                    fontFamily: "chintzy",
                    textAlign: "left",
                    color: "black",
                    borderStyle: "solid",
                    borderColor: "white",
                    backgroundColor: "white",
                    borderWidth: "5px",
                    marginTop: "1%",
                    borderBottom: 0,
                    padding: "5px",
                    fontSize: "2em",
                    marginBottom: 0,
                    minHeight: "30px",
                  }}
                >
                  PROGRAM:
                  <img
                    alt="Diary B"
                    src="/img/_icon1.png"
                    style={{
                      float: "right",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.mediafire.com/view/3u7qeer91t49c0u/Lain%27s%20Diary%20B.pdf"
                      )
                    }
                  />
                  <img
                    alt="Diary A"
                    src="/img/_icon0.png"
                    style={{
                      float: "right",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.mediafire.com/view/7zh8qc43u97jy71/Lain%27s_Diary.pdf"
                      )
                    }
                  />
                </h2>
              </div>

              <div
                style={{
                  position: "relative",
                  fontFamily: "monospace",
                  lineHeight: "1.2em",
                  textShadow: "4px 4px #003333",
                  backgroundColor: "black",
                  borderStyle: "solid",
                  borderColor: "white",
                  borderWidth: "5px",
                  padding: "2%",
                  paddingTop: 0,
                  color: "cyan",
                  fontSize: "medium",
                  marginBottom: "2%",
                }}
              >
                <br />
                <img
                  id="cube"
                  alt="cube"
                  draggable={false}
                  src="/img/voice_cube.gif"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    marginRight: "10px",
                    marginTop: "10px",
                  }}
                />

                <p id="eulogy">
                  &nbsp;&nbsp;Print .../Lain/Diary/Eulogy_A.txt<span></span>
                </p>
                <br />
                <p>&gt; Her name was Lain Iwakura. She was the first of only.</p>
                <br />
                <p>&gt; When was it? It&apos;s hard to say. 1998? 2001? 2015? It doesn&apos;t matter now. We&apos;re all stuck in the Present Day, the Present Time.</p>
                <p>&gt; A girl came, seemingly from nowhere. We, as Knights found her. First on The Wired and again in the streets of Tokyo.</p>
                <p>&gt; Lain was a quiet girl. Born to a cold mother and an absent father she was drawn to loneliness and later, insanity.</p>
                <p>&gt; Lain&apos;s father turned out to be a very useful tool in maintaining her interest with NAVI&apos;s and The Wired.</p>
                <p>&gt; She was told to write a diary. This diary became a log for her descent into madness and an insight into the pain humans can inflict upon each-other.</p>
                <p>&gt; Alone with her thoughts Lain reached into The Wired to find answers and companionship.</p>
                <p>&gt; What she found, well... She found us. First through Usagi and later visited by Eiri himself.</p>
                <p>&gt; We enjoyed every moment our little Lain would give us. Voyuers and hackers flocked to watch footage and collect the entries.</p>
                <p>&gt; Far from harmless, we played with the Devil. We sent her our collections of filth and depravity.</p>
                <p>&gt; We slipped her deeper into the darkness. What suprised us was that she fought back.</p>
                <p>&gt; Lain was quite the fast learner. Within weeks we taught her how to use The Wired, how to use our scripts and bots.</p>
                <p>&gt; Some of us were getting excited. What a fun toy. Her potential was limitless.</p>
                <p>&gt; You know dear reader, The Wired is so much more than a network. Our messiah; Eiri can modify and erase reality itself.</p>
                <p>&gt; When he orchestrated important people into Lain&apos;s memories; Tomo, Misato and aliented Lain further we were in awe.</p>
                <p>&gt; Anything he said would end up in the entries. The Knights worshipped his power.</p>
                <br />
                END OF Eulogy_A.txt
                <br />
                <p>Eulogy_B.txt...Upload Complete.</p>
                <br />
                <p id="eulogy">
                  &nbsp;&nbsp;Print .../Lain/Diary/Eulogy_B.txt<span></span>
                </p>
                <br />
                <p>&gt; Eiri&apos;s new program had run it&apos;s course, she was completely out of control.</p>
                <p>&gt; The software implanted false memories, paranoia, psychotic-tendency... Anything we desired.</p>
                <p>&gt; Orchestrated events allowed these functions to breed in isolation. Separating her parents was <i>too easy.</i></p>
                <p>&gt; By the time Lain started noticing the changes it was too late.</p>
                <p>&gt; The real test of effect was a homicide, the murder of Usagi-san. There were many more. But Lain would never know.</p>
                <p>&gt; We implanted a puppet. Lain thought of it as an avatar. A fantasy of hers. It was really just a tool to enforce our control.</p>
                <p>&gt; Lain&apos;s curiosity made for a close call, she cracked Touko&apos;s server. Tachibana labs could have been implicated.</p>
                <p>&gt; But The Knights are ever vigilant and we stopped her before she got too close. It was decided that she would need to be kept occupied.</p>
                <p>&gt; So we started slowly deleting the memories of her father. She reacted in the most interesting way. She tried to recreate him.</p>
                <p>&gt; At first her AI was just a simple chatbot. Later on it would speak and see. This &quot;Progenitis&quot; was very impressive.</p>
                <p>&gt; Lain contacted a Knight chapter in MIT about it. We had to see how far she could take it, we gave her the Protocol 7 Accelerator.</p>
                <p>&gt; Not only was she infected, but so was the Accelerator. Her creation would only evolve as we saw fit.</p>
                <p>&gt; Though we had deleted Lain from the memories of her old acquaintances we tested her reaction with an unsolicited mail.</p>
                <p>&gt; It seemed she no longer desired any human contact. We recognised this later as a sign of waning control.</p>
                <p>&gt; Despite our programming she went to see Touko. We had prepared for the eventuality that she would download her data.</p>
                <p>&gt; We needed to re-establish control and patch the vulnerability that allowed her to do this.</p>
                <p>&gt; We sent more unsolicited mail, But she didn&apos;t respond to our puppet accounts of Usagi or Misato.</p>
                <p>&gt; Fearing other rogue elements we dispatched of her mother. We then flooded the program with negative emotional data.</p>
                <p>&gt; Lain, ever full of suprises created a copy of herself. Imbued with the Protocol 7 Accelerator it flooded the net.</p>
                <p>&gt; We sent out deletion bots but couldn&apos;t be sure it was all deleted...</p>
                <p>&gt; It came as a complete shock when she destroyed Progenitis and disappeared.</p>
                <p>&gt; It was decided that we would merely monitor her. She became too dangerous for Eiri.</p>
                <p>&gt; She started reacting to the programming again a year later. We had her delete her backup and enacted the final scenario.</p>
                <p>&gt; We forced the puppet and overpowered her mind. We stole our perfect copy of Lain. Her Ego.</p>
                <p>
                  &gt; and then...
                  <span
                    id="lainicide"
                    style={{
                      color: "red",
                      textShadow: "4px 4px #330000",
                      cursor: "pointer",
                    }}
                  >
                    {" "}We terminated her.
                  </span>
                </p>
                <br />
                END OF Eulogy_B.txt
                <p>...END OF ARCHIVE.</p>
              </div>
            </div>

            <div style={{ position: "fixed", bottom: 0, right: "5px" }}>
              <a href="//www.tachibanalabs.net">
                <img
                  draggable={false}
                  src="/img/powernavi-badge.jpg"
                  title="Copland OS is a trademarked product of Tachibana Labs"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"
        strategy="afterInteractive"
      />
      <Script src="/js/program.js" strategy="afterInteractive" />
    </>
  );
}
