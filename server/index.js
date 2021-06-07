const Web3 = require('web3');
const express = require('express');
const path = require('path');
const {CALCULATOR_ABI, CALCULATOR_ADDRESS} = require('./config.js');

const web3 = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/v3/d4fd620f030940dd8cdc9b242aaa3a61');
const app = express();
const calculator = new web3.eth.Contract(CALCULATOR_ABI, CALCULATOR_ADDRESS);

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));

app.post('/plus', async (req, res) => {
    try {
        const {a, b} = req.body;
        const result = await calculator.methods.plus(a, b).call();
        res.send(result);
    } catch (e) {
        res.sendStatus(500).json({ message: 'Something wrong'});
    }
});

app.post('/minus', async (req, res) => {
    try {
        const {a, b} = req.body;
        const result = await calculator.methods.minus(a, b).call();
        res.send(result);
    } catch (e) {
        res.status(500).json({ message: 'Something wrong'});
    }
});

app.post('/multiply', async (req, res) => {
    try {
        const {a, b} = req.body;
        const result = await calculator.methods.multiply(a, b).call();
        res.send(result);
    } catch (e) {
        res.status(500).json({ message: 'Something wrong'});
    }
});

app.post('/divide', async (req, res) => {
    try {
        const {a, b} = req.body;
        const result = await calculator.methods.divide(a, b).call();
        res.send(result);
    } catch (e) {
        res.status(500).json({ message: 'Something wrong'});
    }
});

app.listen(3000, () => {
    console.log('Server has been started...');
});