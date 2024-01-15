// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

// Import necessary libraries and interfaces
import "./Issuance.sol";
import "./TransactionProccesing.sol";
import "./InterestCalculation.sol";
import "./PaymentSettlement.sol";

contract MultiSigCreditCardWallet {
    address public owner;
    uint256 public requiredSignatures;

    // Address of the credit card issuance contract
    Issuance public creditIssuance;

    // Address of other credit-related contracts
    TransactionProcessing public transactionProcessing;
    InterestCalculation public interestCalculation;
    PaymentSettlement public paymentSettlement;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier hasEnoughSignatures() {
        require(msg.sender == owner || requiredSignatures == 0, "Not enough signatures");
        _;
    }

    constructor(
        uint256 _requiredSignatures,
        address _creditIssuance,
        address _transactionProcessing,
        address _interestCalculation,
        address _paymentSettlement
    ) {
        owner = msg.sender;
        requiredSignatures = _requiredSignatures;

        // Initialize credit-related contracts
        creditIssuance = Issuance(_creditIssuance);
        transactionProcessing = TransactionProcessing(_transactionProcessing);
        interestCalculation = InterestCalculation(_interestCalculation);
        paymentSettlement = PaymentSettlement(_paymentSettlement);
    }

    // Function to change the required signatures
    function changeRequiredSignatures(uint256 _requiredSignatures) external onlyOwner {
        requiredSignatures = _requiredSignatures;
    }

    // Functions related to credit card issuance
    function issueCreditCard(address user, uint256 limit) external hasEnoughSignatures {
       creditIssuance.issueCredit(user, limit);
    }

    // Functions related to transaction processing
    function processTransaction(address user, uint256 amount) external hasEnoughSignatures {
        transactionProcessing.processTransaction(user, amount);
    }

    // Functions related to interest calculation
    function calculateInterest(address user) external view returns (uint256) {
        return interestCalculation.calculateInterest(user);
    }

    // Functions related to payment settlement
    function settlePayment(address user, address merchant, uint256 amount) external hasEnoughSignatures {
        paymentSettlement.settlePayment(user, merchant, amount);
    }
}

