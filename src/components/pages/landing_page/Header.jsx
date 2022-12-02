import React from 'react'
import { Link } from 'react-router-dom'
import './landing_page_styles/header.css'
const Header = ({header}) => {
    console.log(header, "Heade data")
    const imageBaseUrl = "https://tokenmaker-apis.block-brew.com/images/"
  return (
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