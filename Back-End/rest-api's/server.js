// Main server file...!

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

let port = 5050;
let dbUrl = "mongodb+srv://ahmed_programmer:ahmed12345@cluster0.hjdjvuc.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(
        dbUrl,
        { dbName: "Testing_DB" }
    )
    .then(() => console.log("Database connected successfully!"))
    .catch((dbErr) => console.log("Someting went wrong while connecting to DB: ", dbErr));

let todoSchema = new mongoose.Schema(
    {
        todoItem: String,
    },
    {
        collection: "todo-list"
    }
);

let TodoModal = mongoose.model("todo-list", todoSchema);

app.use(express.json());
app.use(cors());
app.use(morgan("short"));

app.use((req, res, next) => {
    console.log(`A request came ${req.body}`);
    next();
});

// Note; Hello world api...!
app.get("/", (req, res) => {
    res.send("Welcome to Rest Api in MERN!");
});


// Note: ABout content api...!
app.get("/api/about-content", (req, res) => {
    res.send("This content is related to About Screen!");
});


// Note: API to post data in DB...!
app.post("/api/add-todo", (req, res) => {
    // console.log("Data: ", req.body);

    let { todoItem } = req.body;
    console.log("Todo Data: ", todoItem);

    if (!todoItem) {
        return res.status(400).send({
            status: false,
            message: "Invalid Data! Or Incorrect Data!"
        });
    };

    let newItem = new TodoModal({
        todoItem: todoItem
    });

    newItem
        .save()
        .then((success) => {
            if (success) {
                return res.status(200).send({
                    status: true,
                    message: "Data agaya hy!",
                    data: newItem
                });
            };
        })
        .catch((apiErr) => console.log("Someting went wrong while sending data to DB: ", apiErr))
});


// Note: API function to send all users...!
app.get("/api/fetch/all-todo-items", (req, res) => {
    TodoModal.find({}, (err, data) => {
        if (!err) {
            res.status(200).send({
                status: true,
                data: data
            });
        }

        return res.status(500).send({
            status: false,
            message: "Server ki taraf se issue hy!"
        });
    });
});


// NOte: Api function to delete item...!
app.delete("/api/delete-item/:id", (req, res) => {
    let { id } = req.params;
    console.log("Idem Id: ", id);

    TodoModal.findByIdAndRemove(id, (err) => {
        if (!err) {
            return res.status(200).send({
                status: true,
                message: "Item Deleted Successfully!"
            });
        }

        return res.status(500).send({
            status: false,
            message: "Server ki taraf se issue hy!"
        });
    });
});


// NOte: Api function to update item...!
app.put("/api/update-item", (req, res) => {
    let { itemId, updateItemName } = req.body;
    // console.log('Id: ', itemId);
    // console.log("Update Item Name: ", updateItemName);

    let updateObj = { todoItem: updateItemName };

    if (updateItemName == "") {
        return res.status(400).send({
            status: false,
            message: "Data bhejo!"
        });
    }

    TodoModal.findByIdAndUpdate(
        itemId,
        updateObj,
        { new: true },
        (err, data) => {
            if (!err) {
                return res.status(200).send({
                    status: true,
                    message: "Item Updated Successfully!",
                    data: data
                });
            };
        }
    );
});


app.listen(port, () => {
    console.log(`Your server is runing on Port ${port}`);
});