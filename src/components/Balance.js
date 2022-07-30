import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function Balance(){
    const { transactionList } = useContext(GlobalContext);
    const amounts = transactionList.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return(

<div className="card " style={{width: 15+"rem",  color:"blue" ,marginBottom:2+"vh"}}>
<div className="card-body">
  <h5 className="card-title">Balance</h5>
  <h1 className="card-subtitle mb-2 text-muted">${total}</h1>
</div>
</div>
    )
    
}
export default Balance