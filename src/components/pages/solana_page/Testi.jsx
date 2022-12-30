import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import React, { useCallback } from "react";
import Base58 from "base-58";
export const SendLamportsToRandomAddress= () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    const commisionerAcc = "GEtzEteYKhYnjkqCitFMjpo3BgnamVuKgbrgRiV7WvDf"
    const base = Base58.encode(new Buffer(commisionerAcc))
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: commisionerAcc,
        lamports: 1912900,
      })
    );

    const signature = await sendTransaction(transaction, connection);
    console.log(signature,"signature");

    await connection.confirmTransaction(signature, "processed");
  }, [publicKey, sendTransaction, connection]);

  return (
    <button className="btn form-btn" onClick={onClick} disabled={!publicKey}>
      Send lamports to a random address!
    </button>
  );
};