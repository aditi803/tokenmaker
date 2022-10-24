import React, { useContext, useEffect } from "react";
import "../Main_page/Main.css";
import { SuccessDeploy } from "./SuccessDeploy";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";
import { ProgressBar } from "react-bootstrap";
// import 'bootstrap/';
import { useNavigate } from "react-router-dom";

export const FinalMain = (props) => {
  //  const  {deploySuccess} = props
  const navigate = useNavigate();
  const percentage = 100;
  const { addToken, deploySuccess, deployData } = useContext(GlobalContext);

  console.log(deploySuccess, "deploy Success final side");
  console.log("final main");
  // const createNewToken = ()=>{
  //   navigate("/generator")
  // }
  //   useEffect(()=>{
  //   createNewToken()
  // })
  return (
    <>
      <div className="page-content">
        <main>
          <div className="hero mb-3">
            <div className="container">
              <h1>
                <span style={{ marginTop: "-60px" }} className="sub-highlight">
                  Create Your Ethereum Token
                </span>
              </h1>
              <p>
                Easily deploy your Smart Contract for a Standard, Capped,
                Mintable, Burnable ERC20 Token.
                <br />
                No login.No setup.No Coding required.
              </p>
            </div>
          </div>
          <section style={{ height: "250px" }}>
            <div className="container">
              <div className="configurator-container">
                <div className="configurator-pending-install">
                  <div className="card">
                    {/* start */}
                    {deploySuccess ? (
                      <SuccessDeploy
                        addToken={addToken}
                        deployData={deployData}
                      />
                    ) : (
                      <div>
                        <div className="card-header d-flex align-items-center">
                          <div className="mr-3" style={{ zoom: 1.5 }}></div>
                          <i className="fa-solid fa-arrow-right me-3"></i>
                          <h4 className="m-0">Installation</h4>
                        </div>
                        <div className="card-body">
                          <p className="text-muted">
                            Please Wait and confirm the transaction with your
                            wallet to start installing your token.
                          </p>

                          <div className="progressBar">
                            <ProgressBar now={percentage} animated />
                          </div>
                        </div>
                      </div>
                    )}
                    {/*ends  */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
