import { useState } from 'react';
import { getMnemonic, getWalletAddress } from './index.js';

const App = () => {
  const [mnemonic, setMnemonic] = useState(null);
  const [walletKeys, setWalletKeys] = useState([]);

  const generateNewAddress = async () => {
    if (mnemonic) {
      try {
        const newAddress = getWalletAddress(mnemonic, walletKeys.length);
        setWalletKeys([...walletKeys, newAddress]);
      } catch (error) {
        console.error("Error generating address:", error);
      }
    }
  };


  return (
    <div className="h-screen flex flex-col items-center justify-start">
      <div className="bg-white rounded-lg shadow-md p-8 w-96 flex items-center justify-center">
        {mnemonic ? (
          <div className="flex flex-col justify-center items-center">
            <p>Mnemonic: {mnemonic}</p>
            <br/>
            <ul>
              {walletKeys.map((key, index) => (
                <li key={index}>{key}</li>
              ))}
            </ul>
            <br />
            <button className="bg-gray-300 rounded-lg px-4 py-2" onClick={generateNewAddress}>
              Generate a New Address
            </button>
          </div>
        ) : (
          <button className="bg-gray-300 rounded-lg px-4 py-2" onClick={() => setMnemonic(getMnemonic())}>
            Generate Mnemonic
          </button>
        )}
      </div>
    </div>
  );
};

export default App;