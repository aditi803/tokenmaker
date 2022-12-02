import React, { useState, useEffect } from "react";
import "./landing_page_styles/main.css";
import axios from 'axios'
import Loader from "../../../loader";
import { Link } from "react-router-dom";
function Main() {

  const [data, setData] = useState([])
  const [image, setImage] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    getNetworkHanlder()
  }, [])

  const getNetworkHanlder = () => {
    // changeApiStatus(true)
    axios
      .get("https://tokenmaker-apis.block-brew.com/network/networkdetails")
      .then(res => {
        setData(res.data.msg.items)
        console.log(res, "Add data view page")
        setLoader(false)
      })
      .catch(err => {
        console.log(err)
        setLoader(false)
      })
  }

  const imageBaseUrl = "https://tokenmaker-apis.block-brew.com/images/"

  return loader ? <Loader /> : (
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
            <>

              {data.map((value) => (
                <div className="chain-item">
                  {console.log(value.hrefPath,"jjjjjjj")}
                  <Link to={`/generator/${value.hrefPath}`} className="chain-link chain-bsc">
                    <span className="title">{value.categoryName}</span>
                      <span className="logo" style={{ backgroundImage: `url(${imageBaseUrl}${value?.networks[0].networkImage})` }}></span>
                    {/* {value?.networks[0]((img) => (
                      <span className="logo" style={{ backgroundImage: `url(${imageBaseUrl}${img.networkImage})` }}></span>
                    ))} */}
                    <span className="text-muted description">Create your token on {value.categoryName}</span>
                  </Link>
                </div>
              ))}


              {/* <div className="chain-item">
                  <a href="/generator/polygon" className="chain-link chain-polygon">y
                    <div className="ribbon top-right ribbon-primary">
                      <small>NEW</small>
                    </div>
                    <span className="title">Polygon</span>
                    <span className="logo"></span>
                    <span className="text-muted">
                      Create your own token on Polygon
                    </span>
                  </a>
                </div> */}
            </>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;
