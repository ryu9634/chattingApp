import { createSlice } from "@reduxjs/toolkit";

const authenticationTimer = createSlice({
    name : "authenticationTimer",
    initialState : {time : 90,
                    resendCount : 0,
                    isResendMessageAble : true,
                    isDecreasing : true,
                },
    reducers : {
        setTime(state){
            state.time = 90;
            // return {time:"90", isReSendMessageAble:true}
        },
        decreaseTime(state){
            if(state.time > 0 ){
                state.time -= 1;
            }else{
                state.isDecreasing = false;
            }
        },
        setIsResendMessageAble(state){
            state.isResendMessageAble = false;
        },
        resendCountUp(state){
            state.resendCount += 1;
            state.isDecreasing = true;
            state.time = 90;
            state.isResendMessageAble = false; 
        }
    }
});


export let {setTime ,setIsReSendMessageAble,resendCountUp, decreaseTime} = authenticationTimer.actions;

export default authenticationTimer;