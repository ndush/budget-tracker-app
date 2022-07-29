import React from "react";

import Transaction from "./Transaction";

function TransactionList({ transactionList, setTransactionList }) {


  return (
    <div className=" card inEx"  style={{width: 20+"rem",marginRight:50+"px", left:10+"px"}} >

     
        <h3>History</h3>
     

      <ul className="list">
        {transactionList.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            transactionList={transactionList}
            id={transaction.id}
            setTransactionList={setTransactionList}
          />
        ))}
      </ul>
    </div>
  );
}
export default TransactionList;
