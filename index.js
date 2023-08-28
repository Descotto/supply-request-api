require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Request = require('./schemas/request');
// port
const port = process.env.PORT || 8000;
const mongoDB = process.env.MONGODB_URI
mongoose.connect(mongoDB, {useNewUrlParser: true});

const db = mongoose.connection;

app.use(cors());
app.use(express.json({limit: '5mb'}));

db.once('open', () => {
    console.log('Connected to database at ', db.host, ':', db.port);
})

db.once('error', (error) => {
    console.log(`Database error ${error}`)
});


app.use(express.urlencoded({ extended: false}));

//================================================================
app.get('/', (req, res) => {
    res.json({ message: 'My Database'});
});

app.get('/order/:id', (req, res) => {
    Request.findById(req.params.id).then((response) => {
        
        res.json({ order: response });
    }).catch((error) => {
        console.log('ERROR', error);
    })
});

app.get('/byname/:name', (req, res) => {
    Request.find({ name: req.params.name}).then((response) => {
        res.json({ order: response });
    }).catch((err) => {
        console.log(err);
    });
});



app.post('/request', async (req, res) => {
    // console.log('REQUEST REQ ==>>',  req)
    if (req) {
        console.log('REQUEST REQ ====>', req.body)
    }
    Request.create({
        name: req.body.name,
        date: new Date().getTime(),
        lead: req.body.lead,
        items: req.body.items
    })
    .then(order => {
        // console.log('New request:  ', order);
        res.json({ message: 'message received', order: order.id});
    })
    .catch(err => {
        console.log('Error: ', err);
        res.json({ message: 'Error ocurred, please try again'})
    });
})

//================================================================

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})