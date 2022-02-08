//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HelloWorld {

      constructor(){
          greet();
         }
    
    function greet() public view returns (string memory) {
        return "Hello World !!";
    }

}


