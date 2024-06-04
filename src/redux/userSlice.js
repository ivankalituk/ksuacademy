import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_nickName: null,
    user_imgUrl: null,
    user_role: null,
    user_id: null,
    user_email: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user_nickName = action.payload.user_nickName;
            state.user_imgUrl = action.payload.user_imgUrl;
            state.user_role = action.payload.user_role;
            state.user_id = action.payload.user_id;
            state.user_email = action.payload.user_email
        },
        
        clearUser: (state, action) => {
            state.user_nickName = null;
            state.user_imgUrl = null;
            state.user_role = null;
            state.user_id = null;
            state.user_email = null;
        },

        setUserNickname: (state, action) => {
            state.user_nickName = action.payload.user_nickName
        },

        setUserImgPath:  (state, action) => {
            state.user_imgUrl = action.payload.user_imgUrl
        }
        
    }
})

export const {setUser, clearUser, setUserNickname, setUserImgPath} = userSlice.actions
export default userSlice.reducer