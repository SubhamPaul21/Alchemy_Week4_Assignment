// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract WinnerContract {
    function callAttemptFnc(address alchemyContract) external {
        (bool success, ) = alchemyContract.call(
            abi.encodeWithSignature("attempt()")
        );
        require(success);
    }
}
