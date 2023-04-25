import './css/Authentication.css'
import arrowRight from './../images/buttons/arrow-right.png';
import { useEffect, useState } from 'react';
import { setPhoneNumber } from '../store/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';

function Authentication(props){
    const dispatch = useDispatch();
    const {phoneNumber} =useSelector((state)=> state.userInfo);
    const [alert,setAlert] = useState(false);
    const [complete,setComplete] = useState(true);
    const [modalAuthentication, setModalAuthentication] = useState(false);

    useEffect(()=>{
        if(phoneNumber.length === 11){
            setComplete(false);
        }else{
            setComplete(true);
        }
    },[phoneNumber])

    function checkRegex(event){
        //인풋태그에 숫자만 넣게하는 정규식
        const regex = /^[0-9\b]+$/;
        let value = event.target.value;
        if (regex.test(value)){
            dispatch(setPhoneNumber(value));
            setAlert(false);
        }else{
            value.length <= 1? value = "" :
            value = phoneNumber;
            dispatch(setPhoneNumber(value));
            setAlert(true);
        }
    }

    return (
        <>
            {/* 모달창 띄우는 곳 */}
            { modalAuthentication && <CheckAuthenticationModal navigator={props.navigator} setModalAuthentication ={setModalAuthentication} phoneNumber={phoneNumber} />}
            <div className='authentication'>
                <div className='authentication__text-box mg-t-100 mg-bt-30'>
                    <h3 className='authentication__bold-text mg-bt-10'>기기 전화번호를 입력해주세요.</h3>
                    <p className='authentication__small--text'>국가 코드를 확인하고 전화번호를 입력하세요.</p>
                    <form className='authentication__form mg-t-20'>
                        <div className='authentication__row'>
                            <div className='authentication__column'>대한민국(Republic of korea)</div>
                            <div className='authentication__column'><img src={arrowRight} alt='오른쪽 화살표'/></div>
                        </div>
                        <div className='authentication__row'>
                            <div className='authentication__column'>+82 <span className='text-gray-verticalLine' ></span></div>
                            <div className='authentication__column'><input value={phoneNumber} type='text' placeholder='01011112222' maxLength={11} onChange={checkRegex}/></div>
                        </div>
                    </form>
                    {alert && <div className='alert-only-number mg-t-10'>휴대폰 번호를 입력하세요</div>}
                </div>
                <div className='buttonFlexBox mg-bt-30'>
                    <button className='success__button' onClick={()=>{setModalAuthentication(true)}} disabled={complete}>Continue</button>
  
                </div>
            </div>
        </>
    )
}


function CheckAuthenticationModal(props){
    return(
        <>
            <div className='modal modal-Authentication'>
                <div className='modal__body'>
                    <div className='modal__text-box'>
                        <span className='modal-Authentication__phoneNumber'>{`+82 ${props.phoneNumber}`}</span>
                        <p className='modal__small--text mg-t-10'>이 전화번호로 SMS 인증번호를 보냅니다.</p>
                    </div>
                    <div className='buttonFlexBox'>
                        <button className='success__button mg-t-10' onClick={()=>{props.navigator('/Verification')}}>전송</button>
                        <button className='cancle__button mg-t-10' onClick={()=>{props.setModalAuthentication(false)}}>취소</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Authentication;