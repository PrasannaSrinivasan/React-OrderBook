import { useEffect, useState} from "react";

import { dataActions } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

function WebSocket() {

  const dispatch = useDispatch();
  
  const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2 ");
  const apiCall = {
    "event": "subscribe",
    "channel": "book",
    "symbol": "tBTCUSD"
  };


  ws.onopen = (event) => {
    ws.send(JSON.stringify(apiCall));
  };

  ws.onmessage =  (event) => {
    // const json = JSON.parse(event.data);
    // console.log(json);
    //const [ tradeId, value ] = _.cloneDeep(json); //event.data;

    // dispatch(dataActions.updateData(json)); // Updating the State based upon the 
  };


}

export default WebSocket;
// [ 110004 , [41497,4,0.31938397]] : [ tradeId , [ price, count, amount ] ] 
/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a> */


// [111404,[[41540,3,0.11052101],[41537,1,0.02407],[41536,4,0.26844735],[41535,5,0.75507617],[41533,2,0.37609803],[41532,3,0.1691496],[41531,4,0.66704508],[41529,2,2.01649558],[41528,2,0.74059724],[41527,2,0.753121],[41526,2,0.4368],[41524,1,0.07221],[41523,4,1.3788997],[41522,1,0.21047833],[41521,1,0.41119685],[41519,3,0.56017886],[41518,3,0.315617],[41517,2,0.2151729],[41515,1,0.096276],[41513,4,0.60300914],[41512,2,0.61429708],[41511,1,3.17574],[41510,1,0.124],[41509,5,3.23264299],[41508,1,0.05],[41541,1,-0.00119614],[41542,1,-0.002],[41543,1,-0.00066444],[41544,6,-0.31076319],[41545,3,-0.20853324],[41546,2,-0.003],[41547,2,-0.2591668],[41548,4,-0.51211002],[41549,8,-0.14125735],[41550,4,-0.31380017],[41551,4,-0.064174],[41552,5,-0.54080629],[41553,3,-0.181525],[41554,3,-0.0023],[41555,7,-1.41060352],[41556,4,-0.09970171],[41557,2,-0.002],[41558,4,-0.12352882],[41559,3,-0.4204],[41560,7,-0.80032479],[41561,2,-0.13223403],[41562,2,-0.401],[41563,4,-2.91837553],[41564,2,-0.44774114],[41565,3,-0.30089734]]]