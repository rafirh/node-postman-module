const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'perpus'
})

db.connect(error => {
    if(error){
        console.log(error.message)
    }else{
        console.log("Mysql connected")
    }
})

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/books", (req,res) => {
    let sql = 'select * from buku';

    db.query(sql, (Error,result) => {
        let response = null;
        if(Error){
            response = {
                message: Error.message
            }
        }else{
            response = {
                result
            }
        }
        res.send(response);
    })
})


app.post("/books/tambah", (req,res) => {
    let title = req.body.title;
    let year = req.body.year;
    let sql = `insert into buku (title,year) values ('?','?')`;
    db.query(sql,[title,year],(Error,result) =>{
        let response = null;
        if(Error){
            response = {
                message: Error.message
            }
        }else{
            response = {
                message: "Berhasil menambahkan buku",
                title: title,
                year: year
            }
        }
        res.send(response);
    })
}) 

app.put("/books/ubah/:id", (req,res) => {
    let id = req.params.id;
    let title = req.body.title;
    let year = req.body.year;
    let sql = `update buku set title = ?, year = ? where id = ?`
    let response;

    db.query(sql, [id,title,year], (Error,result) => {
        if(Error){
            response = {
                message: Error.message
            }
        }else{
            response = {
                message: "Berhasil mengubah buku",
                title: title,
                year: year
            }
        }
        res.send(response);
    })
})

app.delete("/books/hapus", (req,res) => {
    let id = req.body.id;
    let sql = `delete from buku where id = ?`;
    let response;

    db.query(sql,[id], (Error,result) => {
        if(Error){
            response = {
                message: Error.message
            }
        }else{
            response = {
                message: `Berhasil menghapus buku dengan id ${id}`
            }
        }
        res.send(response);
    }) 
})

const port = 8080;
app.listen(port, () => console.log (`App running ${port}`))