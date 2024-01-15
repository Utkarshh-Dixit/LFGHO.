// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract MultiSig {
    address[] public owners;
    uint256 public numConfirmationsReq;

    struct Transaction {
        address to;
        uint256 value;
        bool executed;
    }

    mapping(uint256 => mapping(address => bool)) public isConfirmed;
    Transaction[] public transactions;

    event TransactionSubmitted(uint transactionId, address sender, address reciever,uint amount);
    event TransactionConfirmed(uint transactionId);
    event TransactionExecuted(uint transactionId);
    constructor(address[] memory _owners, uint256 _numConfirmedReq) {
        require(_owners.length > 1, "Owners must be greater than 1");
        require(
            _numConfirmedReq > 0 && _numConfirmedReq <= _owners.length,
            "Invalid number of confirmations required"
        );  
        for (uint256 i = 0; i < _owners.length; i++) {
            require(_owners[i] != address(0), "Invalid Owner");
            owners.push(_owners[i]);
        }

        numConfirmationsReq = _numConfirmedReq;
    }

    function submitTransaction(address _to) public payable {
        require(_to != address(0), "Invalid Address");
        require(msg.value > 0, "Transfer amount must be greater than 0");

        uint transactionId = transactions.length;
        transactions.push(Transaction({
            to: _to,
            value: msg.value,
            executed: false
        }));
        emit TransactionSubmitted(transactionId, msg.sender, _to, msg.value);
    }

    function confirmTransaction(uint transactionId) public{
        require(transactionId<transactions.length,"Invalid Transaction Id");
        require(!isConfirmed[transactionId][msg.sender],"Transation is already confirmed");
        isConfirmed[transactionId][msg.sender] = true;
        emit TransactionConfirmed(transactionId);
        if(isTransactionConfirmed(transactionId)){
            executeTransaction(transactionId);
        }
    }


    function executeTransaction(uint transactionId) public payable {
        require(transactionId<transactions.length, "Invalid Transaction Id");
        require(!transactions[transactionId].executed, "Transaction is already executed");
        (bool success,)=transactions[transactionId].to.call{value:transactions[transactionId].value}("");
        require(success,"Transaction Executed failed");
        transactions[transactionId].executed=true;
        emit TransactionExecuted(transactionId);
        
    }
    function isTransactionConfirmed(uint transactionId) internal view returns(bool){
        require(transactionId<transactions.length, "Invalid Transaction Id");
        uint confirmationCount;

        for(uint i=0;i<owners.length;i++){
            if(isConfirmed[transactionId][owners[i]]){
                confirmationCount++;
            }
        } 
        return confirmationCount>= numConfirmationsReq;

    }
}
