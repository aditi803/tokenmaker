import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HEADER } from '../../../api/Api'
// import './landing_page_styles/header.css'
import axios from "axios"
import HeaderSkeleton from '../../../skeleton/HeaderSkeleton'
import { GlobalContext } from '../../../contexts/EthContext/EtherProvider'
const Header = () => {
    const imageBaseUrl = "https://tokenmaker-apis.block-brew.com/images/"
  const { startToggle, setStartToggle } = useContext(GlobalContext);


    const [header, setHeader] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {


        const respHeader = await axios.get(HEADER)
        setHeader(respHeader.data.msg)
        setLoader(false)
        // console.log(respHeader.  data.msg,"Header resp")
        const favicon = document.getElementById("favicon");
        document.title = respHeader?.data?.msg?.investorDocumentTitle;
        // console.log(respHeader?.data?.msg?.investorDocumentTitle,"ttile")
        favicon.href = `${imageBaseUrl}${respHeader.data.msg.investorFavicon}`;
    }

    const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

    return loader ? <HeaderSkeleton /> : (
        <div className="layout-container main-layout header-fixed">
            <div className='page-header'>
                <header className="header navbar-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12"> 
                                <nav className="navbar navbar-expand-lg">
                                    <Link to="/" className="navbar-brand">
                                    <img src={imageBaseUrl + header.investorLogoImage} alt="Logo" className='logoImage' srcSet="" onClick={scrollToTop} />
                        </Link>
                                    <div className='nav-btn-div' style={{ display : !startToggle ? 'none' : 'block'}} onClick={() =>{
                                        setStartToggle(false)
                                    }}>
                                        <Link className='blue-btn'
                                            to="/generator">
                                            Get Started
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