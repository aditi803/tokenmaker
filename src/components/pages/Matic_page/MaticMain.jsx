import {useState} from 'react'
import { MaticMain1 } from './MaticMain1'

import { FinalMain } from '../Main_page/FinalMain'
 export const MaticMain = () => {
    const [showComponent,setShowComponent]= useState(true)
    
  return (
    <>      
{
    showComponent?
    <MaticMain1 setShow={setShowComponent}/>:
    <FinalMain/>
}



    </>
  )
}

