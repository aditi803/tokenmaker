import React, { useState, useEffect } from "react";
import { FOOTER } from "../../../api/Api";
import { TermsModal } from "../../Layots/TermsModal";
import "./landing_page_styles/footer.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../../../assets/footerlogo.png";
function Footer() {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const respHeader = await axios.get(FOOTER);
      setFooter(respHeader.data.msg);
    };
    fetchData();
  }, []);
  return (
    <>
      <div
        className="page-footer"
        style={{ fontSize: "16px", "--backColor": footer.backgroundColor }}
      >
        <footer className="footer">
          <div className="container py-3">
            <div className="row" style={{ color: `${footer.contentColor}` }}>
              <div className="col-4 ">
                <span>
                  <img className="footer-logo" src={Logo} alt="" />
                </span>
                <p style={{ fontSize: "12px", marginBottom: "20px",maxWidth:'330px' }}>
                  Build business ecosystems laced with decentralization,
                  enhanced security and transparency with our custom blockchain
                  app development
                </p>
                <p>Our Social Presence</p>
                <div className="d-flex icons">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
              <div className="col-2">
                <h5 className="mb-4">Our Services</h5>
                <p>Metaverse</p>
                <p>Defi</p>
                <p>NFT Marketplace</p>
                <p>Crypto Exchange</p>
              </div>
              <div className="col-2">
              <h5 className="mb-5"></h5>
              <p>Crypto Banking Solution</p>
              <p>ICO</p>
              <p>Wallet</p>
              <p>Resourses</p>
              </div>
              <div className="col-4">
                <h5 className="mb-4">whatsApp Updates</h5>
                <div className="d-flex mb-4">
                <input type='number' className="numberinput" placeholder="Enter Phone Number"/>
<button className="sbbutton">Subscribe</button>
                </div>
                <h5 className="mb-4">Contact Us</h5>
                <div className="d-flex contact">
                  <p >example@gmail.com</p>
                  <p>+1 62786 58968</p>
                </div>
              </div>

              {/* <div className="col-12 col-md-6 text-center text-md-end order-1 order-md-2">
                <button
                  type="button"
                  className="btn footer-link py-0"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ color: `${footer.contentColor}` }}
                >
                  Terms of use
                </button>
                <TermsModal />
                <Link
                  to="/#faq"
                  className="btn footer-link py-0 "
                  style={{ color: `${footer.contentColor}` }}
                >
                  Help
                </Link>
                <Link
                  to="https://www.blocktechbrew.com/"
                  target="_blank"
                  rel="noopnner noreferrer"
                  className="btn footer-link py-0"
                  style={{ color: `${footer.contentColor}` }}
                >
                  {footer.companyName}
                </Link>
              </div> */}
              <p></p>
            </div>

            <hr />
            <p className="text-center" style={{ fontSize: "16px" }}>
              {footer.investorCopyrightText}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
