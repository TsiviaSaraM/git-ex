/* eslint-disable */
import {storageService} from './storage.service.js'
import axios from 'axios';

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
}

const BITCOIN_KEY = 'bitcoin'
const MARKET_PRICE_KEY = 'market_price'
const TRANSACTIONS_KEY = 'transactions'

async function getRate(coins){
    let rates = storageService.loadFromStorage(BITCOIN_KEY) || {}
    let rate = rates[coins]

    if (!rate){
        // const res = await axios.get(`https://blockchain.info/tobtc?currency=${coins}&value=1`)
        return axios.get(`https://blockchain.info/tobtc?currency=${coins}&value=1`)
        .then(res => {
            rates[coins] = res.data
            storageService.saveToStorage(BITCOIN_KEY, rates)
            return res.data
        })
        .catch(err => console.log('error in service', err))
    }
    return Promise.resolve(rate)
}

function getMarketPrice(){
    let price = storageService.loadFromStorage(MARKET_PRICE_KEY) || null
    // debugger
    if (!price){
        axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
        .then(res => {
            price = res.data.values
            storageService.saveToStorage(MARKET_PRICE_KEY, price)
        })
        .catch(err => console.log('error in service', err))
    }
    return price

}

function getConfirmedTransactions(){
    
    let transactions = storageService.loadFromStorage(TRANSACTIONS_KEY) || null

    if (!transactions){
        axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`)
        .then(res => {
            transactions = res.data.values
            storageService.saveToStorage(TRANSACTIONS_KEY, transactions)
        })
        .catch(err => console.log('error in service', err))
    }
    return transactions

}

