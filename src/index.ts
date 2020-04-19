import cors from 'cors';
import express from 'express';
import * as dotenv from "dotenv";
import mongoose from 'mongoose';
import helmet from "helmet";
import {getProductList} from './product-crud';

dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
    process.exit(1);
 }
 
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/codeindepth");
console.log(`Connecting to MONGO`);
if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true);
}

 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

app.get('/products', getProductList);