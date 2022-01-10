const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port = 8080                  //deklarasi port
 
app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.urlencoded({extended:false}))
 
app.get('/', (req, res) => {       // endpoint '/'
    res.send("Hello Programers!")  // memberikan respond "Hello programmer!"
})
 
app.get('/orang/:nama', (req,res)=>{ // endpoint '/orang/:nama', karena menggunakan get jadi contoh urlnya seperti ini 'localhost:8080/orang?nama=rafi'
    var namaOrang = req.params.nama // menyimpan req nama dalam variable namaOrang 
    res.end('Menampilkan nama siswa : '+namaOrang) // menampilkan respond berupa 'Menampilkan nama siswa : ' + namaOrang
})
 
app.post('/orang', (req, res)=>{ // karena menggunakan post jadi request nya tersembunyi agar lebih aman
    var namaOrang = req.body.nama // menyimpan req nama pada variable namaOrang
    var alamat = req.body.alamat // menyimpan req alamat pada variable alamat
    res.end('Menampilkan orang baru, atas nama : '+namaOrang+', yang beralamat di '+alamat) // menampilkan respons
})
 
app.delete('/orang/:id', (req, res) => { // delete untuk menghapus data
    var id = req.params.id // menyimpan req id ke dalam variable id
    var namaOrang = req.body.nama // menyimpan req nama ke dalam variable namaOrang
    res.end('ID'+id+' telah dihapus, atas nama '+namaOrang) // menampilkan respons
});
 
app.put('/orang/:id', (req, res) => { // put untuk meng-update data
    var id = req.params.id // menyimpan req id ke dalam variable id dari url karena menggunakan params
    var namaOrang = req.body.nama // menyimpan req nama ke dalam variable namaOrang
    var alamat = req.body.alamat // menyimpan req alamat ke dalam variable alamat
    res.end('Seseorang dengan ID '+id+', telah terupdate') // menampilkan respon
});
 
app.listen(port, () => { //membuat server di port 8080 
    console.log(`Server di port ${port}`) // menampilkan pesan di terminal
})
