'use client';
import { useState } from "react";
import styles from "../page.module.css";
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import MintNFT from "../../artifacts/contracts/MintNFT.sol/MintNFT.json"

export default function Mint(){

    // Contract address
    // TODO: Update this with the contract address from the deploy script
    // There are actually multiple ideas for how to do this:
    // 1. Hardcode the contract address
    // 2. Prompt the user to enter the contract address
    // 3. Create a multi Tenant contract that can be deployed on a click by the organisation that wants to use it
    const [contractAddress, setContractAddress] = useState('')

    const mintNFts = async () => {
        // Connect to wallet
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        // Get contract
        let contract = new ethers.Contract(contractAddress, MintNFT.abi, signer)
        let transaction = await contract.mintNFT()
        
        // Wait for transaction to finish and log it to console
        let tx = await transaction.wait()
        let event = tx.events[0]
        console.log("event:", event)
        let value = event.args[2]
        let tokenId = value.toNumber()
        console.log(tokenId)
    }

    return <main className={styles.main}>
        <h1>Mint BULK NFTs</h1>
        {/* Large text area for inserting wallet address for each line */}
        <textarea rows={10} cols={40} placeholder="Put one wallet address in each line..."></textarea>
        {/* Button to mint NFTs */}
        <button onClick={mintNFts}>Mint NFTs</button>
    </main>;
}