import React from "react"
import Header from "./Header"
import Balance from "./Balance"
import IncomeExpenses from "./IncomeExpenses"
import TransactionList from "./TransactionList"
import AddTransaction from "./AddTransaction"



function Budget(){
    return(
        <div className="transaction-body">
           <Header/>
           <div className="contain">
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
           </div>
        </div>
    )
}
export default Budget