import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList({ transactionList, setTransactionList} ) {
  const { transactions } = useContext(GlobalContext);

  return (
    <div class="d-flex justify-content-end">
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
