import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserState {
    id : number,
    profileImg : string,
    username : string ,
    email : string,
    phone : string
    isVerified :boolean,
    UserRole : string
    createdAt: Date;
    updatedAt: Date;
    isDeleted:boolean
    restaurantId:string
}

const initialState: UserState = {
    id : 0,
    profileImg : "",
    username : "",
    email : "",
    phone : "",
    isVerified : false,
    UserRole: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    isDeleted: false,
    restaurantId: ""


};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return {...state , ...action.payload}
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
