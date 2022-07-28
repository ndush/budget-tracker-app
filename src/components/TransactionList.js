import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from '../context/GlobalState';
import  Transaction  from './Transaction';

function TransactionList(){
    const { transactions } = useContext(GlobalContext);
    
    return(
        <div className ="alert alert-secondary">
    <h3>History</h3>
      <ul className="list">
        {transactionList.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
   
        </div>
    )
}
export default TransactionList