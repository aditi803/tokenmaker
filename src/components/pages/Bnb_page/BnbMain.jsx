import {useState} from 'react'
import BnbMain1 from './BnbMain1'
import { FinalMain } from '../Main_page/FinalMain'
 export const BnbMain = () => {
    const [showComponent,setShowComponent]= useState(true)
    
  return (
    <>      
{
    showComponent?
    <BnbMain1 setShow={setShowComponent}  />:
    <FinalMain />
}



    </>
  )
}

