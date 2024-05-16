const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3010;

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true})); 

mongoose.connect('mongodb://127.0.0.1:27017/ECOM_DATA');
const db = mongoose.connection;
db.once('open', () => {
    console.log("mongodb connection successful");
});

const userSchema = new mongoose.Schema({
    reg_no:{
        type:String,
    },
    name:{
        type:String,
    },
    email:{
        type:String
    }
});

const User = mongoose.model("ECOM_RECORD", userSchema);

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/post', async (req, res) => {
    const { reg_no, name, email } = req.body;
    const user = new User({
        reg_no,
        name,
        email
    });
    await user.save();
    console.log(user);
    res.send("Form submitted successfully");
});

app.listen(port, () => {
    console.log("Server Started");
});


