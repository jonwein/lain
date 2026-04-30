"use client";

import { useEffect } from "react";

const MATRIX_STYLES = `
  body { margin:0; border:0; padding:0; background-color:black; color:red; font-family:Fixed, monospace; overflow:hidden; }
  .column { position:absolute; }
  .cell {}
`;

export default function MatrixPage() {
  useEffect(() => {
    const redirect = window.setInterval(() => {
      window.location.href = "/Layer/GoWireless";
    }, 16000);

    const TIMEFRAME = 20;
    const BRIGHTNESS0 = 25;
    let BRIGHTNESSSTEPS = 31;
    if (navigator.userAgent.indexOf("Firefox") !== -1) BRIGHTNESSSTEPS = 6;
    const BRIGHTNESSTABLE: string[] = [];
    const BRIGHTNESSTABLERGB: string[] = [];
    const HISTORY = 25;
    const GRIDWIDTH = 10;
    const MESSAGESTEP = 30;
    const MESSAGE = "Let's All Love Lain.";
    const MESSAGE2 = " ";
    let MESSAGEX = 2;
    let MESSAGEY = 2;

    const lastCols: Record<number, number> = {};
    const lastColsList: number[] = [];
    let lastColsIndex = 0;
    const falls: Record<
      number,
      { col: number; id: number; el: HTMLDivElement; str: Array<[HTMLDivElement, number]> }
    > = {};
    let fallsCounter = 0;
    let time = 0;
    let messageLoad = MESSAGE.length;
    const messageTable: boolean[] = [];

    function getchar() {
      const n = Math.floor(Math.random() * 21 + 1);
      return String.fromCharCode(65 + n);
    }

    function evalBrightness(n: number): [string, string] {
      let i = Math.floor((n * 31) / BRIGHTNESS0);
      const inc = 31 / BRIGHTNESSSTEPS;
      i = Math.floor(Math.floor(i / inc) * inc);
      let brHex = "#";
      let brCol = "rgb(";
      if (i < 16) {
        brHex += "0" + Number(i).toString(16) + "0";
        brCol += "255, 0, 0)";
      } else {
        i -= 16;
        const d = i * 16 + i;
        brHex += "000";
        brCol += d + ", 0, 0)";
      }
      return [brHex, brCol];
    }

    function updateBrightnessTable() {
      for (let i = 0; i <= BRIGHTNESS0; ++i) {
        const br = evalBrightness(i);
        BRIGHTNESSTABLE[i] = br[0];
        BRIGHTNESSTABLERGB[i] = br[1];
      }
    }

    function updateMatrix() {
      const gridx = Math.floor(document.documentElement.clientWidth / GRIDWIDTH);
      const gridy = Math.floor(document.documentElement.clientHeight / 18);
      MESSAGEX = Math.floor((gridx - MESSAGE.length) / 2);
      MESSAGEY = Math.floor(gridy / 2) - 2;
      for (let i = 0; i < MESSAGE.length; ++i) messageTable[i] = false;
    }

    function isMessageColumn(col: number) {
      return col >= MESSAGEX && col < MESSAGEX + MESSAGE.length;
    }

    function timeLoop() {
      ++time;
      requestAnimationFrame(draw);
    }

    function draw() {
      const grid = Math.floor(document.documentElement.clientWidth / GRIDWIDTH);

      let i = 0;
      let col: number | null = null;
      do {
        if (i++ > HISTORY) {
          col = null;
          break;
        }
        col = Math.floor(Math.random() * grid);
      } while (lastCols[col]);

      if (time % MESSAGESTEP === 0 && messageLoad) {
        for (let j = 0; j < MESSAGE.length; ++j) {
          if (messageTable[j] === false) {
            col = MESSAGEX + j;
            break;
          }
        }
      }

      const last = lastColsList[lastColsIndex];
      if (last != null) delete lastCols[last];
      if (col != null) {
        lastColsList[lastColsIndex] = col;
        lastCols[col] = col;
      }
      lastColsIndex++;
      if (lastColsIndex > HISTORY) lastColsIndex = 0;

      if (time % 2 === 0 && messageLoad && col) {
        const dx = col * GRIDWIDTH;
        const id = fallsCounter++;
        const el = document.createElement("div");
        el.id = "col-" + id;
        el.className = "column";
        el.style.top = "0";
        el.style.left = dx + "px";
        document.body.appendChild(el);
        falls[id] = { col, id, el, str: [] };
      }

      let fallsNotEmpty = false;
      for (const k in falls) {
        fallsNotEmpty = true;
        drawFall(falls[k]);
      }

      if (messageLoad || fallsNotEmpty) {
        window.setTimeout(timeLoop, TIMEFRAME);
      } else {
        const el = document.getElementById("message-0");
        if (el) {
          const message2 = document.createElement("div");
          message2.style.position = "absolute";
          message2.style.top = el.offsetTop + el.offsetHeight + 5 + "px";
          const x =
            el.offsetLeft +
            (el.offsetWidth * (MESSAGE.length - MESSAGE2.length)) / 2;
          message2.style.left = x + "px";
          message2.innerHTML = MESSAGE2;
          document.body.appendChild(message2);
        }
      }
    }

    function drawFall(fall: (typeof falls)[number]) {
      const el = fall.el;
      const str = fall.str;
      const n = str.length;
      if (el.offsetHeight < document.documentElement.clientHeight) {
        const cellId = n;
        const ch = getchar();
        const cellEl = document.createElement("div");
        cellEl.id = "cell-" + fall.id + "-" + cellId;
        cellEl.className = "cell";
        cellEl.innerHTML = ch;
        el.appendChild(cellEl);

        if (cellId === MESSAGEY && isMessageColumn(fall.col)) {
          const charIndex = fall.col - MESSAGEX;
          if (document.getElementById("message-" + charIndex) == null) {
            const messageCell = cellEl.cloneNode(true) as HTMLDivElement;
            messageCell.id = "message-" + charIndex;
            messageCell.style.zIndex = "10";
            messageCell.style.position = "absolute";
            messageCell.style.top = cellEl.offsetTop + "px";
            messageCell.style.left = el.offsetLeft + "px";
            messageCell.style.color = "#fff";
            messageCell.style.textDecoration = "blink";
            document.body.appendChild(messageCell);
            let mch = MESSAGE.charAt(charIndex);
            if (mch === " ") mch = " ";
            messageCell.innerHTML = mch;
            messageTable[charIndex] = true;
            messageLoad--;
          }
          cellEl.innerHTML = "&nbsp;";
          cellEl.style.color = "#000";
          str[cellId] = [cellEl, 0];
        } else {
          str[cellId] = [cellEl, BRIGHTNESS0];
        }
      }

      let end = true;
      for (let i = 0; i < n; ++i) {
        const cell = str[i];
        if (checkBrightness(cell)) end = false;
      }
      if (end && n) {
        delete falls[fall.id];
        document.body.removeChild(el);
      }
    }

    function checkBrightness(cell: [HTMLDivElement, number]) {
      const cellEl = cell[0];
      if (cell[1] > -1) {
        const br = BRIGHTNESSTABLERGB[cell[1]];
        if (cellEl.style.color !== br) cellEl.style.color = br;
        cell[1]--;
        return true;
      }
      return false;
    }

    const init = window.setTimeout(() => {
      updateBrightnessTable();
      updateMatrix();
      window.setTimeout(timeLoop, 0);
    }, 500);

    return () => {
      window.clearInterval(redirect);
      window.clearTimeout(init);
      for (const k in falls) {
        if (falls[k].el.parentNode) falls[k].el.parentNode.removeChild(falls[k].el);
      }
      document
        .querySelectorAll('[id^="message-"]')
        .forEach((n) => n.parentNode?.removeChild(n));
    };
  }, []);

  return (
    <>
      <title>mebious.matrix.neocities</title>
      <style>{MATRIX_STYLES}</style>
    </>
  );
}
