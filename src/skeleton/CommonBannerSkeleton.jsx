import { Skeleton } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const CommonBannerSkeleton = () => {


    return (
        <div className="container">
            <h1>
                <span className="sub-highlight">
                    <Skeleton variant="rectangular" width={800} height={40} />
                </span>
            </h1>
            <p>
                {/* Easily deploy your Smart Contract for a Standard, Capped, */}
                <Skeleton variant="rectangular" width={993} height={15} />

                {/* Mintable, Burnable {bannerValue} Token. */}
                <Skeleton variant="rectangular" width={400} height={15} className="mt-2"/>

                <br />
                {/* No login. No setup. No Coding required. */}
                {/* <Skeleton variant="rectangular" width={180} height={35} /> */}

            </p>
        </div>
    )
}

export default CommonBannerSkeleton