import React,{useEffect,useState} from "react";
let Web3 = require("Web3");
import contract from '../contracts.json'

const Lottery = () =>{
    const [ticketPrice, setTicketPrice] = useState(0);
    const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    
    async function getLotteryTicketPrice(){
        const LotteryContract = new web3.eth.Contract(contract.ABI_LOTTERY, contract.LOTTERY);
        setTicketPrice(await LotteryContract.methods.viewTicketPrice().call());
    }

    useEffect(() => {
        getLotteryTicketPrice();
    }, []);

    return (
        <>
            <h3>Lottery value {ticketPrice}</h3>
        </>
    )
}
export default Lottery;