import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HEADER } from '../../../api/Api'
import './Front_style/FrontHeader.css'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
export const EthHeader = () => {

  return (
    <div className="page-header">
      <header className='header navbar-area'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <nav className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand">
                  <img src="https://blocktechbrew.com/wp-content/uploads/2022/05/btb_logo.png" alt="Logo" className='logoImage' srcSet="" />
                  {/* <span className="span-1">
                      <span className="span-2">
                        <img alt aria-hidden="true" className='img-1'
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27257%27%20height=%2725%27/%3e"
                          />
                      </span>
                      <img src="https://tokenmaker.eattheblocks.com/_next/image?url=%2Fimages%2Flogo-token-maker.png&w=384&q=75"
                      decoding='async' data-nimg='intrinsic'className='img-2' srcSet='https://tokenmaker.eattheblocks.com/_next/image?url=%2Fimages%2Flogo-token-maker.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2Flogo-token-maker.png&w=640&q=75 2x'
                       alt="Logo" />
                       <noscript>
                       <img alt="Logo" srcSet="/_next/image?url=%2Fimages%2Flogo-token-maker.png&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogo-token-maker.png&amp;w=640&amp;q=75 2x"
                        src="/_next/image?url=%2Fimages%2Flogo-token-maker.png&amp;w=640&amp;q=75"
                         decoding="async" data-nimg="intrinsic"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" 
                          loading="lazy"/>
                       </noscript>
                    </span> */}
                </Link>
                <div className="ms-auto ">
                  <button type='button' className='btn blue-btn'>
                    <span className="inline-block">Connect your Wallet</span>
                  </button>
                </div>

                <div className="ms-auto ">
                  <WalletMultiButton className="btn btn-ghost mr-4"
                    style={{
                      backgroundColor: "#f50058",
                      borderColor: "#f50058",
                      color: "#fff",
                      borderRadius: "40px",
                      justifyContent: "center",
                      padding: "30px 60px"
                    }} />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
