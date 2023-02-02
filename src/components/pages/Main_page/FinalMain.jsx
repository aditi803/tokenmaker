import React, { useContext, useEffect, useState } from "react";
// import "../Main_page/Main.css";

import { SuccessDeploy } from "./SuccessDeploy";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";
import { ProgressBar } from "react-bootstrap";
// import 'bootstrap/';
import { useLocation, useNavigate } from "react-router-dom";
import CommonBanner from "../Common/CommonBanner";
import CommonBannerSkeleton from "../../../skeleton/CommonBannerSkeleton";
import axios from "axios";

export const FinalMain = (props) => {
  //  const  {deploySuccess} = props

  const navigate = useNavigate();
  const percentage = 100;
  const { addToken, deploySuccess, deployData, solDeploy } = useContext(GlobalContext);

  const [loader, setLoader] = useState(true)



  let location = useLocation()
  console.log(location, "PAth is  ")

  const { deployContract, changeNetwork, addNewNetwork, connectedAccAddress, SignInMetamask, blockchainNetworks, sendCommision } =
    useContext(GlobalContext);

  const networkFee = []

  const [data, setData] = useState([])
  const getNetworks = () => {
    axios.get("https://tokenmaker-apis.block-brew.com/commission/commissiondetails")
      .then((res) => {
        setData(res.data.msg)
        // console.log(res.data.msg.items, "Aditii ddata jo ni aata ");
        setLoader(false)
      })
      .catch((err) => {
        console.log(err, "Error")
      })
  }

  useEffect(() => {
    getNetworks()
  }, [setData])

  const [bannerValue, setBannerValue] = useState("")

  const networkData = async () => {
    console.log("123")
    console.log(data, "Netwrok data")
    console.log(location.pathname, "Network")
    await data.map((value) => {
      console.log(value, "Banner Data above");

      if ((value.parentNetworkName.split(" ").join("").toLowerCase()) === location.pathname.replace("/generator/", "")) {
        console.log(value, "Banner Data under");
        return setBannerValue(value.parentNetworkName)
      }
    })
  }

  useEffect(() => {
    networkData()
  })

 
  return (
    <>
      <div className="page-content">
        <main>
          <div className="hero mb-3 ">

          {
              loader ? <CommonBannerSkeleton /> :
                <div className="container">
                  <h1>
                    <span className="sub-highlight">Create Your {bannerValue} Token</span>
                  </h1>
                  <p>
                    Easily deploy your Smart Contract for a Standard, Capped,
                    Mintable, Burnable {bannerValue} Token.
                    <br />
                    No login. No setup. No Coding required.
                  </p>
                </div>
          }
          </div>
          <section className="my-5 py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="configurator-container">
                    <div className="configurator-pending-install">
                      <div className="card">
                        {/* start */}
                        {deploySuccess || solDeploy ? (
                          <SuccessDeploy
                            addToken={addToken}
                            deployData={deployData}
                          />
                        ) : (
                          <div className="pt-5">
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
