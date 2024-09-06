import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface RestaurantState {
    map(arg0: (item: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id : number
    name : string
    addressId : number
    isDeleted : boolean
    createdAt : Date
    updatedAt : Date
}

const initialState: RestaurantState = {
    id : 0,
    name : "",
    addressId : 0,
    isDeleted : false,
    createdAt : new Date(),
    updatedAt : new Date()
};


const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        setRestaurant: (state, action: PayloadAction<RestaurantState>) => {
            return {...state , ...action.payload}
        },
        clearRestaurant: () => {
            return {...initialState}
        }
    }
});


export const { setRestaurant, clearRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;