const { MongoClient, ObjectId} = require('mongodb');
require('dotenv').config();
const args = process.argv.slice(2);
const url = args[0] ?? process.env.MONGODB_URL;
const dbName = args[1] ?? "isen_drive";
const client = new MongoClient(url);


async function getCategories(dbName){

    await client.connect();
    console.log(`Connected successfully to MongoDB server: ${url}`);

    let CategoriesId = [];
    let size =[];
    const db = client.db(dbName);
    let categoriesCollection = db.collection('categories');
    let productsCollection = db.collection('products');

    let categories = await categoriesCollection.find({}).toArray();

    categories.forEach(category => {
        CategoriesId.push(category._id.toString());
    });

    for (let i = 0; i < CategoriesId.length; i++) {
        size.push(await productsCollection.count({categoryId: new ObjectId(CategoriesId[i])}));
    }

    categories.forEach((category, index) => {
        category.size = size[index];
    });

    //Count the number of products in each category


    return categories;
}

getCategories(dbName)
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
