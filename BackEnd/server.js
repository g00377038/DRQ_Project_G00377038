const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

//for cors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//configuration, where to find build folder
app.use(express.static(path.join(__dirname, '../build')));

//configuration, where to find static folder
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//connect to mongodb
const connectionString = 'mongodb+srv://admin:DRQproject@cluster0.sj3y8.mongodb.net/bookDataBase?retryWrites=true&w=majority'
mongoose.connect(connectionString, {useNewUrlParser: true});

//define schema of data to be stored in database
const Schema = mongoose.Schema;

//schema
var bookSchema = new Schema({
    Title: String,
    Year: String,
    Author: String,
    Genre: String
})

//create model for book database
var bookModel = mongoose.model("book", bookSchema);

app.get('/api/books', (req, res) => {
    
    //find all documents in database
    bookModel.find((err, data) => {
        res.json(data);
    })
})

//listen for get request
app.get('/api/books/:id', (req, res) => {
    console.log(req.params.id);

    //send back book 
    bookModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

//listen for put request and edit info of movie that matches id from database
app.put('/api/books/:id' , (req, res) => {
    console.log("Update Movie: "+req.params.id);
    console.log(req.body);

    //find and overwrite book that matches ID
    bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
        res.send(data);
    })

})

//listen for delete request and remove info of book that matches id from database
app.delete('/api/books/:id', (req, res) => {
    console.log("Delete Book: "+req.params.id)

    //find and delete book that matches ID
    bookModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

//listen for post request, server recieves data
app.post('/api/books', (req, res) =>{
    console.log('Book recieved');
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Author);
    console.log(req.body.Genre);
    
    bookModel.create({
        Title: req.body.Title,
        Year: req.body.Year,
        Author: req.body.Author,
        Genre: req.body.Genre
    })

    //prevent client from sending duplicates
    res.send('Book Added')
})

//for all other routes, send file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../build/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})