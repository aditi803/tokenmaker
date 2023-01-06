import { Skeleton } from '@mui/material'
import React from 'react'
import { PrivacyPolicy } from '../components/Layots/PrivacPolicy'
import { TermsModal } from '../components/Layots/TermsModal'
import { FiMail } from 'react-icons/fi'
import { AiFillPhone } from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import Logo from "../../../assets/footerlogo.png";
import Logo from '../assets/footerlogo.png'


const FooterSkeleton = () => {
  return (
    <>
      <div
        className="page-footer"
      >
        <footer className="footer">
          <div className="container py-3">
            <div className="row" >
              <div className="col-lg-4 ">
                <span>
                  <a href=' https://blocktechbrew.com/' target='_blank'>
                    <img className="footer-logo" src={Logo} alt="" />
                  </a>
                </span>
                <p style={{ fontSize: "12px", marginBottom: "20px", maxWidth: '330px' }}>
                  Build business ecosystems laced with decentralization,
                  enhanced security and transparency with our custom blockchain
                  app development
                </p>
                <p>Our Social Presence</p>
                <div className="d-flex icons social-links">
                  <a href=' https://www.facebook.com/blocktechbrew' target='_blank'>
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href=' https://twitter.com/blocktechbrew' target='_blank'>
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href=' https://www.linkedin.com/company/block-tech-brew/' target='_blank'>

                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href=' https://www.instagram.com/blocktechbrew/?hl=en' target='_blank'>

                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 services">
                <h5 className="mb-4">Our Services</h5>
                <a href=' https://blocktechbrew.com/metaverse-development-company/' target='_blank' >
                  <p>Metaverse</p>
                </a>
                <a href=' https://blocktechbrew.com/defi/' target='_blank'>
                  <p>Defi</p>
                </a>
                <a href=' https://blocktechbrew.com/nft-marketplace-development-company/' target='_blank'>
                  <p>NFT Marketplace</p>
                </a>
                <a href='  https://blocktechbrew.com/cryptocurrency-exchange/' target='_blank'>
                  <p>Crypto Exchange</p>
                </a>
              </div>
              <div className="col-lg-2">
                {/* <h5 className="mb-5"></h5> */}
                <Link
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ color: "#fff" }}
                >
                  <p> Terms of Use. </p>
                </Link>
                <TermsModal />
                <Link
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  style={{ color: "#fff" }}
                >
                  <p>Privacy Policy</p>
                </Link>
                <PrivacyPolicy />
                {/* <p>Wallet</p>
              <p>Resourses</p> */}
              </div>
              <div className="col-lg-4">
                <h5 className="mb-4">Our Newsletter</h5>
                <div className="d-flex mb-4">
                  <input type='number' className="numberinput" placeholder="" />
                  <button className="sbbutton">Subscribe</button>
                </div>
                <h5 className="mb-4">Contact Us</h5>
                <div className="contact">
                  <a href=" mailto:business@blocktechbrew.com?subject=SendMail&body=Description" target='_blank' style={{ color: "#fff" }}>
                    <p> <FiMail />  business@blocktechbrew.com</p>
                  </a>
                  <a href="tel: +91 874-590-9990" style={{ color: "#fff" }}>
                    <p><AiFillPhone />   +91 874-590-9990</p>
                  </a>
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
            <Skeleton variant="rounded" height={70} width={200} />

            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default FooterSkeleton