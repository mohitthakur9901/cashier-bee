import {config} from 'dotenv';
import { app } from './app';

config({
    path: './.env'
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

