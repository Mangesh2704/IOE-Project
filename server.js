const express = require('express');
const cors = require('cors');
const path = require('path');

const addUser = require('./config');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/inserts', async (req, res) => {
    addUser();
  
    res.send({ msg: "User Added" })

})
const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

app.listen(3000, () => { console.log("listening") })




