import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: String,
    description: String,
    image: String
});

const productSchema = new Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    categoryId: String
});

export const categoriesModel = mongoose.model('categories', categorySchema);
export const productsModel = mongoose.model('Products', productSchema);