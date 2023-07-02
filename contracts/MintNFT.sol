pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/drafts/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ORGNFT is ERC721Full, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // A url for the metadata or simply Organisation Logo
    string memory tokenURI;

    constructor(string memory _tokenURI) ERC721Full("ORGNFT", "ORG") public {
        tokenURI = _tokenURI;
    }

    function mintNFT(address recipient) public returns (uint256) onlyOwner {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}