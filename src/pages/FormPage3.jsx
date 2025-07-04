import React from 'react';
import TopBottom from "../components/TopBottom";
import { useNavigate } from 'react-router-dom';

const FormPage2 = () => {
  const navigate = useNavigate();
  
  const handlePrevClick = () => {
    navigate('/page2'); 
  };

  const handleNextClick = () => {
    navigate('/registersummurypage');
  };

  return (
    <>
      <div className="relative">
        <TopBottom />
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <img
            src="/loginbotton.png"
            alt="Decorative overlay"
            className="max-h-[80%] max-w-[80%] object-contain"
          />
        </div>
        <div className="relative z-0"></div>
      </div>
      
      <div className="text-center p-5 page-bg">
        <h1 className="mb-8">Page 3 loading....</h1>
        
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={handlePrevClick}
            className="pre-botton text-white px-8 py-2 rounded-md text-sm font-medium pre-botton"
          >
            PREVIOUS
          </button>
          
          <button
            type="button"
            onClick={handleNextClick}
            className="next-botton  text-white px-8 py-2 rounded-md text-sm font-medium"
          >
            NEXT
          </button>
        </div>
      </div>
      
      <div>
        <TopBottom />
      </div>
    </>
  );
};

export default FormPage2;