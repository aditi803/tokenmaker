import React,{useState, useEffect} from 'react'
import { FOOTER } from '../../../api/Api'
import { TermsModal } from '../../Layots/TermsModal'
import "./landing_page_styles/footer.css"
import axios from "axios";
import { Link } from 'react-router-dom';
function Footer() {
 
    const [footer, setFooter] = useState([])
    useEffect(() => {
      const fetchData = async() => {
        const respHeader = await axios.get(FOOTER)
        setFooter(respHeader.data.msg)
      }
      fetchData()
    },[])
  return (
    <>
    <div className="page-footer" style={{fontSize: '16px', "--backColor": footer.backgroundColor}}>
        <footer className="footer">
            <div className="container py-3">
                <div className="row" style={{color: `${footer.contentColor}`}}>
                    <div className="col-12 col-md-6 text-center text-md-start order-2">
                        <span>
                        {footer.websiteName}
                        </span>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-end order-1 order-md-2" >
                        <button type='button' className="btn footer-link py-0" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" style={{color: `${footer.contentColor}`}}>
                            Terms of use
                        </button>
                        <TermsModal />

                        <Link to="/#faq" className="btn footer-link py-0 " style={{color: `${footer.contentColor}`}}>Help</Link>
                        <Link  to="https://www.blocktechbrew.com/" target="_blank" rel='noopnner noreferrer' className="btn footer-link py-0" style={{color: `${footer.contentColor}`}}>{footer.companyName}</Link>
                    </div>
                    <p></p>
                </div>
                <hr />
                <p className='text-center' style={{fontSize:"16px"}}>{footer.investorCopyrightText}</p>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Footer