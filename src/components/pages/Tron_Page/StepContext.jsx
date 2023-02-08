import React,{useState} from 'react'
import TronMain1 from './TronMain1';

const multiStepContext = React.createContext();

const StepContext = (props) => {

    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState({
        tokenType: '',
        tokenName: '',
        tokenSymbol:'',
        decimals: '',
           
        });
    const [finalData, setFinalData] = useState({});
    const [submitted,setSubmitted] = useState(false);

    const submitData = () => {
        setSubmitted(true);
        setFinalData({...finalData, userData});
        setUserData('');
        setStep(1)
    }

  return (
    <div>
        <multiStepContext.Provider
            value={{
                currentStep,setStep,
                userData, setUserData,
                finalData, setFinalData, submitData,
                submitted,setSubmitted
            }}>
            <TronMain1 setShow={props.setShow}/>
        </multiStepContext.Provider>
    </div>
  )
}

export {multiStepContext,StepContext}