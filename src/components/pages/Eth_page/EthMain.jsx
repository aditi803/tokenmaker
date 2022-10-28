import {useState} from 'react'
import { EthMain1 } from './EthMain1'

import { FinalMain } from '../Main_page/FinalMain'
 export const EthMain = () => {
    const [showComponent,setShowComponent]= useState(true)
    
  return (
    <>      
{
    showComponent?
    <EthMain1 setShow={setShowComponent}/>:
    <FinalMain/>
}



    </>
  )
}

