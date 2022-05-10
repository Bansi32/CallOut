import React,{useState} from 'react';
import Card from '../../../Components/Shared/Card/Card';
import Button from '../../../Components/Shared/Button/Button';
import TextInput from '../../../Components/Shared/TextInput/TextInput';
import { useDispatch,useSelector } from 'react-redux';
import { setName } from '../../../store/activationSlice';
import style from './StepName.module.css';
import styles from '../../../Pages/Home/Home.module.css';

export default function StepName({ onNext }) {
  const { name } = useSelector((state) => state.activate);
  const dispatch = useDispatch();
  const [fname, setFName] = useState(name);
  function nextStep() {
    if (!fname) {
      return;
    }
    else {
      dispatch(setName(fname)); 
      onNext();
    }
  }
  return (
      <>
    <div className={styles.cardWrapper}>
        
            <Card title="Enter your name" icon="smart" >
              <TextInput value={fname} onChange={(e) => setFName(e.target.value)} />
          <div>
            <Button onClick={nextStep} text="Next" />
          </div>
          <p className={style.buttonPara}>
            At Call Out we use real names.
          </p>
            </Card>
      </div>
    </>
  )
}
