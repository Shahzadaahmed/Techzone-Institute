// Note: Structure to create product in DB...!

const mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
    {
        productName: String,
        productImage: String,
        productPrice: String,
        productDescription: String,
        quantity: String,
        vendorId: String,
        vendorName: String,
        vendorImage: String
    },

    {
        collection: "products_list"
    }
);

let ProductModal = mongoose.model("products_list", productSchema);
module.exports = ProductModal;