import React,{useEffect,useState} from 'react';
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import{GlobalProvider} from './context/GlobalState'



function Budget(){

    const [transactionList, setTransactionList] = useState([]);
  useEffect(() => {
    fetch("https://fast-wave-83090.herokuapp.com/budget")
      .then((res) => res.json())
      .then((data) => setTransactionList(data));
  }, []);

  function handleAddTransaction(data) {
    setTransactionList([...transactionList, data]);
  }
    return(
        <GlobalProvider>
        <div className="transaction-body">
           <Header/>
           <div className="contain">
            <Balance/>
            <IncomeExpenses/>
            <TransactionList transactionList={transactionList}/>
     <AddTransaction  onAddTransaction={handleAddTransaction}/>
           </div>
        </div>
        </GlobalProvider>
    )
}
export default Budget