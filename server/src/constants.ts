// Defining SubscriptionType as an object
export const SubscriptionType = {
    MONTHLY: "MONTHLY",
    QUARTERLY: "QUARTERLY",
    HALF_YEARLY: "HALF_YEARLY",
    YEARLY: "YEARLY"
  };
  
  // Creating a method to get all values of SubscriptionType
  export const SubscriptionTypeMethods = Object.values(SubscriptionType);
  
  // Defining UserRole as an object
  export const UserRole = {
    SUPERADMIN: "SUPERADMIN",
    RESTAURANTADMIN: "RESTAURANTADMIN",
    CUSTOMER: "CUSTOMER"
  };
  
  // Creating a method to get all values of UserRole
  export const UserRoleMethods = Object.values(UserRole);
  
  // Defining FoodOrderStatus as an object
  export const FoodOrderStatus = {
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED",
    IN_PROGRESS: "IN_PROGRESS",
    READY_TO_PICKUP: "READY_TO_PICKUP",
    COMPLETED: "COMPLETED",
    CANCELED: "CANCELED"
  };
  
  // Creating a method to get all values of FoodOrderStatus
  export const FoodOrderStatusMethods = Object.values(FoodOrderStatus);
  
  // Defining OnRampStatus as an object
  export const OnRampStatus = {
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE",
    PROCESSING: "PROCESSING"
  };
  
  // Creating a method to get all values of OnRampStatus
  export const OnRampStatusMethods = Object.values(OnRampStatus);
  