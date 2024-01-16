import React from 'react';
import './RepaymentPage.css'; // CSS file for styling
import transactionphotu from './images/transactionPhotu.png';
import heartFac from './images/heartFac.png';
import apyIm from './images/apyImag.png';

const TransactionPage: React.FC = () => {
  return (
    <div>
      <nav className="navbar">
        {/* Logo on the left */}
        <div className="logo">TokenFlex</div>

        {/* Buttons in the center */}
        <div className="nav-buttons">
            <a href='/'><button>Home</button></a>
            <button>Transaction</button>
        </div>
      </nav>

      {/* Heading with logo */}
      <div className="heading-with-logo">
        <img src="path-to-image" alt="Logo" className="heading-logo" />
        <h1>Welcome to the Repayment Page</h1>
      </div>

      {/* Content with logos, paragraphs, and integers */}
      <div className="content">
        {/* Repeat this block for each set of logo, paragraph, and integer */}
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
        
        {/* ... other content blocks */}
      </div>

      {/* Card Section */}
      <div className="card-sectionRepay">
        {/* Repeat this for each card */}
        <div className="cardRepay">
  <h2 className="card-heading">Your Borrows</h2>
  
  <div className="small-cards-container">
    {/* Repeat for three small cards */}
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
      <button style={{backgroundColor:'rgb(48, 53, 73)', borderRadius:'5px', color:'wheat', padding:'2px', marginRight:'1px'}}>Repay</button>
      <button style={{backgroundColor: 'lightgrey', borderRadius:'5px', padding:'2px'}}>Borrow</button>
    </div>
  </div>
</div>
        <div className="card">
  <h2 className="card-heading">Assets to Borrow</h2>
  
  <div className="small-cards-container">
    {/* Repeat for three small cards */}
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

    {/* Repeat this section for each row of data */}
    <div className="data-item">John Doe</div>
    <div className="data-item">10</div>
    <div className="data-item">1234</div>
    <div className="data-item">$100</div>
    <div className="data-item">
      <button style={{backgroundColor:'rgb(48, 53, 73)', borderRadius:'5px', color:'wheat', padding:'2px', marginRight:'1px'}}>Borrow</button>
      <button style={{backgroundColor: 'lightgrey', borderRadius:'5px', padding:'2px'}}>Details</button>
    </div>
    {/* ...more rows */}
  </div>
</div>
      </div>
    </div>
  );
};

export default TransactionPage;
