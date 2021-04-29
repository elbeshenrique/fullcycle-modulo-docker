const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', async (req, res) => {
    console.log('REQUEST RECEIVED');

    const peopleList = "";

    res.send(`
        <h1>Full Cycle Rocks!</h1>
        ${peopleList}
    `);
});

app.listen(80);