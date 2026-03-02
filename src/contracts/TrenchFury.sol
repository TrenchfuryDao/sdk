// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TrenchFury {
    address public owner;

    struct Player {
        uint256 score;
        bool registered;
    }

    mapping(address => Player) public players;

    constructor() {
        owner = msg.sender;
    }

    function register() public {
        require(!players[msg.sender].registered, "Already registered");
        players[msg.sender] = Player(0, true);
    }

    function updateScore(address player, uint256 newScore) public {
        require(msg.sender == owner, "Not authorized");
        players[player].score = newScore;
    }
}
