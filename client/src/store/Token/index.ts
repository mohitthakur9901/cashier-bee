import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
    token: string | null;
}

const initialState: TokenState = {
    token: null,
};

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
        },
    },
});


export const {clearToken ,setToken} = tokenSlice.actions
export default tokenSlice.reducer;
