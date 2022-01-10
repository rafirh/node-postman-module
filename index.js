const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port = 8080                  //deklarasi port
 
app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.urlencoded({extended:false}))
 
app.get('/', (req, res) => {       // endpoint '/'
    res.send("Hello Programers!")  
})
 
app.get('/orang/:nama', (req,res)=>{
    var namaOrang = req.params.nama
    res.end('Menampilkan nama siswa : '+namaOrang)
})
 
app.post('/orang', (req, res)=>{
    var namaOrang = req.body.nama
    var alamat = req.body.alamat
    res.end('Menampilkan orang baru, atas nama : '+namaOrang+', yang beralamat di '+alamat)
})
 
app.delete('/orang/:id', (req, res) => {
    var id = req.params.id
    var namaOrang = req.body.nama
    res.end('ID'+id+' telah dihapus, atas nama '+namaOrang)
});
 
app.put('/orang/:id', (req, res) => {
    var id = req.params.id
    var namaOrang = req.body.nama
    var alamat = req.body.alamat
    res.end('Seseorang dengan ID '+id+', telah terupdate')
});
 
app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})
