// model Restaurant {
//     id          Int       @id @default(autoincrement())
//     name        String
//     addressId   Int
//     createdAt   DateTime  @default(now())
//     createdBy   String
//     modifiedAt  DateTime  @updatedAt
//     modifiedBy  String
//     isDeleted   Boolean   @default(false)
//     address     Address  @relation(fields: [addressId], references: [id])
//     menuItems   MenuItem[]
//     orders      Order[]
//     UserRestaurant UserRestaurant[]
//   }

export interface Restaurant {
    id: number;
    name: string;
    addressId: number;
    createdAt: Date;
    createdBy: string;
    modifiedAt: Date;
    modifiedBy: string;
    isDeleted: boolean;
}