import React, { FC, useCallback, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";

// import "./landing_page_styles/main.css";
import axios from "axios";
import Loader from "../../../loader";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainSkeleton from "../../../skeleton/MainSkeleton";
import avalancheImage from "../../../assets/Avalanche_logo_without_text.png"
import SelectBanner from "../Eth_page/SelectBanner";

function Main() {
  const { setSolDeploy, setDeploySuccess,setMoonToggle, moonToggle } = useContext(GlobalContext);

  const [data, setData] = useState([]);
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
        setData(res.data.msg.items);
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

  const dataObj = data.find((item) => {
    if (item.categoryName === "Moon River") {
      setMoonToggle(true);
    }
  });

  const categoryName = dataObj?.categoryName ?? ''

  // console.log(categoryName,"Moon network")

  const imageBaseUrl = "https://tokenmaker-apis.block-brew.com/images/";

  return (
    <>
      <Header />
      <div className="page-content">
        <main>
          {/* <div className="hero mb-3 mt-5">
            <div className="container">
              <h1 className="sub-highlight">Select your network </h1>
              <p style={{ color: "black" }}>
                Your token will be deployed on the selected blockchain
              </p>
            </div>
          </div>  */}
          <SelectBanner />

          {loader ? (
            <MainSkeleton />
          ) : (
            <>
              <div className="container py-5 my-5">
                <div className="row gx-2">
                  <>
                    {data.map((value, index) => {
                      return (
                        <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-2">
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
                    {/* <div className="col-sm-6 col-md-4 col-lg-3 col-xxl">
                          <div className="chain-item">
                            <Link
                              to={`/generator/avax`}
                              className="chain-link chain-bsc"
                            >
                              <span className="title">
                                "Avalanche"
                              </span>
                              <span
                                className="logo"
                                style={{
                                  backgroundImage: `url(${avalancheImage})`,
                                }}
                              ></span>

                              <span className="text-muted description">
                                Create your token on Avalanche Blockchain
                              </span>
                            </Link>
                          </div>
                        </div> */}
                  </>
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
