import { useState } from 'react'
import { SolanaMain1 } from './SolanaMain1'
import { FinalMain } from '../Main_page/FinalMain'
import { SolanaHeader } from './SolanaHeader'
import Footer from '../landing_page/Footer'
import { StepContext } from "./StepContext"
export const SolanaMain = () => {

    const [showComponent, setShowComponent] = useState(true)

    return (
        <>
            <SolanaHeader />
            {showComponent ? (
                <StepContext setShow={setShowComponent}></StepContext>
            ) : (
                <FinalMain />
            )}
            <Footer />
        </>
    )
}



