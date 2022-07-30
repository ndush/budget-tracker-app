import React from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction,transactionList,setTransactionList,id}) {
  //const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
 
  


  function handleDelete(){

    fetch(`https://fast-wave-83090.herokuapp.com/budget/${id}`,{
      method: "DELETE",
    })
    .then(res => res.json())
    .then(()=>{
    const filteredTransactions=transactionList.filter((transaction)=>transaction.id !==id)
    setTransactionList(filteredTransactions)


    })
    
  }

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {Object.values(transaction)[0]}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={handleDelete }
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}
export default Transaction;

// import React, {useContext} from 'react';
// import { GlobalContext } from '../context/GlobalState';

// function Transaction ({ transaction }) {
//   const { deleteTransaction } = useContext(GlobalContext);

//   const sign = transaction.amount < 0 ? '-' : '+';

//   return (
//     <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
//       {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
//     </li>
//   )
// }
// export default Transaction;