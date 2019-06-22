const express = require('express')
const db = require('./db_config')
const app = express()
const port =  7000

app.use(express.urlencoded({ extended: false }));

// app.get('/', function(req, res) {
//     res.send('Hello World');
// });
app.get('/', (req, res) => res.send('Hello World'))

app.post('/save', (req, res) => {
    // console.log(req)
    // res.send(req.body)
    let data = {
        name    : req.body.name,
        event   : req.body.event,
        value   : req.body.value
    }

    let sql     = 'INSERT INTO sample SET ?'
    let query   = db.query(sql, data, (err, results) => {
        if (err) throw err
        res.send('save success')
    }) 
})

app.put('/sample/:id', (req, res) => {
    let id = req.params.id;
    let data = {
        name    : req.body.name,
        event   : req.body.event,
        value   : req.body.value
    }
    
    let sql     = `UPDATE sample SET ? WHERE id = ${id}`
    let update  = db.query(sql, data, (err, results) => {
        if (err) throw err
        res.send('update success')
    })  
})

app.delete('/sample/:id', (req, res) => res.send('Got a Delete request at /user'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))