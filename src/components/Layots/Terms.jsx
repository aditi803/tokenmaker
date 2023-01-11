import React, { useEffect, useState } from 'react'
import { TERMS } from '../../api/Api'
import axios from "axios"
import parse from 'html-react-parser';
import SelectBanner from '../pages/Eth_page/SelectBanner';
import Footer from '../pages/landing_page/Footer';
import Header from '../pages/landing_page/Header';
import TermsSkeleton from '../../skeleton/TermsSkeleton';

const Terms = () => {
    const [terms, setTerms] = useState({ content: '' })
    useEffect(() => {
        fetchData()
    }, [setTerms])
    const [loader, setLoader] = useState(true)

    const fetchData = async () => {
        await axios
            .get(TERMS)
            .then(res => {
                setTerms(res.data.msg)
                // console.log(res.data.msg, "?>>>>>>>>>>>>>>>>>>terms msg")
                setLoader(false)
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <Header />
            <SelectBanner />
            {loader ? <TermsSkeleton /> :
                <div className="page-content mt-5">
                    <div className='container mb-5 pt-lg-4 pb-lg-5'>
                        <div className='row'>
                            <div className='col-12'>
                                <h2 className='page-title mb-4'>{terms.title}</h2>
                                <p>{parse(terms.content.trim())}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

<Footer />
        </>

    )
}

export default Terms