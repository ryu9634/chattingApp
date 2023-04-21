import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './css/Verification.css';
import { decreaseTime, resendCountUp } from '../store/timeSlice.js';

function Verification(props){
    const [number,setNumber] = useState(new Array(6).fill());
    const [alert,setAlert] = useState(false);
    const refs =[useRef(),useRef(),useRef(),useRef(),useRef(),useRef()];
    const [isContinue,setIsContinue] = useState(false);
    //시간 관리 상태 redux
    const dispatch = useDispatch();
    const {time, isResendMessageAble,isDecreasing} = useSelector((state)=>state.authenticationTimer);
    //인증 시간 값
    useEffect(()=>{     
        let timer;
        if(isDecreasing){
            timer = setInterval(()=>{
                dispatch(decreaseTime());
            },1000);
        }
        return (()=>{
            clearInterval(timer);
        })
        
    },[dispatch,isDecreasing])
    return(
        <>
            <div className="register verifictions">
                <div className='register__row'>
                    <div className='text-box mg-t-100 mg-bt-30'>
                            <h3 className='text-box__text--bold mg-bt-10'>인증번호 입력</h3>
                            <p className='text-box__text--small'>국가 코드를 확인하고 전화번호를 입력하세요.</p>
                    </div>
                    <div className='verifictions__numbers'>
                        {
                            number.map((element, i)=>{
                                return(
                                    <Numbers key={i} refs={refs} i={i} setAlert={setAlert} alert={alert} number={number} setNumber={setNumber} setIsContinue={setIsContinue} /> 
                                    )
                            })
                        }
                    </div>
                    {alert&&<AlertNumber/>}
                </div>
                <div className='register__row'>
                    <div className='verifictions__timerBox'>
                        {isResendMessageAble?
                        <span className='verifictions__sendMessage' onClick={()=>{dispatch(resendCountUp())}}>인증번호 다시 받기</span>
                        :<span className='verifictions__sendMessage verifictions__send--disabled'>인증번호 다시 받기</span>}
                        <span className='verifictions__timer '>{time} 초</span>
                    </div>
                    <div className='buttonFlexBox mg-t-5 mg-bt-30'>
                        {isContinue && isDecreasing ? <button className='success__button' onClick={()=>{props.navigator("/SetNickName")}}>Continue</button>:
                        <button className='success__button' disabled>Continue</button>}
                    </div>
                </div>
            </div>
        </>
    )
}


function Numbers(props){
    function goToTheNextInput(e){
        const regex = /^[0-9\b]+$/;
                if(regex.test(e.target.value)){
                    //자동으로 다음으로 넘기기
                    props.number[props.i] = e.target.value;
                    props.setNumber(props.number);
                    props.setAlert(false);
                    if(props.i<5){
                        props.refs[props.i+1].current.focus();
                    }else{
                        props.setIsContinue(true);
                    }
                }else{
                    e.target.value = '';
                    props.setAlert(true);
                }
    }

    function goToBackInput(e){
        if(e.keyCode === 8){
            if(props.i === 0){
                props.refs[props.i].current.focus();
                props.setIsContinue(false);
            }else{
                e.target.value = null;
                props.refs[props.i-1].current.focus();
                props.setIsContinue(false);
            }
        }
    }
    return(
        <>
            <input type='text' inputMode='numeric' className='verifictions__number' maxLength={1} ref={props.refs[props.i]} onChange={goToTheNextInput} onKeyDown={goToBackInput} />
        </>
    )
}


function AlertNumber (){
    return(
        <>
            <div className='alertBox--flex mg-t-10'>
                <span className='alert-only-number'>숫자를 입력하세요</span>
            </div>
        </>
    )
}

export default Verification;