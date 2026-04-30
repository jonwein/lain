"use client";

import { useEffect, useState } from "react";
import MainPanel from "@/components/MainPanel";
import AdminPanel from "@/components/AdminPanel";

export default function Home() {
  const [tab, setTab] = useState<"main" | "admin">("main");

  useEffect(() => {
    const handler = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/stylesheets/mebious.css" />
      <audio autoPlay loop>
        <source src="/audio/boon.mp3" type="audio/mpeg" />
      </audio>

      <div style={{ position: "relative" }}>
        <p className="contact">Contact: LainIsMaiWaifu@yahoo.co.jp</p>
        <img alt="Glider" id="glider" src="/img/glidergreen.png" />
      </div>

      <div style={{ position: "relative" }}>
        <div className="tabs">
          <p
            className={`taba maintab ${tab === "main" ? "active" : ""}`}
            onMouseDown={() => setTab("main")}
          >
            Main
          </p>
          <p
            className={`taba admintab ${tab === "admin" ? "active" : ""}`}
            onMouseDown={() => setTab("admin")}
          >
            Admin
          </p>
        </div>

        <div className="tab-content">
          {tab === "main" ? <MainPanel /> : <AdminPanel />}
        </div>
      </div>

      <div className="counter-fixed">
        <img
          alt="Hit counter"
          draggable={false}
          src="http://cc.amazingcounters.com/counter.php?i=3141905&c=9426028"
        />
      </div>

      <div className="navi-fixed">
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
