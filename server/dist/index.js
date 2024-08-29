"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = require("./app");
(0, dotenv_1.config)({
    path: './.env'
});
app_1.app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
