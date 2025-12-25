import { configureStore } from "@reduxjs/toolkit";

import reducer from "./cartSliice";


export const store = configureStore({
    reducer:{
        cart: reducer
    }
});