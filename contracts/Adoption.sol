pragma solidity ^0.4.4;

contract Adoption {
    address[16] public adopters;


    function Adoption() public {
        for (uint i=0; i < adopters.length; i++) {
            adopters[i] = 0x0000000000000000000000000000000000000000;
        }
    }
    // Adopting a pet
    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 15);

        adopters[petId] = msg.sender;

        return petId;
    }

    // Retrieving the adopters
    function getAdopters() constant public returns (address[16]) {
         return adopters;
    }
}