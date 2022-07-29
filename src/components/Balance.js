import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function Balance(){
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return(
        // <div className="mx-auto" style={{width: 200+"rem"}}>
        // <h4 > Balance</h4>
        // <h1>${total}</h1>
        // // </div>

<div className="card" style={{width: 15+"rem", marginLeft:50+"px", color:"blue"}}>
<div className="card-body">
  <h5 className="card-title">Balance</h5>
  <h1 className="card-subtitle mb-2 text-muted">${total}</h1>
</div>
</div>
    )
    
}
export default Balance