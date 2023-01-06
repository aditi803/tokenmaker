import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { HEADER } from '../../../api/Api'
import './landing_page_styles/header.css'
import axios from "axios"
import HeaderSkeleton from '../../../skeleton/HeaderSkeleton'
const Header = () => {
    const imageBaseUrl = "https://tokenmaker-apis.block-brew.com/images/"

    const [header, setHeader] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {    
    fetchData()
  }, [])
  const fetchData = async () => {
    

    const respHeader = await axios.get(HEADER)
    setHeader(respHeader.data.msg)
    setLoader(false)
    // console.log(respHeader.data.msg,"Header resp")
    const favicon = document.getElementById("favicon");
    document.title = respHeader?.data?.msg?.investorDocumentTitle;
    // console.log(respHeader?.data?.msg?.investorDocumentTitle,"ttile")
    favicon.href = `${imageBaseUrl}${respHeader.data.msg.investorFavicon}`;
  }

  return loader ? <HeaderSkeleton /> :(
    <div className="layout-container main-layout header-fixed">
    <div className='page-header'>
        <header className="header navbar-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <Link to="/" className="navbar-brand">
                                {/* <span className="span-1"> */}
                                    {/* <span className="span-2">
                                        <img className='img-1' aria-hidden='true' src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27257%27%20height=%2725%27/%3e"
                                         alt="" />
                                    </span> */}
                                         <img src={imageBaseUrl+header.investorLogoImage} alt="Logo" className='logoImage' srcSet="" />
                                    {/* <img srcSet="https://tokenmaker.eattheblocks.com/_next/image?url=%2Fimages%2Flogo-token-maker.png&w=384&q=75 1x,https://tokenmaker.eattheblocks.com/_next/image?url=%2Fimages%2Flogo-token-maker.png&w=384&q=75 2x"
                                    src='https://tokenmaker.eattheblocks.com/_next/image?url=%2Fimages%2Flogo-token-maker.png&w=384&q=75' decoding='async' data-nimg='intrinsic' 
                                    alt="Logo" className="img-2" /> */}
                                {/* </span> */}
                            </Link>
                            <div className='nav-btn-div'>
                            <Link
                      to="/generator">
                    <button className='btn btn-pad'>Get Started</button>
                    </Link>
                  </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    </div>
    </div>
  )
}

export default Header