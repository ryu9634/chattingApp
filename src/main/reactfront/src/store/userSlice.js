import { createSlice } from "@reduxjs/toolkit";

const userNickName = createSlice({
    name : "userNickName",
    initialState : {nickName : ""},
    reducers : {
        setNickName(status,action){
            status.nickName = action.payload;
        }
    }
})

export let {setNickName} = userNickName.actions;

export default userNickName;