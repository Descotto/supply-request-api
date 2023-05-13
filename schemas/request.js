const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lead: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    items: {
        type: Array,
    
    },
});


module.exports = mongoose.model('Request', requestSchema);