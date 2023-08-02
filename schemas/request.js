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
    pulled: {
        type: Boolean,
    },
    pulledBy: {
        type: String,
    },
    items: {
        type: Array,
    
    },
});


module.exports = mongoose.model('Request', requestSchema);