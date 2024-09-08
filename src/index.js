import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";


export const getMnemonic = () => {
  const mnemonic = generateMnemonic();
  return mnemonic;
};


export const getWalletAddress = (mnemonic, walletNumber) => {
  const seed = mnemonicToSeedSync(mnemonic);
  const path = `m/44'/501'/${walletNumber}'/0'`; // Derivation path for Solana
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  return Keypair.fromSecretKey(secret).publicKey.toBase58();
};

