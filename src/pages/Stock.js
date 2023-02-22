import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import stocks from '../data'

export default function Stock(props){
    // const key = process.env.REACT_APP_KEY;

    let {symbol} = useParams() 

  //  let [stock, setStock] = useState(null)

    let navigate = useNavigate() 

    // const getStock = async() => {
    //   try{
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setStock(data)
    //   }catch(error){
    //     console.error(error)
    //   }
    //   console.log({stock})
    // }

    // useEffect(() => {
    //     getStock()
        
    // }, [])

    function goBack(){
        navigate(-1)
    }


   // let url = `https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=${key}`
   // `https://financialmodelingprep.com/api/v3/profile/${symbol}/?apikey=${apiKey}`


   const thisstock = stocks.filter(
    (thisStock) => thisStock.symbol === symbol
  );


    return(
        <div>
            {thisstock.map((stock, index) => 
            <div className="stock">
                    <h1>{stock.name} ({stock.symbol})</h1>
                    <h2>Last Price: {stock.lastPrice}</h2>
                    <h2>Change: <span style={ stock.change>0 ? {color:'green'} : {color:'red'} }> {stock.change.toFixed(2)} </span></h2>
                    <h2>High: {stock.high}</h2>
                    <h2>Low: {stock.low}</h2>
                    <h2 >Open: {stock.open}</h2>
             </div>
             )}
             <button onClick={goBack}>Back</button>
             
        </div>
    )
}