import React from 'react';
import Navbar from '../Navbar/Navbar';
import file from '../images/file.png';
import { ConnectKitButton } from 'connectkit';
import repayment from '../images/repayment.png';
import wallet from '../images/wallet.png';
import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <div className='centered-content'>
      <h1>Welcome to the TokenFlex </h1>
      <p>Manage your credits, view transaction history</p>
      <ConnectKitButton/>
      <div className="cards-container">
          <div className="card">
            <img src={wallet} alt="Description" />
            <h2>Your Balance</h2>
            <p>View your current balance</p>
          </div>
          <div className="card">
            <img src={file} alt="Description" />
            <h2>Transaction History</h2>
            <p>Track your past transactions</p>
          </div>
          <div className="card">
          <a href='/transaction'>
            <img src={repayment} alt="Description" />
            <h2>Repayment</h2>
            <p>Make the repayment here</p>
          </a>
          </div>
        </div>
      </div>
      {/* Add more content here */}
    </div>
  );
};

export default HomePage;
