export interface RestaurantAdminSignUp {
    profileImg : string,
    username : string
    email : string,
    password : string,
    phone : string,
}

export interface RestaurantAdminSignIn {
    email : string,
    password : string,
}

export interface UserOtp {
    email : string,
    otp : string,
}