import React from "react"
import Header from "./Header"
import Balance from "./Balance"
import IncomeExpenses from "./IncomeExpenses"
import TransactionList from "./TransactionList"


function Budget(){
    return(
        <div className="transaction-body">
           <Header/>
           <div className="contain">
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
           </div>
        </div>
    )
}
export default Budget