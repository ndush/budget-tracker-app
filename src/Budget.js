import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function Budget() {
  
  const [transactionList, setTransactionList] = useState([]);
  useEffect(() => {
    fetch("https://fast-wave-83090.herokuapp.com/budget")
      .then((res) => res.json())
      .then((transactionList) => setTransactionList(transactionList))
  }, []);

  function handleAddTransaction(data) {
    setTransactionList([...transactionList, data]);
  }
  return (
    <GlobalProvider >
   <div className="budgetColor ">
        <Header />
        <div className="card-columns">
          <div><Balance />
          <IncomeExpenses />
          </div>
          <div className="add-transaction">  
            <AddTransaction onAddTransaction={handleAddTransaction} />
          </div>
        
          <TransactionList
            transactionList={transactionList}
            setTransactionList={setTransactionList}
          />
        </div>
        </div>
    
     </GlobalProvider>
  );
}
export default Budget;
