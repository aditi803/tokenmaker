import React, { useEffect, useState } from 'react'
import { PRIVACY } from '../../api/Api'
import axios from "axios"
import Header from '../pages/landing_page/Header'
import SelectBanner from '../pages/Eth_page/SelectBanner'
import Footer from '../pages/landing_page/Footer'
import parse from 'html-react-parser';
import PrivacySkeleton from '../../skeleton/PrivacySkeleton'

const PrivacyPolicy = () => {

  const [terms, setTerms] = useState({ content: '' })
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    fetchData()
  }, [setTerms])

  const fetchData = async () => {
    await axios
      .get(PRIVACY)
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
      {loader ? <PrivacySkeleton /> :
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>{terms.title}</h1>
              <br />
              {parse(terms.content.trim())}
            </div>
          </div>
        </div>
      }

      <Footer />
    </>

  )
}

export default PrivacyPolicy