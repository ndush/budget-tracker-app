import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function TransactionList(){
    const { transactions } = useContext(GlobalContext);
    
    return(
        <div className ="alert alert-secondary">
    <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
   
        </div>
    )
}
export default TransactionList