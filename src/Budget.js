import React from "react"
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import{GlobalProvider} from './context/GlobalState'



function Budget(){
    return(
        <GlobalProvider>
        <div className="transaction-body">
           <Header/>
           <div className="contain">
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
           </div>
        </div>
        </GlobalProvider>
    )
}
export default Budget