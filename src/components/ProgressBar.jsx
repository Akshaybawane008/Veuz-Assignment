
import React from "react";
import { useLocation } from "react-router-dom";
import { Check } from "lucide-react"; 

const steps = [
  { label: "1", path: "/registerform" },
  { label: "2", path: "/page2" },
  { label: "3", path: "/page3" },
  { label: "4", path: "/registersummurypage" },
];

const ProgressBar = () => {
  const location = useLocation();
  const currentStep = steps.findIndex((step) => step.path === location.pathname);

  return (
    <div className="flex items-center justify-between max-w-md mx-auto px-4 py-6">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <React.Fragment key={index}>
           
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white
                ${isCompleted || isActive ? "bg-green-600" : "bg-gray-200 text-gray-500"}
              `}
            >
              {isCompleted ? <Check size={20} /> : step.label}
            </div>

            {index !== steps.length - 1 && (
              <div className="flex-1 h-2 mx-2 bg-gray-200 relative rounded-full">
              
                {(isCompleted || isActive) && (
                  <div
                    className={`absolute top-0 left-0 h-2 rounded-full ${
                      isCompleted ? "w-full" : "w-1/2"
                    } bg-green-600 transition-all duration-300`}
                  />
                )}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressBar;
  