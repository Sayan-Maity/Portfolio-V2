import { configureStore } from "@reduxjs/toolkit";
import socialLinkReducer from "./socialLinkSlice";

const store = configureStore({
    reducer: {
        socialLink: socialLinkReducer,
    }
})

export default store