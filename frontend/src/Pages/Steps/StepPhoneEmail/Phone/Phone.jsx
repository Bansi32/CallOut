import React,{useState} from 'react'
import Card from '../../../../Components/Shared/Card/Card';
import Button from '../../../../Components/Shared/Button/Button';
import TextInput from '../../../../Components/Shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';
import { sendOtp } from '../../../../Http/index';
import { useDispatch } from 'react-redux';
import { setOtp } from '../../../../store/authSlice';

export default function Phone({onNext}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  async function submit() {
    //server req
    const { data } = await sendOtp({ phone: phoneNumber });
    //console.log(data);
    dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    onNext();
  }
  return (
      <>
          <Card title="Enter your mobile number" icon="phone(vector)">
          <TextInput value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>  
        <div>
          <Button onClick={submit} text="Next"/>
        </div>
        <p className={styles.buttonPara}>By  entering your number you are agreeing with our Terms of Services and Privacy Policy. Thanks!</p>
        </Card> 
    </>
  )
}
