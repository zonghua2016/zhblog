const express = require('express');
const app = express();
// const bodyParse = require('body-parse');
const path = require('path');
const bird = require('./rt');


// const urlencoded = bodyParse.urlencoded({ extends:true });
app.use('/docs', express.static(path.join(__dirname, 'public')));
// app.use('/', bodyParse.json());

app.use('/bird', bird);
app.get('/', (req, res) => {
    res.send({
        status: 1,
        data: {
            article: [1, 2, 3]
        },
        req: req.ip
    });
})

const logger = (req, res, next) => {
    console.log(`service running log: ${new Date()}`);
    next();
}

app.get('/users/:userId/books/:bookId', [logger], (req, res) => {
    // res.send(req.params)
    res.json(req.params)
})

app.all('/', (req, res) => {
    console.log('access!!!');
    next();
})

app.listen(9999, () => {
    console.log(`service running on port 9999`);
});