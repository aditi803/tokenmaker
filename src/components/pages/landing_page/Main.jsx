import React from "react";
import "./landing_page_styles/main.css";
function Main() {
  return (
    <>
      <div className="page-content">
        <main>
          <div className="hero mb-3 mt-5">
            <div className="container">
              <h1>
                <span className="sub-highlight">Select your network</span>
              </h1>
              <p>Your token will be deployed on the selected blockchain</p>
            </div>
          </div>
          <div className="chain-select">
            <div className="chain-item">
              <a
                href="/generator/ethereum"
                className="chain-link chain-ethereum"
              >
                <span className="title">Ethereum</span>
                <span className="logo"></span>
                <span className="text-muted">
                  Create your own token on Ethereum
                </span>
              </a>
            </div>
            <div className="chain-item">
              <a href="/generator/bsc" className="chain-link chain-bsc">
                <span className="title">Binance Smart Chain</span>
                <span className="logo"></span>
                <span className="text-muted">Create your own Token on BSC</span>
              </a>
            </div>
            <div className="chain-item">
              <a href="/generator/polygon" className="chain-link chain-polygon">
                <div className="ribbon top-right ribbon-primary">
                  <small>NEW</small>
                </div>
                <span className="title">Polygon</span>
                <span className="logo"></span>
                <span className="text-muted">
                  Create your own token on Polygon
                </span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;
