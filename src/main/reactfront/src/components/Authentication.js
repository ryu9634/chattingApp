import './css/authentication.css'
import arrowRight from './../images/buttons/arrow-right.png';
import { useEffect, useState } from 'react';

function Authentication(){
    const [inputText,setInputText] = useState('');
    const [alert,setAlert] = useState(false);
    const [complete,setComplete] = useState(false);
    return (
        <div className='authentication'>
            <div className='authentication__text-box'>
                <h3 className='authentication__bold-text'>기기 전화번호를 입력해주세요.</h3>
                <p className='authentication__small--text'>국가 코드를 확인하고 전화번호를 입력하세요.</p>
            </div>
            <form className='authentication__form'>
                <div className='authentication__row'>
                    <div className='authentication__column'>대한민국(Republic of korea)</div>
                    <div className='authentication__column'><img src={arrowRight} alt='오른쪽 화살표'/></div>
                </div>
                <div className='authentication__row'>
                    <div className='authentication__column'>+82 <span className='vertical-line' ></span></div>
                    <div className='authentication__column'><input type='text' maxLength={11} onChange={(e)=>{
                        //인풋태그에 숫자만 넣게하는 정규식
                        const regex = /^[0-9\b]+$/;
                        if (regex.test(e.target.value)){
                            setInputText(e.target.value);
                            setAlert(false);
                            if(inputText.length == 10){
                                setComplete(true);
                            }else{
                                setComplete(false);
                            }
                        }else{
                            e.target.value.length <= 1? e.target.value = "" :
                            e.target.value = inputText;
                            setInputText(e.target.value);
                            setAlert(true);
                        }
                        }} /></div>
                </div>
            </form>
                {
                    alert ? <div className='alert-only-number'>휴대폰 번호를 입력하세요</div> : null
                }
            <div className='continue__button'>
                {
                    complete?<button className='main-color__btn margin-top-150'>Continue</button>
                    :<button disabled className='main-color__btn margin-top-150'>Continue</button>
                }
                
            </div>
        </div>
    )
}


function CheckAuthenticationModal(){
    return(
        <>
        
        </>
    );
}

export default Authentication;