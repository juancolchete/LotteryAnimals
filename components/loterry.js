import React,{useEffect,useState} from "react";
let Web3 = require("Web3");
import contract from '../contracts.json'

const Loterry = () =>{
    const web3 = new Web3('https://bsc-dataseed1.defibit.io/');
    useEffect(async () => {
        const LotteryContract = new web3.eth.Contract(contract.ABI_LOTERRY, contract.LOTERRY);
        setRate(await LoterryContract.methods.rate().call());
    }, []);
}