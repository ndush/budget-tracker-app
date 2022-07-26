import React from "react"
import Header from "./Header"
import Balance from "./Balance"

function Budget(){
    return(

        <div className="transaction-body">
           <Header/>
           <div>
            <Balance/>
           </div>
        </div>
    )
}
export default Budget