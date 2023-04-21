import { configureStore } from '@reduxjs/toolkit'
import authenticationTimer from './store/timeSlice.js'
import userNickName from './store/userSlice.js'




export default configureStore({
  reducer: {
    authenticationTimer : authenticationTimer.reducer,
    userNickName: userNickName.reducer
   }
}) 