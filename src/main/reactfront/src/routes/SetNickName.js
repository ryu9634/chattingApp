import { useEffect, useState } from 'react';
import './css/SetNickName.css';
import { useDispatch, useSelector } from "react-redux";
import { setNickName } from '../store/userSlice.js';


function SetNickName(props){
    const {nickName} = useSelector((state)=>state.userNickName);
    const [isStartChatBtnDisabled,setIsStartChatBtnDisabled] = useState(true);
    const [alert,setAlert] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(nickName.length < 2 || nickName.length >20){
            setIsStartChatBtnDisabled(true);
        }else{
            setIsStartChatBtnDisabled(false)
        }
    },[nickName]);


    return(
        <>
            <div className="register setNickName">
                <div className="register__row">
                    <div className='text-box mg-t-100 mg-bt-30'>
                                <h3 className='text-box__text--bold mg-bt-10'>닉네임 설정</h3>
                                <p className='text-box__text--small'>친구들에게 보일 멋진 닉네임을 설정하세요!</p>
                    </div>
                    <div className="setNickName__input">
                        <NickNameInput dispatch={dispatch} nickName={nickName} alert={alert} setAlert={setAlert}/>
                    </div>
                    {alert&&<div className='alert-only-number mg-t-10'>한글, 영문, 숫자만 입력 가능합니다.</div>}
                </div>
                <div className="register__row">
                    <div className='buttonFlexBox mg-bt-30'>
                        <button className='success__button' disabled={isStartChatBtnDisabled}>Start Chat</button>
                    </div>
                </div>
            </div>
        </>
    )
}

function NickNameInput(props){
    function characterCheck(event){
        const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]+$/;
        let value = event.target.value;
        if(regex.test(value)){
            props.dispatch(setNickName(value));
            props.setAlert(false);
        }else{  
            event.target.value = value.length <= 1? "": props.nickName;
            props.dispatch(setNickName(event.target.value));
            props.setAlert(true);
        }
    }


    return(<>
         <input type="text" onChange={characterCheck}  maxLength={20} minLength={2} placeholder="크루와짱짱맨"/>
    </>)
}


export default SetNickName;

// 화면닉네임 설정 창을 만들고 Countinue
