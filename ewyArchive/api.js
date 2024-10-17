const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;
const mysql = require('mysql2');
const connection = mysql.createConnection({
host: 'localhost',
user: 'tm838_webdev',
password: '8V8M@Nu6n2cXpv',
database: 'tm838_Portfolio'
});

app.use(bodyParser.urlencoded({extended: false})); 



app.get('/ewyArchive', async (req, res) => {
    const {status, data} = await getEvents(req);
    res.status(status);
    if(data) res.json(data);
    else res.end();
    })

    app.post('/ewyArchive', async (req, res) => {
        const {status, data} = await postEvents(req);
        res.status(status);
        if(data) res.json(data);
        else res.end();
        })


        async function getEvents(req) {
            let status = 500, data = null;
            try {
            const oid = req.query.oid;
            if(Title!=null){
            // wrap in promise to allow for sequential code flow
            await new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM ewyEvents WHERE CONTAINS (Title,?)';
            connection.all(sql, [Title], (err, rows) => {
            if(!err) {
            if(rows.length > 0) {
            status = 200;
            data = {
            'eventId': eventId,
            'Title': Title,
            'Date': Date,
            'imageID': imageID,
            'Description': Description
            };
            } else {
            status = 204;
            }
            }
            resolve();
            });
            });
            } else {
            status = 400;
            }
            } catch(e) {
            console.error(e);
            }
            return {status, data};
            }