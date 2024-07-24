//nmp start
import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import calc from "./images/icon-calculator.svg";

function App() {
  const [amount, setAmount] = useState();
  const [term, setTerm] = useState();
  const [rate, setRate] = useState();

  const [sum, setSum] = useState(0);
  const [show, setShow] = useState(false);

  function calculate() {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate) / 100;
    const monthlyRate = annualRate / 12;
    const totalPayments = parseInt(term) * 12;

    const payment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    setSum(payment.toFixed(2));
    /* if (amount || term || rate == undefined) {
      alert("please input correctly");        if one of them is empty 
    }*/
    //setShow((a) => !a);
    setShow(true);
  }

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  if (isNaN(sum)) {
    const newSum = 0;
    setSum(newSum);
  }

  //it looks at the change of the input and holds the value at setAmount. SetAmount passes the value to amount

  function handleAmount(e) {
    setAmount(e.target.value);
    console.log(e.target.value);
  }
  //it looks at the change of the input and holds the value at setTerm. SetAmount passes the value to term
  const handleTerm = (e) => {
    setTerm(e.target.value);
    console.log(e.target.value);
  };
  //it looks at the change of the input and holds the value at setRate. SetAmount passes the value to rate
  const handleRate = (e) => {
    setRate(e.target.value);
    console.log(e.target.value);
  };

  //to prevent the page from submiting the form and erasing all of the data
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="card">
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Mortgage Calculator</h1>
          <div className="input">
            <div>
              <div className="form-group">
                <label htmlFor="">Mortgage Amount</label>
              </div>
              <input
                type="number"
                value={amount}
                onChange={handleAmount}
                required
              />
            </div>

            <div className="form-row">
              <div>
                <div className="form-group">
                  <label htmlFor="">Mortgage term</label>

                  <input
                    type="number"
                    value={term}
                    onChange={handleTerm}
                    required
                  />
                </div>
              </div>

              <div>
                <div className="form-group">
                  <label htmlFor="">Interest Rate</label>
                  <input
                    type="number"
                    value={rate}
                    onChange={handleRate}
                    required
                  />
                </div>
              </div>
            </div>

            <button className="btn" onClick={calculate}>
              <img src={calc} className="calc" alt="" /> calculate
            </button>
            <p className="result">
              {isNaN(sum) ? "" : " Monthly Payment: " + formatNumber(sum)}
              {/*{show ? formatNumber(sum) : "result will be here"}*/}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
