import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <div className='centered-content'>
      <h1>Welcome to the TokenFlex </h1>
      <p>Manage your credits, view transaction history</p>
      <button className='home-button'>Connect Wallet</button>
      <div className="cards-container">
          <div className="card">
            <img src="path-to-your-image.jpg" alt="Description" />
            <h2>Your Balance</h2>
            <p>View your current balance</p>
          </div>
          <div className="card">
            <img src="path-to-your-image.jpg" alt="Description" />
            <h2>Transaction History</h2>
            <p>Track your past transactions</p>
          </div>
          <div className="card">
            <img src="path-to-your-image.jpg" alt="Description" />
            <h2>Repayment</h2>
            <p>Description for card 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
