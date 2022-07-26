import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction, transactionList, setTransactionList, id }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? "+" : "-";

  function handleDelete() {
    fetch(`https://fast-wave-83090.herokuapp.com/budget/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const deleteTransaction = transactionList.filter(
          (transaction) => transaction.id !== id
        );
        setTransactionList(deleteTransaction);
      });
  }

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {Object.values(transaction)[0]}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={handleDelete}>
        x
      </button>
    </li>
  );
}
export default Transaction;
