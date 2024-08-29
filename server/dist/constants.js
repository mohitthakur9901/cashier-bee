"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnRampStatusMethods = exports.OnRampStatus = exports.FoodOrderStatusMethods = exports.FoodOrderStatus = exports.UserRoleMethods = exports.UserRole = exports.SubscriptionTypeMethods = exports.SubscriptionType = void 0;
// Defining SubscriptionType as an object
exports.SubscriptionType = {
    MONTHLY: "MONTHLY",
    QUARTERLY: "QUARTERLY",
    HALF_YEARLY: "HALF_YEARLY",
    YEARLY: "YEARLY"
};
// Creating a method to get all values of SubscriptionType
exports.SubscriptionTypeMethods = Object.values(exports.SubscriptionType);
// Defining UserRole as an object
exports.UserRole = {
    SUPERADMIN: "SUPERADMIN",
    RESTAURANTADMIN: "RESTAURANTADMIN",
    CUSTOMER: "CUSTOMER"
};
// Creating a method to get all values of UserRole
exports.UserRoleMethods = Object.values(exports.UserRole);
// Defining FoodOrderStatus as an object
exports.FoodOrderStatus = {
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED",
    IN_PROGRESS: "IN_PROGRESS",
    READY_TO_PICKUP: "READY_TO_PICKUP",
    COMPLETED: "COMPLETED",
    CANCELED: "CANCELED"
};
// Creating a method to get all values of FoodOrderStatus
exports.FoodOrderStatusMethods = Object.values(exports.FoodOrderStatus);
// Defining OnRampStatus as an object
exports.OnRampStatus = {
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE",
    PROCESSING: "PROCESSING"
};
// Creating a method to get all values of OnRampStatus
exports.OnRampStatusMethods = Object.values(exports.OnRampStatus);
