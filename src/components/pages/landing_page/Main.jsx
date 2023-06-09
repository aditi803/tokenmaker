import React, { FC, useCallback, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";

// import "./landing_page_styles/main.css";
import axios from "axios";
// import Loader from "../../../loader";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainSkeleton from "../../../skeleton/MainSkeleton";
import SelectBanner from "../Eth_page/SelectBanner";
import smartBch from "../../../assets/smartBch.jpg"
function Main() {
  const { setSolDeploy, setDeploySuccess, networkData, setNetworkData } =
    useContext(GlobalContext);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setSolDeploy(false);
    setDeploySuccess(false);
    getNetworkHanlder();
  }, []);

  const getNetworkHanlder = () => {
    // changeApiStatus(true)
    axios
      .get("https://tokenmaker-apis.block-brew.com/network/networkdetails")
      .then((res) => {
        setNetworkData(res.data.msg.items);
        console.log(
          res,
          ">>>>>>>>>>>>>>>>>>>>>Add data view page>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
        );
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };

  // console.log(categoryName,"Moon network")

  const imageBaseUrl = "https://tokenmaker-apis.block-brew.com/images/";

  return (
    <>
      <Header />
      <div className="page-content">
        <main>
          <SelectBanner />
{/* as */}
          {loader ? (
            <MainSkeleton /> 
          ) : (
            <>
              <div className="container py-5 my-5">
                <div className="row g-3">
                  <>
                    {networkData.map((value, index) => {
                      return (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                          <div className="chain-item">
                            <Link
                              to={`/generator/${value.hrefPath}`}
                              className="chain-link chain-bsc"
                            >
                              <span className="title">
                                {value.categoryName}
                              </span>
                              <span
                                className="logo"
                                style={{
                                  backgroundImage: `url(${imageBaseUrl}${value?.networks[0].networkImage})`,
                                }}
                              ></span>

                              <span className="text-muted description">
                                Create your token on {value.categoryName}
                              </span>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </>
                  {/* <>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <div className="chain-item">
                        <Link
                          to={`/generator/bch`}
                          className="chain-link chain-bsc"
                        >
                          <span className="title">Smart Bch</span>
                          <span
                            className="logo"
                            style={{
                              backgroundImage: `url(${smartBch})`,
                            }}
                          ></span>
                          <span className="text-muted description">
                            Create your token on smart Bch
                          </span>
                        </Link>
                      </div>
                    </div>
                  </> */}
                </div>
              </div>
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Main;
