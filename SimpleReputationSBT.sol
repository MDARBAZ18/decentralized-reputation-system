// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleReputationSBT {
    uint256 public tokenCounter;

    struct User {
        uint256 reputation;
        bool hasMinted;
        uint256 tokenId;
    }

    mapping(address => User) public users;
    mapping(uint256 => address) public tokenOwners;

    address public admin;

    constructor() {
        admin = msg.sender;
        tokenCounter = 0;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this");
        _;
    }

    function updateReputation(address _user, uint256 _points) public onlyAdmin {
        users[_user].reputation += _points;
    }

    function mintSBT() public {
        require(!users[msg.sender].hasMinted, "Already minted");

        tokenCounter += 1;
        users[msg.sender].hasMinted = true;
        users[msg.sender].tokenId = tokenCounter;
        tokenOwners[tokenCounter] = msg.sender;
    }

    function getReputation(address _user) public view returns (uint256) {
        return users[_user].reputation;
    }

    function getTokenOwner(uint256 _tokenId) public view returns (address) {
        return tokenOwners[_tokenId];
    }

    // SBT cannot be transferred
    function transfer(uint256 _tokenId, address _to) public {
        revert("SBTs are non-transferable");
    }
}
