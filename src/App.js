import Header from './components/pages/landing_page/Header.jsx';
import Main from './components/pages/landing_page/Main';
import Footer from './components/pages/landing_page/Footer';
import 'react-toastify/dist/ReactToastify.css';
// import EthHeader from './'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { EthHeader } from './components/pages/Eth_page/EthHeader.jsx';
import { EthMain } from './components/pages/Eth_page/EthMain.jsx';
import { BnbMain } from './components/pages/Bnb_page/BnbMain.jsx';
import { MaticMain } from './components/pages/Matic_page/MaticMain.jsx';
import { FinalMain } from './components/pages/Main_page/FinalMain.jsx';
import { FrontMain } from './components/pages/Front_page/FrontMain.jsx'
import { EtherProvider } from "./contexts/EthContext/EtherProvider"

import { useHelper } from './contexts/HelperContext/HelperContext.jsx';


import ScrollButton from './components/Layots/ScrollButton.jsx';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { HEADER } from './api/Api.js';
import { SolanaMain } from './components/pages/solana_page/SolanaMain.jsx';
import  WalletAdapter  from './contexts/solanaContext/SolanaContext.jsx';
import {MoonRiverMain} from './components/pages/MoonRiver_page/MoonRiverMain';
import { AvaxMain } from './components/pages/Avax_page/AvaxMain.jsx';
// import StepContext from './components/pages/MoonRiver_page/StepContext.jsx';

function App(props) {
  // console.log(props,"props appjs")
  const {net,setNet}  = props;


  const [header, setHeader] = useState([])
  const imageBaseUrl = "https://tokenmaker-apis.block-brew.com/images/"
  useEffect(() => {
    const fetchData = async () => {
      const respHeader = await axios.get(HEADER)
      setHeader(respHeader.data.msg)
      // console.log(respHeader.data.msg,"Header resp")
      const favicon = document.getElementById("favicon");
      document.title = respHeader?.data?.msg?.investorDocumentTitle;
      // console.log(respHeader?.data?.msg?.investorDocumentTitle,"ttile")
      favicon.href = `${imageBaseUrl}${respHeader.data.msg.investorFavicon}`;
    }
    fetchData()
  }, [])


  return (

    <EtherProvider>
      {/* <StepContext> */}
          {/* <WalletAdapter> */}
      <Router>
        <Routes>

          <Route path='/generator' element={ <Main header={header}/>} />
          <Route path='/' element={[<FrontMain />, <ScrollButton />]} />

          <Route path='/generator/ethereum' element={ <EthMain />} />
          <Route path='/generator/binancesmartchain' element={[<EthHeader header={header} />, <BnbMain />, <Footer />]} />
          <Route path='/generator/polygon' element={[<EthHeader header={header} />, <MaticMain />, <Footer />]} />
          <Route path='/generator/solana' element={[<SolanaMain  net ={net} setNet = {setNet}/>]} />
          <Route path='/generator/moonriver' element={[<MoonRiverMain />]} />
          <Route path='/generator/avax' element={[<AvaxMain />]} />
        </Routes> 
      </Router>
          {/* </WalletAdapter> */}
          {/* </StepContext> */}
    </EtherProvider>
  )
}
export default App;
