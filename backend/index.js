// index.js
import express from "express";
import 'dotenv/config';
import { PORT } from "./config.js";

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Mern Stack Test')
});

app.listen(PORT, () => {
  console.log(`App is listening to port : ${PORT}`);
});
