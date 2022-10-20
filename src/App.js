import Header from './components/pages/landing_page/Header.jsx';
import Main from './components/pages/landing_page/Main';
import Footer from './components/pages/landing_page/Footer';
import 'react-toastify/dist/ReactToastify.css';
// import EthHeader from './'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import { EthHeader } from './components/pages/Eth_page/EthHeader.jsx';
import { EthMain } from './components/pages/Eth_page/EthMain.jsx';
import { BnbMain } from './components/pages/Bnb_page/BnbMain.jsx';
import { MaticMain } from './components/pages/Matic_page/MaticMain.jsx';
import { FinalMain } from './components/pages/Main_page/FinalMain.jsx';
import {FrontMain} from './components/pages/Front_page/FrontMain.jsx'
import {EtherProvider} from "./contexts/EthContext/EtherProvider"

import ScrollButton from './components/Layots/ScrollButton.jsx';
function App() {
  
  return (

  <EtherProvider>

  <Router>
    <Routes>
    {/* <div className="layout-container main-layout header-fixed"></div> */}

      <Route path='/generator' element={[<Header/>,<Main/>,<Footer/>]} />
      <Route path='/' element={[<EthHeader/>,<FrontMain/>,<Footer/>,<ScrollButton/>]} />

      <Route path='/generator/ethereum'element={[<EthHeader/>,<EthMain/>,<Footer/>]} />
      <Route path='/generator/bsc'element={[<EthHeader/>,<BnbMain/>,<Footer/>]} />
      <Route path='/generator/polygon'element={[<EthHeader/>,<MaticMain/>,<Footer/>]} />
      <Route path='/generator/final'element={[<EthHeader/>,<FinalMain/>,<Footer/>]} />
    </Routes>
  </Router>
  {/* <Header />
  <Main />
  <Footer /> */}
  </EtherProvider> 
    );
}

export default App;
