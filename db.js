import { mongoose } from 'mongoose';
const DB_NAME = 'ecomBuyNow';
const mongoString = `mongodb://localhost:27017/${DB_NAME}`;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
});