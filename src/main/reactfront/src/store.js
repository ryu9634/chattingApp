import { configureStore } from '@reduxjs/toolkit'
import authenticationTimer from './store/timeSlice.js'




export default configureStore({
  reducer: {
    authenticationTimer : authenticationTimer.reducer
   }
}) 