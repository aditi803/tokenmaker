import React, { useEffect, useState, useMemo } from "react";
import "./Front_style/FrontMain.css";
import axios from "axios";
import {
  BANNER_DETAILS,
  CUSTOM_DETAILS,
  FAQS,
  FEATURES,
  START_SECTION_DETAILS,
  STEPS,
} from "../../../api/Api";
import Loader from "../../../loader";
import { Link } from "react-router-dom";
import { EthHeader } from "./FrontHeader";
import Header from "../landing_page/Header";
import Footer from "../landing_page/Footer";
import sideimage from "../../../assets/banner-side-image.png";

export const FrontMain = () => {
  const [showindex, setShowindex] = useState(0);

  const [banner, setBanner] = useState([]);
  const [start, setStart] = useState([]);
  const [custom, setCustom] = useState([]);
  // const [feature, setFeature] = useState([])
  const [faq, setFaq] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [features, setFeatures] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [steps, setSteps] = useState([]);
  const [stepData, setStepData] = useState([]);
  const [loader, setLoader] = useState(false);

  const data = stepData.heading?.split(" ");
  console.log(data, "data after split");
  let coloredData;
  let startData;

  if (data?.length !== 0 && data?.length > 0) {
    coloredData = data[data?.length - 2] + " " + data[data?.length - 1];
    // console.log(coloredData,"dsdsd")
    startData = data.slice(0, data.length - 2).join(" ");
    // console.log(startData,"startData")
  }

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      const respBanner = await axios.get(BANNER_DETAILS);
      const respCustom = await axios.get(CUSTOM_DETAILS);
      const respStart = await axios.get(START_SECTION_DETAILS);
      // const respFeature = await axios.get(FEATURE_DETAILS)
      const respFaq = await axios.get(FAQS);
      const respFeatures = await axios.get(FEATURES);
      const respSteps = await axios.get(STEPS);

      setBanner(respBanner.data.msg);
      setCustom(respCustom.data.msg);
      setStart(respStart.data.msg);
      // setFeature(respFeature.data.msg)
      setFaq(respFaq.data.msg.faqDetails.items);
      setFaqData(respFaq.data.msg.faqData);
      setFeatures(respFeatures.data.msg.featureDetails.items);
      setFeaturesData(respFeatures.data.msg.featureData);
      setSteps(respSteps.data.msg.stepDetails);
      setStepData(respSteps.data.msg.stepData);
      // setHeadingData([respSteps.data.msg.stepData.heading])
      setLoader(false);
    };
    fetchData();
  }, []);

  const imageBaseUrl = "https://tokenmaker-apis.block-brew.com/images/";
  return loader ? (
    <Loader />
  ) : (
    <>
      {/* <EthHeader /> */}
      <Header />
      <div className="page-content">
        <main className="">
          <section
            className="page-section hero"
            id="hero"
            style={{
              backgroundImage: `url(${imageBaseUrl}${banner.backgroundImage})`,
            }}
          >
            <div className="container self">
              <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                  <h1 style={{ color: `${banner.headingColor}` }}>
                    <span className="sub-highlight">{banner.heading}</span>
                  </h1>
                  <div className="my-2">
                    <p
                      className="m-0"
                      style={{ color: `${banner.contentColor}` }}
                    >
                      {banner.content}
                    </p>
                  </div>
                  <div className="my-2">
                    <Link
                      className="btn btn-pad  me-2"
                      to="/generator"
                      style={{
                        backgroundColor: `${banner.buttonBackgroundColor}`,
                        color: `${banner.buttonTextColor}`,
                      }}
                    >
                      {banner.buttonText}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img className="banner-side-image" src={sideimage} alt="" />
                </div>
              </div>
            </div>
          </section>

          {/* <section className="page-section section-how" id="how-it-works">
            <div className="container">
              <h2
                className="section-title mt-4"
                style={{ color: `${stepData.headingColor}` }}
              >
                <span>{startData}</span> {""}
                <span className="sub-highlight">{coloredData}</span>
              </h2>
              <div className="row mt-5">
                {steps.map((data, index) => (
                  <div className="col-12 col-lg-6" key={index}>
                    <div className="icon-container">
                      <span
                        className="svg-icon icon-metamask"
                        style={{
                          backgroundImage: `url(${imageBaseUrl}${data.stepImage})`,
                        }}
                      ></span>
                    </div>
                    <div className="title">
                      <span className="step-number">{index + 1} /</span>
                      {data.title}
                    </div>
                    <p className="mb-0">{data.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          {/* test */}

          <section class="timeline" id="timeline">
      <div class="container">
        <div class="timeline_wrap text-center">
        <h2
                className="section-title mt-4"
                style={{ color: `${stepData.headingColor}` }}
              >
                <span>{startData}</span> {""}
                <span className="sub-highlight">{coloredData}</span>
              </h2>
          <div class="row mt-5 pt-0 pt-md-5 gx-0">
          {steps.map((data, i) => {
            if (i % 2 === 0) {
              return (
            <>
            <div class="col-12 timeline_left timeline_main">
              <div class="row justify-content-center align-items-center">
                <div class="col-10 col-lg-5 d-none d-lg-block timeline-date">
                  <div className="feature-box mb-5" style={{maxWidth:'300px',minHeight:'320px'}}>
                  <img  src={imageBaseUrl+data.stepImage}/>
                    <h5> {data.title}</h5>
                    <p>{data.content}</p>
                </div>
                </div>
                <div class="col-2 timeline_dot"><span>{i+1}</span></div>
                <div class="col-10 col-lg-5 timeline-text">
                  <div class="d-block d-lg-none timeline-date">
                    <div className="feature-box mb-5" style={{maxWidth:'300px',minHeight:'320px'}}>
                  <img  src={imageBaseUrl+data.stepImage}/>
                  <h5> {data.title}</h5>
                    <p>{data.content}</p>
                </div>
                    <div>

                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            </>
            );
                  } else {
                    return (
                      <>
            <div class={`col-12 ${i=== steps.length-1 ? '' :'timeline_right'} timeline_main`}>
              <div class="row justify-content-center align-items-center">
                <div class="col-10 col-lg-5 order-2 order-lg-1 timeline-text">
                  <div class="d-block d-lg-none timeline-date">
                    <div className="feature-box mb-5" style={{maxWidth:'300px',minHeight:'320px'}}>
                  <img  src={imageBaseUrl+data.stepImage}/>
                  <h5> {data.title}</h5>
                    <p>{data.content}</p>
                </div>
                  </div>
                 
                </div>
                <div class="col-2 timeline_dot order-1 order-lg-2"><span>{i+1}</span></div>
                <div class="col-10 col-lg-5 d-none d-lg-block order-3  timeline-date">
                  <div className="feature-box mb-5" style={{maxWidth:'300px',minHeight:'320px'}}>
                  <img  src={imageBaseUrl+data.stepImage}/>
                  <h5> {data.title}</h5>
                    <p>{data.content}</p>
                </div>
                </div>
              </div>
            </div>
            </>
                    )}

})}
          </div>
        </div>
      </div>
    </section>


          {/* end  */}

          <section
            className="page-section section-ready my-4 py-5"
            style={{ backgroundColor: `${start.backgroundColor}` }}
          >
            <div className="container">
              <h2
                className="section-title-small text-center"
                style={{ color: `${start.headingColor}` }}
              >
                {start.heading}
              </h2>
              <div className="mt-4 text-center">
                <Link
                  to="/generator"
                  className="btn btn-pad"
                  style={{
                    backgroundColor: `${start.buttonBackgroundColor}`,
                    color: `${start.buttonColor}`,
                  }}
                >
                  {start.buttonText}
                </Link>
              </div>
            </div>
          </section>

          <section className="page-section section-features" id="features">
            <div className="container">
              <h2
                className="section-title text-center"
                style={{ color: `${featuresData.headingColor}` }}
              >
                <span className="sub-highlight mb-5">{featuresData.heading}</span>
              </h2>
              <div className="row">
              {features.map((data, index) => (
                <div className="col-lg-3 col-md-6 d-flex flex-column ">

                <div className="feature-box mb-5">
                  <img  src={imageBaseUrl+data.featureImage}/>
                    <h5>{data.title}</h5>
                    <p>{data.content}</p>
                </div>
                </div>
              ))}
              </div>

            </div>
          </section>
          <section
            className="page-section section-custom-dev p-4 p-md-5 mt-5"
            style={{ backgroundColor: `${custom.backgroundColor}` }}
          >
            <div className="container">
              <h2
                className="section-title-small text-center"
                style={{ color: `${custom.headingColor}`, fontSize: "31px" }}
              >
                {custom.heading}
              </h2>
              <div className="mt-4 text-center">
                <Link
                  type="button"
                  to="https://www.blocktechbrew.com/"
                  className="btn btn-pad"
                  style={{
                    backgroundColor: `${custom.buttonBackgroundColor}`,
                    color: `${custom.buttonColor}`,
                  }}
                >
                  {custom.buttonText}
                </Link>
              </div>
            </div>
          </section>
          <section className="page-section section-faq" id="faq">
            <div className="container">
              <div className="faq_wrap">
                <div className="row">
                  <div className="col-12 col-lg-6 faq_left">
                    <h2
                      className="heading"
                      style={{ color: `${featuresData.headingColor}` }}
                    >
                      {faqData.heading}
                    </h2>
                    <p
                      className="text"
                      style={{ color: `${faqData.contentColor}` }}
                    >
                      {faqData.content}
                    </p>
                  </div>
                  <div className="col-12 col-lg-6 faq_right">
                    {faq.map((item, i) => (
                      <>
                        <div
                          className="accordion mb-4"
                          id="accordionExample"
                          key={item._id}
                        >
                          <div className={`accordionitem accordion-item`}>
                            <h2 className="accordion-header" id="headingOne2">
                              <button
                                className={`accordionbutton accordion-button
                              ${i === showindex ? " " : "collapsed"}
                              `}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapseOne2${i}`}
                                aria-expanded="true"
                                aria-controls="collapseOne2"
                                onClick={() => setShowindex(i)}
                              >
                                {item.question}
                              </button>
                            </h2>
                            <div
                              id={`collapseOne2${i}`}
                              className={`accordion-collapse collapse ${
                                i === showindex ? "show" : null
                              }`}
                              aria-labelledby="headingOne2"
                              data-bs-parent="#accordionExample"
                            >
                              <div className={`accordionbody accordion-body`}>
                                <p className="p">{item.answer}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`faq_bottom text-center my-3 my-md-5`}>
                <h3
                  style={{ color: `${featuresData.headingColor}` }}
                  className="faq-bottom-text"
                >
                  What are you waiting for?
                </h3>
                <Link
                  href="/generator"
                  className="btn btn-pad mt-2"
                  style={{
                    backgroundColor: `${custom.buttonBackgroundColor}`,
                    color: `${custom.buttonColor}`,
                  }}
                >
                  Deploy your token
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="footer-in-mainpage">
      <Footer />

      </div>
    </>
  );
};
