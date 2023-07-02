// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return <main className={styles.main}>
    {/* Link to page for Minting BULK NFTs */}
    <a className="card" href="/mint">
      <h2>Mint BULK NFTs &rarr;</h2>
    </a>
  </main>;
}
