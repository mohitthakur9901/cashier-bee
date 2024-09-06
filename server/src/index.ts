import {config} from 'dotenv';
import { app } from './app';


config({
    path: './.env'
}); 

try {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    
} catch (error) {
    console.error(`Failed to start server: ${(error as Error).message}`);
    process.exit(1);
}