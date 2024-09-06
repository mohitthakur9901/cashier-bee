import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app = express();


/* Middleware
*/

app.use(cors({
    origin: '*',
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
Routes
*/

import authRoute from './routes/AuthRoute'
import restaurantRoute from './routes/RestaurantRoute'

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/restaurant' , restaurantRoute)


export {app}