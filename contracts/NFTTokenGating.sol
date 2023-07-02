// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTTokenGating is Ownable {
    IERC721 public nftContract;
    mapping(uint256 => bool) public tokenGated;

    constructor(address _nftAddress) {
        nftContract = IERC721(_nftAddress);
    }

    function gateToken(uint256 _tokenId) public onlyOwner {
        require(nftContract.ownerOf(_tokenId) == owner(), "You are not the owner of this token");
        tokenGated[_tokenId] = true;
    }

    function ungateToken(uint256 _tokenId) public onlyOwner {
        require(nftContract.ownerOf(_tokenId) == owner(), "You are not the owner of this token");
        tokenGated[_tokenId] = false;
    }

    function isTokenGated(uint256 _tokenId) public view returns (bool) {
        return tokenGated[_tokenId];
    }
}
