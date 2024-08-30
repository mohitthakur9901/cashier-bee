import { createClient } from 'redis';
import { config } from 'dotenv';

config({
    path: '../.env' // Adjust the path if necessary
});



const redisClient = createClient({
    url: process.env.REDIS_HOST
});

redisClient.on('error', (err) => {
    console.error('Redis Client Error:', err);
   
})


export {
    redisClient
};