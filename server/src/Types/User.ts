import { UserRole } from "../constants"

export interface RestaurantAdmin {
    profileImg : string,
    username : string
    email : string,
    password : string,
    phone : string,
    UserRole : typeof UserRole.RESTAURANTADMIN
}
