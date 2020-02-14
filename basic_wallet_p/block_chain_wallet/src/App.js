import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [userId, setUserId] = useState("Please enter your ID Name")
  const [blocks, setBlocks] = useState({})
  console.log(blocks)

  useEffect(() => {
    axios.get('http://0.0.0.0:5000/chain')
      .then(res => {
        setBlocks(res.data)
      })
  }, [])



  return (
    <div className="App">
      <h2>User ID: {userId}</h2>
      <input placeholder="Change ID" type="text" onChange={e => setUserId(e.target.value)} />
      <h2>Transactions</h2>
      {blocks === userId ? (
        <>
          <p>Sender: {blocks.chain.transactions.sender}</p>
          <p>Recipient: {blocks.chain.transactions.recipient}</p>
          <p>Amount: {blocks.chain.transactions.amount}</p>
        </>
      )
        :
        (
          <>
            <p>No transactions to display</p>
          </>
        )}
    </div>
  );
}

export default App;