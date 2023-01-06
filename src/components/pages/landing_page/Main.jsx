import React, { FC, useCallback, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";

import "./landing_page_styles/main.css";
import axios from 'axios'
import Loader from "../../../loader";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainSkeleton from "../../../skeleton/MainSkeleton"
// import moonRiverImage from "../../../assets/monBeams.png"

function Main() {

  const { setSolDeploy } = useContext(GlobalContext);
  const [data, setData] = useState([])
  const [image, setImage] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setSolDeploy(false)
    getNetworkHanlder()
  }, [])

  const getNetworkHanlder = () => {
    // changeApiStatus(true)
    axios
      .get("https://tokenmaker-apis.block-brew.com/network/networkdetails")
      .then(res => {
        setData(res.data.msg.items)
        console.log(res, ">>>>>>>>>>>>>>>>>>>>>Add data view page>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        setLoader(false)
      })
      .catch(err => {
        console.log(err)
        setLoader(false)
      })
  }

  const imageBaseUrl = "https://tokenmaker-apis.block-brew.com/images/"

  return (
    <>
      <Header />
      <div className="page-content">
        <main>
          <div className="hero mb-3 mt-5">
            <div className="container">
              <h1 style={{ paddingTop: '80px', marginBottom: '10px' }}>
                <span className="sub-highlight">Select your network</span>
              </h1>
              <p style={{ color: 'black' }}>Your token will be deployed on the selected blockchain</p>
            </div>
          </div>

          {loader ? <MainSkeleton /> :
            <>
                <div className='row custom-row'>

                  <>


                    {data.map((value, index) => {
                      // if (index === 0) {
                      //   return <div className="chain-item">
                      //     {console.log(value.hrefPath, "jjjjjjj")}
                      //     <Link to={`/generator/solana`} className="chain-link chain-bsc">
                      //       <span className="title">{value.categoryName}</span>
                      //       <span className="logo" style={{ backgroundImage: `url(${imageBaseUrl}${value?.networks[0].networkImage})` }}></span>
                      //       {/* {value?.networks[0]((img) => (
                      //         <span className="logo" style={{ backgroundImage: `url(${imageBaseUrl}${img.networkImage})` }}></span>
                      //       ))} */}
                      //       <span className="text-muted description">Create your token on {value.categoryName}</span>
                      //     </Link>
                      //   </div>
                      // }else {
                      return <div className='col-xl-3'>
                        <div className="chain-item">
                          {console.log(value.hrefPath, "jjjjjjj")}
                          <Link to={`/generator/${value.hrefPath}`} className="chain-link chain-bsc">
                            <span className="title">{value.categoryName}</span>
                            <span className="logo" style={{ backgroundImage: `url(${imageBaseUrl}${value?.networks[0].networkImage})` }}></span>
                            {/* {value?.networks[0]((img) => (
                        <span className="logo" style={{ backgroundImage: `url(${imageBaseUrl}${img.networkImage})` }}></span>
                      ))} */}

                            <span className="text-muted description">Create your token on {value.categoryName}</span>
                          </Link>
                        </div>
                      </div>

                    })}
                  </>
              </div>



              {/* <div className='chain-select'>
                <div className="chain-item">
                  <Link to="/generator/moonriver" className="chain-link chain-bsc">
                    <span className="title">Moon River</span>
                    <img className="logo" src={moonRiverImage} alt="" />
                    

                    <span className="text-muted description">Create your token on Moon River</span>
                  </Link>
                </div>
              </div> */}
            </>

          }

        </main>
      </div >
      <Footer />
    </>
  );
}

export default Main;
