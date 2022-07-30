import React, { useContext }  from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList({ transactionList, setTransactionList }) {
  const { transactions} = useContext(GlobalContext);

  return (
   <div className="  card3  card"  style={{width: 15+"rem", color:"blue"}} >
   
     
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
