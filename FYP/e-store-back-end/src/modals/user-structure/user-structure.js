// Note: Structure to create user in DB...!

const mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
    {
        name: String,
        profileImage: String,
        contactNo: String,
        email: String,
        password: String,
        role: String
    },

    {
        collection: "users_list"
    }
);

let UserModal = mongoose.model("users_list", userSchema);
module.exports = UserModal;