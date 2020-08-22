const mongoose = require('mongoose');
const { Number } = require('core-js');

require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

let schema = new mongoose.Schema(
    {
        token: { type: String, required: true },
        address: { type: String, required: true },
        name: { type: String, required: true },
        listingPrice: { type: Number, required: true },
        holders: { type: Number, required: true },
        mintedSupply: { type: Number, required: true },
        marketCap: { type: Number, required: true }, 
        initialPool: { type: Number, required: true },
        verified: { type: String, required: false },
        contractSource: { type: String, required: false },
        created_on: { type: Number, default: Date.now }
    }
);

module.exports.Contract = mongoose.model('Contract', schema);