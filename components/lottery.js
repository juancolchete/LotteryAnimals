import React,{useEffect,useState} from "react";
let Web3 = require("web3");
import contract from '../contracts.json';
var bigDecimal = require('js-big-decimal');

const Lottery = () =>{
    const [ticketPrice, setTicketPrice] = useState(0);
    const [adddress, setAddress] = useState(0);
    const [maxParticipants,setMaxParticipants] = useState(0);
    const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    
    async function getLotteryTicketPrice(){
        const LotteryContract = new web3.eth.Contract(contract.ABI_LOTTERY, contract.LOTTERY);
        setTicketPrice(convertToDecimal(await LotteryContract.methods.viewTicketPrice().call()));
        setMaxParticipants(await LotteryContract.methods.listMaxParticipants().call());
    }
    
    function joinLottery(){
        const LotteryCo = new web3.eth.Contract(contract.ABI_LOTTERY, contract.LOTTERY);
        LotteryCo.methods.joinLottery().send({ value:"10000000000000000",from: "0X97ab460398c8c98fc67bc0fe4fdb222579927e45" })
    }
    
    function convertToDecimal(number) {
        var decimalValue = bigDecimal.divide(number, 10 ** 18);
        return decimalValue.substring(0,decimalValue.length - 6);;
    }
    
    useEffect(() => {
        setAddress(localStorage.getItem("Address"));
        getLotteryTicketPrice();
    }, []);

    return (
        <>
            <h3>Lottery value {ticketPrice} BNB</h3>
            <h3>Max participants {maxParticipants}</h3>
            <button onClick={joinLottery}>Join Lottery</button>  
            {adddress}
        </>
    )
}
export default Lottery;