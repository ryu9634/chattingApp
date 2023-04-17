import logo1 from './../images/logo/LINE_logo1.png';
import './css/StartScreen.css'


function StartScreen(props){
    return(
        <>
        <div className='start-screen'>
            <div className='start-screen__elements mg-t-200'>
                <img src={logo1} alt='로고' className='logo mg-bt-10'/>
                <h3 className='mg-bt-5'>환영합니다.</h3>
                <span>무료 메시지와 영상통화, 음성통화를 부담 없이 즐겨보세요!</span>
            </div>
            <div className='buttonFlexBox mg-bt-30'>
                <button className='success__button' onClick={()=>{props.navigator("/Authentication")}}>Start Messaging</button>
            </div>
        </div>
        </>
    )
}

export default StartScreen;