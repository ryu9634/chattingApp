import './css/SetNickName.css';

function SetNickName(props){
    return(
        <>
            <div className="register setNickName">
                <div className="register__row">
                    <div className='text-box mg-t-100 mg-bt-30'>
                                <h3 className='text-box__text--bold mg-bt-10'>닉네임 설정</h3>
                                <p className='text-box__text--small'>친구들에게 보일 멋진 닉네임을 설정하세요!</p>
                    </div>
                    <div className="setNickName__input">
                        <input type="text" maxLength={20} placeholder="크루와짱짱맨"/>
                    </div>
                </div>
                <div className="register__row">
                    <div className='buttonFlexBox mg-bt-30'>
                        <button className='success__button'>Start Chat</button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default SetNickName;

// 화면닉네임 설정 창을 만들고 Countinue
