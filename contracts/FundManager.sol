// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundManager {
    // Mapping to store the balance of each address
    mapping(address => uint256) private balances;

    // Payable function to receive funds
    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        balances[msg.sender] += msg.value;
    }

    // Function to transfer funds to another account
    function transferFunds(address payable recipient, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        require(amount > 0, "Transfer amount must be greater than zero");

        balances[msg.sender] -= amount;
        recipient.transfer(amount);
    }

    // Function to check the balance of the sender
    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }
}