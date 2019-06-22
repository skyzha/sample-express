const mysql = require('mysql')

const conn = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'koreaqicoid',
    database    : 'sample'
})

conn.connect( (err) => {
    if (err) throw err
    console.log('Mysql Connected')
})

// export.fungsi=variabel;
module.exports = conn