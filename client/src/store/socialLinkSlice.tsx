import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../types/FileTypes";
import { Dispatch } from "redux";

const socialLinkSlice = createSlice({
    name: 'socialLink',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
        loading: false,
    },
    reducers: {
        setSocialLink(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
})

export const { setSocialLink, setStatus } = socialLinkSlice.actions;
export default socialLinkSlice.reducer;

// Thunks
export function fetchSocialLink () {
    return async function fetchSocialLinkThunk (dispatch: Dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/getSocialLink`);
            const data = await res.json();
            dispatch(setSocialLink(data));
            dispatch(setStatus(STATUSES.IDLE));
            // console.log("SocialLink data =>", data)
        } catch (error) {
            dispatch(setStatus(STATUSES.FAILED));
        }
    }
}
