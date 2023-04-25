import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name : "userInfo",
    initialState : {nickName : "",
                    phoneNumber : ""},
    reducers : {
        setUserNickName(status,action){
            status.nickName = action.payload;
        },
        setPhoneNumber(status,action){
            status.phoneNumber = action.payload;
        }
    }
})

export let {setUserNickName, setPhoneNumber} = userInfo.actions;

export default userInfo;