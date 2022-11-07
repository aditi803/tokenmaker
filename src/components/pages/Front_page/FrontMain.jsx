import React, { useEffect, useState,useMemo} from "react";
import "./Front_style/FrontMain.css";
import axios from 'axios';
import { BANNER_DETAILS, CUSTOM_DETAILS, FAQS, FEATURES, START_SECTION_DETAILS, STEPS } from "../../../api/Api";
import Loader from "../../../loader";

export const FrontMain = () => {

  const [banner, setBanner] = useState([])
  const [start, setStart] = useState([])
  const [custom, setCustom] = useState([])
  // const [feature, setFeature] = useState([])
  const [faq, setFaq] = useState([])
  const [faqData, setFaqData] = useState([])
  const [features, setFeatures] = useState([])
  const [featuresData, setFeaturesData] = useState([])
  const [steps, setSteps] = useState([])
  const [stepData, setStepData] = useState([])
  const [loader, setLoader] = useState(false)
 
  const data = stepData.heading?.split(' ')
  console.log(data,"data after split")
  let coloredData
  let startData

  if(data?.length!==0 && data?.length >0){
   coloredData = data[data?.length-2] + " " + data[data?.length-1]
  // console.log(coloredData,"dsdsd")
  startData = data.slice(0,data.length-2).join(" ")
  // console.log(startData,"startData")
  }
 

  useEffect(() => {
    setLoader(true)
    const fetchData = async () => {
      const respBanner = await axios.get(BANNER_DETAILS)
      const respCustom = await axios.get(CUSTOM_DETAILS)
      const respStart = await axios.get(START_SECTION_DETAILS)
      // const respFeature = await axios.get(FEATURE_DETAILS)
      const respFaq = await axios.get(FAQS)
      const respFeatures = await axios.get(FEATURES)
      const respSteps = await axios.get(STEPS)

      setBanner(respBanner.data.msg)
      setCustom(respCustom.data.msg)
      setStart(respStart.data.msg)
      // setFeature(respFeature.data.msg)
      setFaq(respFaq.data.msg.faqDetails)
      setFaqData(respFaq.data.msg.faqData)
      setFeatures(respFeatures.data.msg.featureDetails)
      setFeaturesData(respFeatures.data.msg.featureData)
      setSteps(respSteps.data.msg.stepDetails)
      setStepData(respSteps.data.msg.stepData)
      // setHeadingData([respSteps.data.msg.stepData.heading])
      setLoader(false)
    }
    fetchData()
  }, [])

  return loader ? <Loader /> : (

    <>
      <div className="page-content">
        <main className="">
          <section className="page-section hero" id="hero" style={{ backgroundImage: `${banner.backgroundImage}` }}>
            <div className="container self">
              <h1 style={{ color: `${banner.headingColor}` }}>
                <span className="sub-highlight">{banner.heading}</span>
              </h1>
              <div className="my-5">
                <p className="m-0" style={{ color: `${banner.contentColor}` }}>
                  {banner.content}
                </p>
              </div>
              <div className="my-5">
                <a
                  className="btn btn-pad btn-rounded me-3"
                  href="/generator"
                  style={{ backgroundColor: `${banner.buttonBackgroundColor}`, color: `${banner.buttonTextColor}` }}
                >
                  {banner.buttonText}
                </a>
              </div>
            </div>
          </section>

          <section className="page-section section-how" id="how-it-works">
            <div className="container">
              <h2 className="section-title mt-4" style={{color: `${stepData.headingColor}`}}>
                <span>{startData}</span> {""}
                
                <span className="sub-highlight">{coloredData}</span>
              </h2>
              <div className="row mt-5">
                {steps.map((data,index) => (
                  <div className="col-12 col-lg-6" key={index}>
                  <div className="icon-container">
                    <span className="svg-icon icon-metamask" style={{backgroundImage:`url(${data.stepImage})`}}></span>
                  </div>
                  <div className="title">
                    <span className="step-number">{index + 1} /</span>{data.title}
                  </div>
                  <p className="mb-0">
                    {data.content}
                  </p>
                </div>
                ))}
              </div>
            </div>
          </section>
          <section className="page-section section-ready my-4 py-4" style={{ backgroundColor: `${start.backgroundColor}` }}>
            <div className="container">
              <h2 className="section-title-small text-center" style={{ color: `${start.headingColor}` }}>
                {start.heading}
              </h2>
              <div className="mt-3 text-center">
                <a
                  href="/generator"
                  className="btn btn-rounded btn-pad"
                  style={{ backgroundColor: `${start.buttonBackgroundColor}`, color: `${start.buttonColor}` }}
                >
                  {start.buttonText}
                </a>
              </div>
            </div>
          </section>
          <section className="page-section section-features" id="features">
            <div className="container">
              <h2 className="section-title text-center" style={{color: `${featuresData.headingColor}`}}>
                <span className="sub-highlight">{featuresData.heading}</span>
              </h2>
              {features.map((data, index) => (
                <div className="feature-item" key={index}>
                  <div className="icon-container">
                    <span className="svg-icon icon-compliant"style={{backgroundImage:`url(${data.featureImage})`}}></span>
                  </div>
                  <div>
                    <h4>{data.title}</h4>
                    <p>
                      {data.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="page-section section-custom-dev p-4 p-md-5 mt-4" style={{ backgroundColor: `${custom.backgroundColor}` }}>
            <div className="container">
              <h2 className="section-title-small text-center" style={{ color: `${custom.headingColor}` }}>
                {custom.heading}
              </h2>
              <div className="mt-3 text-center">
                <a
                  type="button" href="https://www.blocktechbrew.com/"
                  className="btn btn-rounded btn-pad"
                  style={{ backgroundColor: `${custom.buttonBackgroundColor}`, color: `${custom.buttonColor}` }}
                >
                  {custom.buttonText}
                </a>
              </div>
            </div>
          </section>
          <section className="page-section section-faq" id="faq">
            <div className="container">
              <div className="faq-container">
                <h2 className="section-title text-center mt-4">{faqData.heading}</h2>
                <p className="section-subtitle mt-3 mb-5" style={{color: `${faqData.contentColor}`}}>
                  {faqData.content}
                </p>

                <div className="faq-list-container">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    {faq.map((value, index) => (
                      <div className="faq-header" key={index}>
                        <div className="accordion-item faq-item" >
                          <h2 className="accordion-header" id="flush-headingOne">
                            <button
                              className={`accordion-button collapsed`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapseOne${index}`}
                              aria-expanded={index === 0 ? 'true' : 'false'}
                              aria-controls={`flush-collapseOne${index}`}
                            >
                              <h4 className="me-3">{value.question}</h4>
                            </button>
                          </h2>
                          <div
                            id={`flush-collapseOne${index}`}
                            className={`accordion-collapse collapse `}
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body ">
                              {value.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section section-ready-i">
            <div className="container">
              <div className="mt-3 text-center">
                <a
                  href="/generator"
                  className="btn btn-primary btn-lg btn-rounded btn-pad"
                >
                  Deploy your token
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
