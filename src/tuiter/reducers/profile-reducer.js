import { createSlice } from "@reduxjs/toolkit";
import profileData from './profile.json';

const profileSlice = createSlice({
    name: "profile",
    initialState: profileData,
    reducers: {
        updateProfile(state, action) {
            return state = action.payload;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;