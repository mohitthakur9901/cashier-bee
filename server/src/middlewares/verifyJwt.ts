import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError';



const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.cookie?.split('=')[1];
    console.log(token);
    

   try {
     if (!token) {
         throw new ApiError(401, "Unauthorized: Token missing");
     }
    //  console.log(token);
 
     const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
     if (!decoded) {
         throw new ApiError(401, "Unauthorized");
     }     
     next();
   } catch (error:any) {
     console.log(error);
     next(error);
     return;
    
   }
};

export default verifyToken;