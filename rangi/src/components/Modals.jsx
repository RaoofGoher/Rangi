import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSave }) => {
  const [step, setStep] = useState(1); // To track the current step
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);

  if (!isOpen) return null;

  // Function to handle the first set of selections
  const handleFirstSelection = (selection) => {
    setFirstSelection(selection);
    setStep(2); // Move to the next step
  };

  // Function to handle the second set of selections
  const handleSecondSelection = (selection) => {
    setSecondSelection(selection);
    setStep(3); // Move to the final step
  };

  // Function to save the final selection
  const handleSave = () => {
    const finalData = {
      firstSelection,
      secondSelection,
    };
    onSave(finalData); // Call the onSave function to store the data
    onClose(); // Close the modal
    setStep(1); // Reset the modal steps
    setFirstSelection(null);
    setSecondSelection(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        {step === 1 && (
          <div>
            <h2 className="text-center mb-4">Select an Option</h2>
            <div className="flex flex-col space-y-2">
              <button onClick={() => handleFirstSelection('Option 1')} className="bg-blue-500 text-white py-2 rounded">Option 1</button>
              <button onClick={() => handleFirstSelection('Option 2')} className="bg-blue-500 text-white py-2 rounded">Option 2</button>
              <button onClick={() => handleFirstSelection('Option 3')} className="bg-blue-500 text-white py-2 rounded">Option 3</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-center mb-4">Select a Sub-Option</h2>
            <div className="flex flex-col space-y-2">
              <button onClick={() => handleSecondSelection('Sub-Option 1')} className="bg-green-500 text-white py-2 rounded">Sub-Option 1</button>
              <button onClick={() => handleSecondSelection('Sub-Option 2')} className="bg-green-500 text-white py-2 rounded">Sub-Option 2</button>
              <button onClick={() => handleSecondSelection('Sub-Option 3')} className="bg-green-500 text-white py-2 rounded">Sub-Option 3</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-center mb-4">Your Selections</h2>
            <p>First Selection: {firstSelection}</p>
            <p>Second Selection: {secondSelection}</p>
            <button onClick={handleSave} className="bg-blue-500 text-white py-2 rounded mt-4">
              Save and Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
