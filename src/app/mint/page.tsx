import styles from "../page.module.css";

export default function Mint(){
    return <main className={styles.main}>
        <h1>Mint BULK NFTs</h1>
        {/* Large text area for inserting wallet address for each line */}
        <textarea rows={10} cols={40} placeholder="Put one wallet address in each line..."></textarea>
    </main>;
}