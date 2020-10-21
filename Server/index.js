const express = require('express')
const app = express();
const cors = require('cors');
app.listen(3049, () => {
    console.log("Running on port 3045");
});

const RegisterData = require('./Register');
const SelectData = require('./selectData');
app.use(cors())
app.use(express.json())
app.use('/register', RegisterData);
app.use('/select',SelectData )

// app.get('/',(req, res) => {
//     res.send("Hello World");
// });