import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactionList} = useContext(GlobalContext);
  const amounts = transactionList.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
   

    <div className="card "style={{ width: 25 + "vw" }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: "purple" }}>
          Income
        </h5>
        <h1 className="card-subtitle mb-2 text-muted">${income}</h1>
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{ color: "purple" }}>
          Expense
        </h5>
        <h1 className="card-subtitle mb-2 text-muted">${expense}</h1>
      </div>
    </div>
  );
}
export default IncomeExpenses;
