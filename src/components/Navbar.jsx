import { useWallet } from "../hooks/useWallet";

export default function Navbar() {
  const { account, connectWallet } = useWallet();

  return (
    <nav className="nav">
      <h1>🔥 Trenchfury</h1>
      {account ? (
        <button className="btn">{account.slice(0, 6)}...</button>
      ) : (
        <button className="btn" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </nav>
  );
}
