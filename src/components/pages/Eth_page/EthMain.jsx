import {useState} from 'react'
import { EthMain1 } from './EthMain1'
import { FinalMain } from '../Main_page/FinalMain'
import { EthHeader } from './EthHeader'
import Footer from '../landing_page/Footer'
import { StepContext } from "./StepContext"
 export const EthMain = () => {

    const [showComponent,setShowComponent]= useState(true)
    
  return (
    <>  
    <EthHeader />    
{ showComponent?(
    <StepContext setShow={setShowComponent}></StepContext>
    ):(
      <FinalMain />

    )
}

  <Footer />


    </>
  )
}



