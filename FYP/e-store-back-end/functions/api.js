// Main server file...!

const express = require("express");
const router = express.Router();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const serverless = require("serverless-http");

const app = express();

// let port = 3005;
let dbUrl = "mongodb+srv://ahmed_programmer:ahmed12345@cluster0.hjdjvuc.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(
        dbUrl,
        { dbName: "E_Store" }
    )
    .then(() => console.log("Database connected successfully!"))
    .catch((dbErr) => console.log("Someting went wrong while connecting to DB: ", dbErr));

app.use(express.json());
app.use(cors());
app.use(morgan("short"));

app.use((req, res, next) => {
    console.log(`A request came ${req.body}`);
    next();
});

// Note: Initial api route...!
router.get("/", (req, res) => {
    res.send("MERN Stack FYP!");
});

// Note: Calling all external api routes..!
// app.use(require("./src/routes/auth-routes/auth-routes"));
// app.use(require("./src/routes/order-routes/order-routes"));

// app.listen(port, () => {
//     console.log(`Your server is runing on Port ${port}`);
// });

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);