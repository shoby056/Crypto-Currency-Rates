"use client";
import { useState, useEffect } from "react";



export default function CryptoRates(){
    const API_KEY = "2589481e3c2a817474bba7774962defb";
    const [data, setData] = useState<any>(null);
  
    useEffect(() => {
      fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
        .then((response) => response.json())
        .then((jsonConverted) => {
          console.log("JSON Converted Data : ", jsonConverted);
          setData(jsonConverted);
        });
    }, []);


    return(
        <div>
        <nav>
        <h1 className="main" >Crypto Currency Rates</h1>
        </nav>
       
<div className="container">
    <div className="shan">
    <h1 className="here">Here are crypto rates</h1></div>
<br />
<div className="buttons">
<table>
  <thead>
    <tr>
      <th>Currency</th>
      <th>Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BTC</td>
      <td>{data?.rates?.BTC}</td>
    </tr>
    <tr>
      <td>BNB</td>
      <td>{data?.rates?.BNB}</td>
    </tr>
    <tr>
      <td>USDT</td>
      <td>{data?.rates?.USDT}</td>
    </tr>
    <tr>
      <td>ETH</td>
      <td>{data?.rates?.ETH}</td>
    </tr>
    <tr>
      <td>DOGE</td>
      <td>{data?.rates?.DOGE}</td>
    </tr>
    <tr>
      <td>ADA</td>
      <td>{data?.rates?.ADA}</td>
    </tr>
  </tbody>
</table>

      </div>




</div>

        </div>
    );
}