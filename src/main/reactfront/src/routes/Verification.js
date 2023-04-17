import { useState } from 'react';
import './css/Verification.css'


function Verification(props){
    const [number,setNumber] = useState(new Array(6).fill());
    const [alert,setAlert] = useState(false);
    
    let  checkNumber;
    return(
        <>
            <div className="verifictions">
                <div className='verifictions__row'>
                    <div className='text-box mg-t-100 mg-bt-30'>
                            <h3 className='text-box__text--bold mg-bt-10'>인증번호 입력</h3>
                            <p className='text-box__text--small'>국가 코드를 확인하고 전화번호를 입력하세요.</p>
                    </div>
                    <div className='verifictions__numbers'>
                        {
                            number.map((element, i)=>{
                                return(
                                    <input key={i} type='text' className='verifictions__number' name={i} maxLength={1} onChange={(e)=>{
                                        const regex = /^[0-9\b]+$/;
                                        if(regex.test(e.target.value)){
                                            number[i] = e.target.value;
                                            setNumber(number);
                                        }else{
                                            e.target.value = '';
                                            setAlert(true);
                                        }
                                    }}/>
                                    )
                            })
                        }
                    </div>
                </div>
                <div className='verifictions__row'>
                    <div className='verifictions__timerBox'>
                        <span className='verifictions__sendMessage'>인증번호 다시 받기</span>
                        <span className='verifictions__timer '>00:00</span>
                    </div>
                    <div className='buttonFlexBox mg-t-5 mg-bt-30'>
                            <button className='success__button'>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Verification;