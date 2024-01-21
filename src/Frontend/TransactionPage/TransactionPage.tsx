import React from 'react';
import './TransactionPage.css'; // CSS file for styling
import transactionphotu from './images/transactionPhotu.png';
import heartFac from './images/heartFac.png';
import apyIm from './images/apyImag.png';

const TransactionPage: React.FC = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">TokenFlex</div>

        <div className="nav-buttons">
          <button>Home</button>
          <button>Transaction</button>
        </div>
      </nav>

      <div className="heading-with-logo">
        <img src="path-to-image" alt="Logo" className="heading-logo" />
        <h1>Welcome to the Token Flex</h1>
      </div>

      <div className="content">
        <div className="content-block">
          <img src={transactionphotu} alt="Content Logo" className="content-logo" />
          <div className="text-block">
            <p>Net worth</p>
            <span className="integer-value">123</span>
          </div>
        </div>
        <div className="content-block">
          <img src={apyIm} alt="Content Logo" className="content-logo" />
          <div className="text-block">
            <p>Net APY</p>
            <span className="integer-value">123</span>
          </div>
        </div>
        <div className="content-block">
          <img src={heartFac} alt="Content Logo" className="content-logo" />
          <div className="text-block">
            <p>Health factor</p>
            <span className="integer-value">123</span>
          </div>
        </div>
        
      </div>

      <div className="card-section">
        <div className="card">
  <h2 className="card-heading">Your Supplies</h2>
  
  <div className="small-cards-container">
    <div className="small-card">Balance 3000$</div>
    <div className="small-card">APY 0%</div>
    <div className="small-card">Collatera 3000$</div>
  </div>

  <div className="data-table">
    <div className="data-heading">Asset</div>
    <div className="data-heading">Balance</div>
    <div className="data-heading">APY</div>
    <div className="data-heading">Collateral</div>
    <div className="data-heading"></div>

    <div className="data-item">John Doe</div>
    <div className="data-item">10</div>
    <div className="data-item">1234</div>
    <div className="data-item">$100</div>
    <div className="data-item">
      <button style={{backgroundColor:'rgb(48, 53, 73)', color:'wheat', padding:'2px', marginRight:'1px'}}>Withdraw</button>
      <button style={{backgroundColor: 'lightgrey', padding:'2px'}}>Supply</button>
    </div>
  </div>
</div>
        <div className="card">
  <h2 className="card-heading">Assets to Supply</h2>
  
  <div className="small-cards-container">
    <div className="small-card">Balance 3000$</div>
    <div className="small-card">APY 0%</div>
    <div className="small-card">Collatera 3000$</div>
  </div>

  <div className="data-table">
    <div className="data-heading">Asset</div>
    <div className="data-heading">Balance</div>
    <div className="data-heading">APY</div>
    <div className="data-heading">Collateral</div>
    <div className="data-heading"></div>

    <div className="data-item">John Doe</div>
    <div className="data-item">10</div>
    <div className="data-item">1234</div>
    <div className="data-item">$100</div>
    <div className="data-item">
      <button style={{backgroundColor:'rgb(48, 53, 73)', color:'wheat', padding:'2px', marginRight:'1px'}}>Supply</button>
      <button style={{backgroundColor: 'lightgrey', padding:'2px'}}>Details</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default TransactionPage;
