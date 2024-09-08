import React, { useState } from 'react';

const WalletDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondStageOpen, setIsSecondStageOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  const openSecondStage = () => setIsSecondStageOpen(true);
  const closeSecondStage = () => setIsSecondStageOpen(false);

  return (
    <div class="h-screen flex items-center ">
      {!(isOpen || isSecondStageOpen) && (
        <button onClick={openDialog} className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          Start Wallet Setup
        </button>
      )}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-gray-100 rounded shadow-lg p-5">
            <h2 className="text-xl font-bold mb-4">Generate Mnemonic</h2>
            <p>This is the first stage of the dialog.</p>
            <button onClick={openSecondStage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
          </button>
          </div>
        </div>
      )}
      {isSecondStageOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded shadow-lg p-5">
            <h2 className="text-xl font-bold mb-4">Second Stage</h2>
            <p>This is the second stage of the dialog.</p>
            <button onClick={closeSecondStage} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletDialog;
