import React,{useState} from 'react';
import styles from './StepOtp.module.css';
import Card from '../../../Components/Shared/Card/Card';
import TextInput from '../../../Components/Shared/TextInput/TextInput';
import Button from '../../../Components/Shared/Button/Button';
import { verifyOtp } from '../../../Http';
import { useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';

export default function StepOtp() {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const {phone,hash} = useSelector((state) => state.auth.otp);
  async function submit() {
    try {
      const { data }= await verifyOtp({otp,phone,hash})
      console.log(data);
      dispatch(setAuth(data));

    }
    catch (e)
    {
      console.log(e);
    }
  }
  return (
      <>
          <div className={styles.cardWrapper}>
            <Card title="Enter the OTP" icon="lock" >
              <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className={styles.actionButtonWrap}>
            <Button onClick={submit} text="Next"/>
          </div>
          <p className={styles.buttonPara}>
            By entering your OTP you are agreeing with our Terms of Services and Privacy Policy. Thanks!  
          </p>
            </Card>
          </div>
    </>
  )
}
