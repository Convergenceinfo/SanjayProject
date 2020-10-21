const express = require('express')
const app = express()
const mysql = require('mysql')
const router = express.Router()
const bodyparser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool(
    {
        host : "localhost",
        user : "samiulla",
        password : "123456",
        database : "userRegister"
    }
)

app.use(bodyparser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
router.get('/', async(req, res) =>{
 
    const query = "select * from User limit 10";
    console.log(query)
    db.query(query, (err, result) => {
        console.log(result)
        res.send(result);
    });
} )

module.exports = router