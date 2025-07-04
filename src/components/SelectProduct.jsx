import React, { useState } from "react";

const solutionsList = [
  "Global Leaders Forum !NEW (3 Days)",
  "GITEX Main Stage",
  "Artificial Intelligence & Robotics (15)",
  "Future Health !NEW (2 Days)",
  "Cybersecurity (4 Days)",
  "Future Health !NEW (2 Days)",
  "AI Everything (4 Days)",
  "Future Health !NEW (2 Days)",
];

const SelectProduct = () => {
  const [selected, setSelected] = useState([]);

  const toggleCheckbox = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      if (selected.length < 5) {
        setSelected([...selected, item]);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-[500px] max-w-full shadow-lg overflow-hidden">
      
        <div className="bg-gradient-to-r from-green-700 to-green-500 p-4 flex justify-between items-center text-white rounded-t-xl">
          <h2 className="text-lg font-bold">SELECT SOLUTIONS/PRODUCTS</h2>
          <button className="text-white text-xl font-bold">&times;</button>
        </div>

       
        <div className="p-5">
          
          <input
            type="text"
            placeholder="Try Product/Service"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-4"
          />

        
          <p className="text-xs text-gray-600 mb-4">
            I Am Interested In Sourcing The Following Solutions/Products? (Select Top 5) *
            Please Ensure You Have Chosen At Least One Category In Each Section
          </p>

      
          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {solutionsList.map((item, index) => (
              <label key={index} className="flex items-center space-x-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selected.includes(item)}
                  onChange={() => toggleCheckbox(item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

    
        <div className="flex justify-end items-center border-t px-5 py-3 space-x-3">
          <button className="px-4 py-1 border border-gray-400 rounded text-gray-700 text-sm hover:bg-gray-100">
            CANCEL
          </button>
          <button className="px-4 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectProduct;

