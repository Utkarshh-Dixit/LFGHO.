
import React, { ReactNode } from 'react';
import LoginPage from './Frontend/LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ConnectWallet from './Wallet/ConnectWallet/ConnectWallet';
import HomePage from './Frontend/HomePage/HomePage';
import TransactionPage from './Frontend/TransactionPage/TransactionPage';
import RepaymentPage from './Frontend/RepaymentPage/RepaymentPage';
function App() {
  return (
    <div className="App">
      <Router>
      {/* <h1>lfgho
      </h1>
      <ConnectWallet/> */}
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/transaction' element={<TransactionPage/>}></Route>
          <Route path='/repayment' element={<RepaymentPage/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
