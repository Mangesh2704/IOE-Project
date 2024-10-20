const { addDoc, db, collection } = require('../config')
const path = require('path');

const home = async (req, res) => {
    try {

        // res.status(200).send("This is Home Page");
        const filePath = path.join(__dirname, '../public', 'index.html');
        res.sendFile(filePath, (err) => {
            if (err) {
                res.status(err.status).end();
            } else {
                console.log('index.html sent successfully');
            }
        });
    } catch (error) {
        res.status(404).send("Page not found");
    }
}
const register = async (req, res) => {
    try {
        res.status(200).send("This is registration Page");
    } catch (error) {
        res.status(404).send("Page not found");
    }
}
const login = async (req, res) => {
    try {
        res.status(200).send("This is login Page");
    } catch (error) {
        res.status(404).send("Page not found");
    }
}
const insert = async (req, res) => {
    try {
        const {name, table,order,subTotal} = req.body;
        
        console.log(req.body);
        const ref = db.ref("tables/"+table+"/");
        const ref1=db.ref("tables/");
        // check if table is already booked
        const snapshot = await ref1.once('value'); // Get the data once

        const data = snapshot.val(); // Extract the data from the snapshot
        // console.log("hello+"+ JSON.stringify(data));
        const tableNos = Object.keys(data);
        console.log(tableNos);
        
        // const tableNos = Object.values(data).map(entry => entry.tableNo);
        if (tableNos.includes(table)) {
            return res.status(404).json({ error: `Table number ${table} already booked!` });

        } else {
            const newUserRef = ref.push();
            await ref.set({
                name: name,
                tableNo: table,
                order: order,
                total: subTotal
            });
            console.log('Data added to Realtime Database successfully!');
            // alert("Table is already booked");
            // res.status(200).send("Data inserted successfully.");
            res.send(table)

        }

       
    } catch (error) {
        console.error('Error adding document: ', error);
    }
}
module.exports = { home, register, login, insert };
