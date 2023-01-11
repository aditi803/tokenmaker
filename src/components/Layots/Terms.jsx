import React, { useEffect, useState } from 'react'
import { TERMS } from '../../api/Api'
import axios from "axios"
import parse from 'html-react-parser';
import SelectBanner from '../pages/Eth_page/SelectBanner';
import Footer from '../pages/landing_page/Footer';
import Header from '../pages/landing_page/Header';

const Terms = () => {
    const [terms, setTerms] = useState({ content: '' })
    useEffect(() => {
        fetchData()
    }, [setTerms])

    const fetchData = async () => {
        await axios
            .get(TERMS)
            .then(res => {
                setTerms(res.data.msg)
                // console.log(res.data.msg, "?>>>>>>>>>>>>>>>>>>terms msg")
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <Header />
            <SelectBanner />
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>{terms.title}</h1>
                        <br />
                        {parse(terms.content.trim())}
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Terms