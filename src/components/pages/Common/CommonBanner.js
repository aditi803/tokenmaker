import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const CommonBanner = ({setLoader, loader}) => {

    const [data, setData] = useState([])
    const getNetworks = () => {
        axios.get("https://tokenmaker-apis.block-brew.com/commission/commissiondetails")
            .then((res) => {
                setData(res.data.msg)
                setLoader(false)
            })
            .catch((err) => {
                console.log(err, "Error")
            })
    }


    let location = useLocation()

    useEffect(() => {
        getNetworks()
    }, [setData, loader])

    const [bannerValue, setBannerValue] = useState("")

    const networkData = async () => {
        
        await data.map((value) => {
            if ((value.parentNetworkName.split(" ").join("").toLowerCase()) === location.pathname.replace("/generator/", "")) {
                return setBannerValue(value.parentNetworkName)
            }
        })
    }

    useEffect(() => {
        networkData()
    },{loader, setLoader})

    return (
        <div className="container">
            <h1>
                <span className="sub-highlight">Create Your12 {bannerValue} Token</span>
            </h1>
            <p>
                Easily deploy your Smart Contract for a Standard, Capped,
                Mintable, Burnable {bannerValue} Token.
                <br />
                No login. No setup. No Coding required.
            </p>
        </div>
    )
}

export default CommonBanner