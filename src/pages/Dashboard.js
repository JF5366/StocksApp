import { Link } from "react-router-dom"
import Stock from "./Stock"
import stocks from '../data'


export default function Dashboard(){

    
    
    return(
        <div className="dash">
           <h1 className="tableHeader">Most Active Stocks</h1>
                    <table className="stockTable">
                        <tr className="row one">
                            <th>Company Name</th>
                            <th>Price</th>
                            <th>Change</th>
                        </tr>
                        {stocks.map((stock, index) => 
                            <tr className="row two">
                                <td className="companyName">
                                    <Link key={index} to={`/stocks/${stock.symbol}`}>
                                        {stock.name} ({stock.symbol})
                                    </Link>
                                </td> 
                                <td className="price">{stock.lastPrice}</td>
                                <td className="change" style={stock.change>0 ? {color:'green'} : {color:'red'}}>
                                    {stock.change.toFixed(2)} (<span>{(stock.change*100/stock.lastPrice).toFixed(2)}</span>%)
                                    </td>
                            </tr>
                        )}
                    </table>
           
        </div>
    )
}