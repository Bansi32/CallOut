import React,{useState} from 'react'
import Card from '../../../../Components/Shared/Card/Card';
import Button from '../../../../Components/Shared/Button/Button';
import TextInput from '../../../../Components/Shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';

export default function Email({onNext}) {
  const [email, setEmail] = useState('');
  return (
      <>
      <Card title="Enter your email" icon="ema">
        <TextInput value={email} onChange={(e)=>setEmail(e.target.value)}/>  
        <div>
            <Button onClick={onNext} text="Next"/>
        </div>
        <p className={styles.buttonPara}>By entering your number you are agreeing with our Terms of Services and Privacy Policy. Thanks!</p>

          </Card> 
    </>
  )
}
