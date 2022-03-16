const express = require('express')
const Web3  = require('Web3')
const truffleContract = require('truffle-contract')
const artifacts = require('./build/contracts/Loans.json')
const routes = require('./routes/routes')

const app = express()

app.use(express.json())

try {
    if (typeof web3 !== 'undefined') {
        var web3 = new Web3(web3.currentProvider)
    } else {
        var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))    
    }
} catch (err) {
    console.log(err)
}

const LoansInstance = truffleContract(artifacts)
LoansInstance.setProvider(web3.currentProvider)

async function f(){
    try {
        const loans = await LoansInstance.deployed()
        const accounts = await web3.eth.getAccounts()

        routes(app, loans, accounts)

        app.listen(8080, () => {
            console.log ("App listening on port 8080")
        })
    }
    catch (err) {
        console.log(err)
    }
}f()



