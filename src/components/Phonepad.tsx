"use client";

import { useRef, useState } from "react";

export default function Phonepad() {
  const [address, setAddress] = useState("");
  const clacks = useRef(0);

  const press = (value: string) => {
    clacks.current += 1;
    if (clacks.current < 20) {
      setAddress((prev) => prev + value);
    }
  };

  const clear = () => {
    setAddress("");
    clacks.current = 0;
  };

  const metaphorize = () => {
    if (address === "1998772515") {
      window.location.href = "/Layer/GoWireless";
    } else {
      setAddress("");
      clacks.current = 0;
    }
  };

  const Btn = ({ id, value }: { id: string; value: string }) => (
    <input
      id={id}
      className="fbutt"
      type="button"
      value={value}
      onClick={() => press(value)}
    />
  );

  return (
    <div className="numpad numpad-frame">
      <div className="fapper">
        <p className="metaph-title">Metaphorsis Panel</p>
        <form
          className="metaph-form"
          onSubmit={(e) => {
            e.preventDefault();
            metaphorize();
          }}
        >
          <input
            id="address"
            type="text"
            placeholder="Wired Address"
            maxLength={20}
            value={address}
            readOnly
          />
        </form>
        <div className="phonepad">
          <div className="frow">
            <Btn id="seven" value="7" />
            <Btn id="eight" value="8" />
            <Btn id="nine" value="9" />
          </div>
          <div className="frow">
            <Btn id="four" value="4" />
            <Btn id="five" value="5" />
            <Btn id="six" value="6" />
          </div>
          <div className="frow">
            <Btn id="one" value="1" />
            <Btn id="two" value="2" />
            <Btn id="three" value="3" />
          </div>
          <div className="frow">
            <Btn id="zero" value="0" />
            <input
              id="clear"
              className="clear-btn"
              type="button"
              value="CLEAR"
              onClick={clear}
            />
          </div>
          <div className="frow">
            <input
              id="mbutton"
              className="metaphorize-btn"
              type="button"
              value="METAPHORIZE"
              onClick={metaphorize}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
