import React,{useState} from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import styles from './Auth.module.css';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
}

export default function Auth() {
    const [step, setStep] = useState(1);
  const Step = steps[step];
  
  function onNext() {
    setStep(step+1);
}
    return (
        <div>
            {<Step onNext={onNext}/>}
    </div>
  )
}
