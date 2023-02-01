import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const CommonBanner = ({setLoader, loader}) => {

    const [data, setData] = useState([])
    const getNetworks = () => {
        axios.get("https://tokenmaker-apis.block-brew.com/commission/commissiondetails")
            .then((res) => {
                setData(res.data.msg)
                // console.log(res.data.msg.items, "Aditii ddata jo ni aata ");
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
        // console.log("123")
        // console.log(data, "Netwrok data")
        // console.log(location.pathname, "Network")
        await data.map((value) => {
            //   console.log(value, "Banner Data above");
            if ((value.parentNetworkName.split(" ").join("").toLowerCase()) === location.pathname.replace("/generator/", "")) {
                // console.log(value, "Banner Data under");
                return setBannerValue(value.parentNetworkName)
            }
        })
    }

    useEffect(() => {
        networkData()
    },{loader, setLoader})

    // console.log(data, "Network data1")

    // console.log(bannerValue, "Banner Value")


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