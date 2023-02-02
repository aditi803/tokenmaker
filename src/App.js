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
import WalletAdapter from './contexts/solanaContext/SolanaContext.jsx';
import { MoonRiverMain } from './components/pages/MoonRiver_page/MoonRiverMain';
import { AvaxMain } from './components/pages/Avax_page/AvaxMain.jsx';
import Terms from './components/Layots/Terms.jsx';
import PrivacyPolicy from './components/Layots/PrivacyPolicy.jsx';
import { CeloMain } from './components/pages/celo_page/celoMain.jsx';
import { HecoMain } from './components/pages/Heco_page/hecoMain.jsx';
import { OptimismMain } from './components/pages/Optimism_page/optimismMain.jsx';
import Common from './components/pages/Common/CommonMain1.js';
import { CommonMain } from './components/pages/Common/CommonMain.js';
import { IotexMain } from './components/pages/Iotex_page/IotexMain.jsx';
import { FantomMain } from './components/pages/Fantom_page/FantomMain.jsx';
import FuseMain1 from './components/pages/Fuse_page/FuseMain1.jsx';
import { FuseMain } from './components/pages/Fuse_page/FuseMain.jsx';
// import  PrivacyPolicy  from './components/Layots/PrivacPolicy.jsx';
// import StepContext from './components/pages/MoonRiver_page/StepContext.jsx';

function App(props) {
  // console.log(props,"props appjs")
  const { net, setNet } = props;
  const [networkPath, setNetworkPath] = useState([])
  const [netHref, setNetHref] = useState([])

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


  const getNetworkHanlder = () => {
    // changeApiStatus(true)
    axios
      .get("https://tokenmaker-apis.block-brew.com/network/networkdetails")
      .then((res) => {
        setNetworkPath(res.data.msg.items);
        setNetHref(res.data.msg.items.filter((value) =>
          value.categoryName !== "Solana"
        ))
        // console.log(
        //   res.data.msg.items,
        //   "network path app file"
        // );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNetworkHanlder()
  }, [networkPath])


  // let networkHref = networkPath.filter((value) =>
  //   value.categoryName !== "Solana"
  // )

  return (

    <EtherProvider>
      {/* <StepContext> */}
      {/* <WalletAdapter> */}
      <Router>
        <Routes>

          <Route path='/generator' element={<Main header={header} />} />
          <Route path='/' element={[<FrontMain />, <ScrollButton />]} />

          <Route path='/generator/solana' element={[<SolanaMain net={net} setNet={setNet} />]} />

          {netHref.length > 0 ? (<>

            {netHref.map((networkVal) => {
              return <Route path={`/generator/${networkVal.hrefPath}`} element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} />
            })}

          </>) : ""}



          {/* <Route path='/generator/binancesmartchain' element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} />
          <Route path='/generator/moonriver' element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} />

          <Route path='/generator/ethereum' element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} />

          <Route path='/generator/polygon' element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} />

          <Route path='/generator/avalanche' element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} />

          <Route path='/generator/celo' element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} />

          <Route path='/generator/heco' element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} />

          <Route path='/generator/optimism' element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} />

          <Route path='/generator/IoTeX' element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} />

          <Route path='/generator/Fantom' element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} />

          <Route path='/generator/Fuse' element={[<EthHeader header={header} />, <CommonMain />, <Footer />]} /> */}

          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />

          {/* <Route path='/generator/IoTeX' element={[<EthHeader header={header} />, <IotexMain />, <Footer />]} /> */}

        </Routes>
      </Router>
      {/* </WalletAdapter> */}
      {/* </StepContext> */}
    </EtherProvider >
  )
}
export default App;
