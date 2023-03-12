// Note: Auth api routes are defined here...!
const express = require("express");
const router = express.Router();

// Note: calling required modal strucrures...!
const UserModal = require("../../modals/user-structure/user-structure");
const ProductModal = require("../../modals/product-structure/product-strcuture");

// Note: API function to create user...!
router.post("/api/add-user", async (req, res) => {
    let { name, profileImage, contactNo, email, password, role } = req.body;
    // console.log(name, contactNo, email, password);

    try {
        if (!name || !profileImage || !contactNo || !email || !password || !role) {
            return res.status(400).send({
                status: false,
                message: "All fields are required!"
            });
        };

        let hasUserAlreadyExist = await UserModal.findOne({ email: email });
        // console.log(hasUserAlreadyExist);

        if (hasUserAlreadyExist) {
            return res.status(404).send({
                status: false,
                message: "User already exist!"
            });
        }

        // Note: Encoding password...!
        password = btoa(password);

        let newUser = new UserModal({
            name: name,
            profileImage: profileImage,
            contactNo: contactNo,
            email: email,
            password: password,
            role: role
        });
        let saveUser = await newUser.save();
        if (saveUser) {
            return res.status(200).send({
                status: true,
                message: "User Created Successfully!",
                data: newUser
            });
        };
    }

    catch (error) {
        console.log('Something went wrong while creating user: ', error);
        return res.status(500).send({
            status: false,
            message: "Something went wrong from server side!"
        });
    }
});



// Note: API function to login user...!
router.post("/api/login-user", async (req, res) => {
    let { email, password } = req.body;
    console.log("Email: ", email);
    console.log("Passowrd: ", password);

    try {
        let hasUserExist = await UserModal.findOne({ email: email });
        // console.log("User: ", hasUserExist);

        if (!hasUserExist) {
            return res.status(401).send({
                status: false,
                message: "User does not exist!"
            });
        }

        // NOte: Decoding password...!
        let userPassword = atob(hasUserExist.password);
        if (userPassword != password) {
            return res.status(402).send({
                status: false,
                message: "Pasword did not match!"
            });
        }

        // delete hasUserExist.password; // If u want to delete password for debugging...!
        return res.status(200).send({
            status: true,
            message: "You have logged in succesfully!",
            data: hasUserExist
        });
    }

    catch (error) {
        console.log('Something went wrong while login user: ', error);
        return res.status(500).send({
            status: false,
            message: "Something went wrong from server side!"
        });
    }
});



// Note: API function to add product...!
router.post("/api/add-product", async (req, res) => {
    let { productName, productImage, productPrice, productDescription, quantity, vendorId, vendorName, vendorImage } = req.body;

    try {
        if (!productName || !productImage || !productPrice || !productDescription || !quantity) {
            return res.status(404).send({
                status: false,
                message: "Please fill all required fields!"
            });
        };

        let newProduct = new ProductModal({
            productName,
            productImage,
            productPrice,
            productDescription,
            quantity,
            vendorId,
            vendorName,
            vendorImage
        });
        let saveProduct = await newProduct.save();
        if (saveProduct) {
            return res.status(200).send({
                status: true,
                message: "Product added successfully!",
                data: newProduct
            });
        };
    }

    catch (error) {
        console.log("Someting went wrong while add product in DB: ", error);
        return res.status(500).send({
            status: false,
            message: "Server Issue!"
        });
    };
});



// Note: API function fetch all products...!
router.get("/api/fetch/all-products", (req, res) => {

    try {
        ProductModal.find({}, (err, data) => {
            if (!err) {
                return res.status(200).send({
                    status: true,
                    message: "Products List!",
                    data: data
                });
            };
        });
    }

    catch (error) {
        console.log('Error found while fetching products!');
        return res.status(500).send({
            status: false,
            message: "Server Issue!"
        });
    };
});

module.exports = router;