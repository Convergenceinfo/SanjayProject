const express = require('express')
const app = express()
const mysql = require('mysql')
const router = express.Router()
const bodyparser = require('body-parser');
const cors = require('cors');

var TimeFormat = require('hh-mm-ss')

let date = new Date;
let hr = date.getHours();
let minuter=date.getMinutes();
let time = hr+":"+minuter;

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
router.post('/', async(req, res) =>{
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    let MaxId;
    const id = "select max(id) from User"
    db.query(id, (err, isRes) => {
        MaxId = isRes;
        console.log("Inside Id")
        console.log(MaxId)
    })
    console.log(MaxId)
    const query = "insert into User (FirstName, LastName, createdAt, updatedAt, isActive) values(?,?,'"+time+"','"+time+"',true)";
    console.log(query)
    db.query(query,[firstName, lastName], (err, result) => {
        console.log(result)
        res.send(MaxId);
    });
} )

module.exports = router