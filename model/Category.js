const Product = require("./Product.js")

const Category = {

    getById : function(categoryId){

        return this.getAll().find( category => category._id === categoryId);
    },

    getAll : function(){
        const categories = [
            {_id: "1", name: "Boucherie"},
            {_id: "2", name: "Boulangerie"},
            {_id: "3", name: "Produits laitiers"},
            {_id: "4", name: "Fruits & Légumes"},
            {_id: "5", name: "Bébé"},
            {_id: "6", name: "Entretien"},
        ];

        // computes category size
        for(let category of categories){
            category.size = Product.getByCategory(category._id).length;
        }

        return categories;
    }

}

module.exports = Category;
