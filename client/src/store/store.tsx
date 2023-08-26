import { configureStore } from "@reduxjs/toolkit";
import socialLinkReducer from "./SocialLinkSlice";

const store = configureStore({
    reducer: {
        socialLink: socialLinkReducer,
    }
})

export default store