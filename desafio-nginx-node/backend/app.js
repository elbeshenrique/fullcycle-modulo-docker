const express = require('express');
const mysql = require('mysql');

const dbConfig = {
    host: 'mysql',
    user: 'codeeducation',
    password: 'secret',
    database: 'codeeducation'
};

const peopleQueryAsync = () => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(dbConfig);
        connection.query('SELECT id, name FROM people', (error, results) => {
            connection.end();
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};

const peopleInsertAsync = (name) => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(dbConfig);
        connection.query(`INSERT INTO people (name) VALUES ('${name}')`, (error, results) => {
            connection.end();
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', async (req, res) => {
    console.log('REQUEST RECEIVED');

    await peopleInsertAsync('Tony Stark');
    const peopleResult = await peopleQueryAsync();

    const peopleList = `<ul>`
        + peopleResult.map(row => {
            return `<li>${row.id} - ${row.name}</li>`;
        }).join("")
        + `</ul>`;

    console.log(peopleList);

    res.send(`
        <h1>Full Cycle Rocks!</h1>
        ${peopleList}
    `);
});

app.listen(80);