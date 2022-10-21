import React from 'react'
import { TermsModal } from '../../Layots/TermsModal'
import "./landing_page_styles/footer.css"
function Footer() {
 
  return (
    <>
    <div className="page-footer">
        <footer className="footer">
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-md-6 text-center text-md-start order-2">
                        <span className=" btn-clr">
                        ©Automatic Token Maker
                        </span>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-end order-1 order-md-2">
                        <button type='button' className="btn footer-link py-0 btn-clr" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                            Terms of use
                        </button>
                        <TermsModal />

                        <a href="/#faq" className="btn footer-link py-0 btn-clr">Help</a>
                        <a  href="https://www.blocktechbrew.com/" target="_blank" rel='noopnner noreferrer' className="btn footer-link py-0 btn-clr">Blocktech Brew</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Footer