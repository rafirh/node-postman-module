const express = require("express");
const expree = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const books =[
    {id: 1, title: "The First", year: 2020},
    {id: 2, title: "The Second", year: 2021},
    {id: 3, title: "The Third", year: 2022}
]
let nextId = books.length + 1;

app.get("/", (res,req) => {
    res.send({
        message: "Berhasil melakukan pemanggilan get",
        data : {
            description: "Endpoint ini untuk menampilkan data"
        }
    })
})

app.get("/books", (req,res) => {
    res.send({
        message: "Berhasil menampilkan data buku",
        data: {books}
    })
})

app.post("/books", (req,res) => {
    const book = {
        id: nextId++,
        title: req.body.title,
        year: req.body.year
    }
    books.push(book);
    res.send({
        message: "Berhasil menambahkan buku",
        data: {
            newBook: book,
            totalBooks: books.length
        }
    })
})

app.get("/book/:id", (req,res) => {
    res.send({
        massage: "Berhasil menampilkan perubahan buku.",
        data: { book }
    })
})

app.put("books/:id", (req,res) => {
    const index = books.findIndex((item) => item.id == req.params.id);
    books[index].title = req.body.title;
    books[index].year = req.body.year;

    res.send({
        message: "Berhasil mengubah buku.",
        data: {book: books[index]}
    })
})

const port = 8080;
app.listen(port, () => console.log (`App running ${port}`))