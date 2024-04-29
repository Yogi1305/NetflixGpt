import { configureStore } from "@reduxjs/toolkit";
import userReducer from"./userSlice"

const appstore=configureStore({
   reducer:{
    name:userReducer,
   },
});
export default appstore;