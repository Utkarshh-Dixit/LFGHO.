import React from 'react';
import './LoginPage.css'; 

const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <h1>Welcome to the Token Flex</h1>
      <p>Connect your wallet to start</p>
      <button>Connect wallet</button>
    </div>
  );
};

export default LoginPage;
