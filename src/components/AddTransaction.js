import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction({ onAddTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const transactionObject = {
      text: text,
      amount: amount,
    };

    fetch("https://fast-wave-83090.herokuapp.com/budget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionObject),
    })
      .then((res) => res.json())
      .then((data) => onAddTransaction(data));

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <div
      >
      <div >
        <div className="  col-lg-8" >
          <h3 style={{color:"white"}}>Add new transaction</h3>
          <form onSubmit={onSubmit}>
            <div className="form-control" style={{marginBottom:2+"vh", height:20+"vh"}}>
              <label htmlFor="text">Category</label>
              <input

                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter category..."
              />
            </div>
            <div className="form-control" style={{marginBottom:2+"vh",height:20+"vh",paddingBottom:20+"vh"}}>
              <label htmlFor="amount">
                Amount <br />
                (negative - expense, positive - income)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..."
              />
            </div>
            <button className="btn btn-light" style={{width:20+"vw"}}>Add transaction</button>
        
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddTransaction;
