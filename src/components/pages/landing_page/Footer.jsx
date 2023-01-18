import React, { useState, useEffect } from "react";
import { FOOTER } from "../../../api/Api";
import { TermsModal } from "../../Layots/TermsModal";
import "./landing_page_styles/footer.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../../../assets/footerlogo.png";
import { PrivacyPolicy } from "../../Layots/PrivacPolicyModal";
import CIcon from "@coreui/icons-react";
import { cilMail } from "@coreui/icons";
import { FiMail } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import FooterSkeleton from "../../../skeleton/FooterSkeleton";

function Footer() {
  const [footer, setFooter] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      const respHeader = await axios.get(FOOTER);
      setFooter(respHeader.data.msg);
      setLoader(false);
    };
    fetchData();
  }, []);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return loader ? (
    <FooterSkeleton />
  ) : (
    <>
      <div
        className="page-footer"
        style={{ fontSize: "16px", "--backColor": footer.backgroundColor }}
      >
        <footer className="footer">
          <div className="container py-3">
            <div className="row" style={{ color: `${footer.contentColor}` }}>
              <div className="col-sm-6 col-md-5 col-lg-4 mb-xl-0 mb-4">
                <span>
                  <Link to="/">
                    <img
                      className="footer-logo"
                      src={Logo}
                      alt=""
                      onClick={scrollToTop}
                    />
                  </Link>
                </span>
                <p
                  style={{
                    fontSize: "12px",
                    marginBottom: "20px",
                    maxWidth: "330px",
                  }}
                >
                  Build business ecosystems laced with decentralization,
                  enhanced security and transparency with our custom blockchain
                  app development
                </p>
                <h6>Our Social Presence</h6>
                <div className="d-flex icons social-links">
                  <a
                    href=" https://www.facebook.com/blocktechbrew"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href=" https://twitter.com/blocktechbrew" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href=" https://www.linkedin.com/company/block-tech-brew/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href=" https://www.instagram.com/blocktechbrew/?hl=en"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2 services mb-xl-0 mb-md-4">
                <h5 className="mb-4">Our Services</h5>
                <a
                  href=" https://blocktechbrew.com/metaverse-development-company/"
                  target="_blank"
                >
                  <p>Metaverse</p>
                </a>
                <a href=" https://blocktechbrew.com/defi/" target="_blank">
                  <p>Defi</p>
                </a>
                <a
                  href=" https://blocktechbrew.com/nft-marketplace-development-company/"
                  target="_blank"
                >
                  <p>NFT Marketplace</p>
                </a>
                <a
                  href="  https://blocktechbrew.com/cryptocurrency-exchange/"
                  target="_blank"
                >
                  <p>Crypto Exchange</p>
                </a>
              </div>
              <div className="col-6 col-md-3 col-lg-2 mt-5 pT">
                {/* <h5 className="mb-5"></h5> */}
                <Link
                  to="/terms"
                  // data-bs-toggle="modal"
                  // data-bs-target="#exampleModal"
                  style={{ color: "#fff" }}
                >
                  <p> Terms of Use</p>
                </Link>
                {/* <TermsModal /> */}
                <Link
                  to="/privacy-policy"
                  // data-bs-toggle="modal"
                  // data-bs-target="#exampleModal1"
                  style={{ color: "#fff" }}
                >
                  <p>Privacy Policy</p>
                </Link>
                {/* <PrivacyPolicy /> */}
                {/* <p>Wallet</p>
              <p>Resourses</p> */}
              </div>
              <div className="col-sm-6 col-lg-4">
                <h5 className="mb-4">Our Newsletter</h5>
                <div className="d-flex mb-4">
                  <input type="text" className="numberinput" placeholder="" />
                  <button className="sbbutton blue-btn">Subscribe</button>
                </div>
                <h5 className="mb-3">Contact Us</h5>
                <div className="contact">
                  <a
                    className="d-block mb-2"
                    href=" mailto:business@blocktechbrew.com?subject=SendMail&body=Description"
                    target="_blank"
                    style={{ color: "#fff" }}
                  >
                    <FiMail className="me-2" />{" "}
                    <span>business@blocktechbrew.com</span>
                  </a>
                  <a
                    className="d-block"
                    href="tel: +91 874-590-9990"
                    style={{ color: "#fff" }}
                  >
                    <BsTelephoneFill className="me-2" />{" "}
                    <span>+91 874-590-9990</span>
                  </a>
                </div>
              </div>
            </div>

            <hr className="mt-lg-4 mb-lg-3" />
            <div className="text-center mb-0">
              {footer.investorCopyrightText}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
