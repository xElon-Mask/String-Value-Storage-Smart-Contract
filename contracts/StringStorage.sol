// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.13;

contract StringStorage {
    string public phrase;

    function majPhrase(string memory _phrase) public {
        phrase = _phrase;
    }

    function getPhrase() view public returns(string memory) {
        return phrase;
    }


}