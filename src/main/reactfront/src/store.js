import { configureStore } from '@reduxjs/toolkit'
import authenticationTimer from './store/timeSlice.js'
import userInfo from './store/userSlice.js'




export default configureStore({
  reducer: {
    authenticationTimer : authenticationTimer.reducer,
    userInfo: userInfo.reducer
   }
}) 