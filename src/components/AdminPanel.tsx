"use client";

import Phonepad from "./Phonepad";

export default function AdminPanel() {
  return (
    <>
      <h1 className="admin-h1">Administration Panel</h1>
      <div className="main admin-main">
        <div className="lock-frame">
          <img
            alt="Tachibana Security Division Logo"
            draggable={false}
            className="lock"
            src="/img/tachilock.png"
          />
        </div>

        <div className="login-box">
          <p className="login-title">Administrator Login</p>
          <br />
          <form
            className="login-form"
            name="adminaccount"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.reload();
            }}
          >
            Username: <br />
            <input type="text" name="username" placeholder="Username" />
            <div className="remember">
              Remember Password{" "}
              <input type="checkbox" name="Remember" />
              <br />
            </div>
            <br />
            Password:
            <br />
            <input type="text" name="password" placeholder="Password" />
            <input
              className="login-btn"
              type="button"
              value="Login"
              onClick={() => window.location.reload()}
            />
          </form>
        </div>

        <Phonepad />
      </div>

      <div className="reset-frame">
        <a className="resetblink" href="/Layer/matrix">
          [ALL RESET]
        </a>
      </div>
    </>
  );
}
