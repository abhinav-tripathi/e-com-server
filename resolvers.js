import { categoriesModel, productsModel } from './models/model.js';

export const resolvers = {
    Query: {
        categories: async () => {
            const { categories } = await categoriesModel.find();
            return categories;
        },
        products: async () => {
            const data = await productsModel.find();
            return data;
        }
    },
    Mutation: {
        createProduct: (_root, { name, description, image, price, categoryId }) => {
            return productsModel.create({ name, description, image, price, categoryId });
        }
    }
};
