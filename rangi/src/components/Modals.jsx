import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onSave }) => {
  const [step, setStep] = useState(1);
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);
  const [options, setOptions] = useState([]); // State for the fetched options
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch options from the backend when the modal opens
    if (isOpen) {
      setLoading(true);
      setError(null);
      
      fetch('http://localhost:8000/options') // Replace with your backend API endpoint
        .then((response) => response.json())
        .then((data) => {
          setOptions(data); // Assume data is an array of options
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to load options');
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Function to handle the first set of selections
  const handleFirstSelection = (selection) => {
    setFirstSelection(selection);
    setSecondSelection(null); // Reset second selection when first selection changes
    setStep(2);
  };

  // Function to handle the second set of selections
  const handleSecondSelection = (selection) => {
    setSecondSelection(selection);
    setStep(3);
  };

  // Function to save the final selection
  const handleSave = () => {
    const finalData = {
      firstSelection,
      secondSelection,
    };
    onSave(finalData);
    onClose();
    setStep(1);
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

        {loading ? (
          <p>Loading options...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : step === 1 ? (
          <div>
            <h2 className="text-center mb-4">Select an Option</h2>
            <div className="flex flex-col space-y-2">
              {options.map((optionCategory) => (
                <button
                  key={optionCategory.id}
                  onClick={() => handleFirstSelection(optionCategory)}
                  className="bg-blue-500 text-white py-2 rounded"
                >
                  {optionCategory.category}
                </button>
              ))}
            </div>
          </div>
        ) : step === 2 ? (
          <div>
            <h2 className="text-center mb-4">Select a Sub-Option</h2>
            {firstSelection && (
              <div className="flex flex-col space-y-2">
                {firstSelection.options.map((subOption) => (
                  <button
                    key={subOption.id}
                    onClick={() => handleSecondSelection(subOption)}
                    className="bg-green-500 text-white py-2 rounded"
                  >
                    {subOption.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-center mb-4">Your Selections</h2>
            <p>First Selection: {firstSelection ? firstSelection.category : 'None'}</p>
            <p>Second Selection: {secondSelection ? secondSelection.name : 'None'}</p>
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
