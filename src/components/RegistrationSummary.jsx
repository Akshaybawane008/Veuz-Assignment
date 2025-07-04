import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationSummary = () => {
  const [promo, setPromo] = useState("");
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const [appliedPromoCode, setAppliedPromoCode] = useState(null);
  const [consentError1, setConsentError1] = useState(false);
  
  const [consentError2, setConsentError2] = useState(false); 
  const [promoCodeError, setPromoCodeError] = useState(null);
  const [showPromoSuggestions, setShowPromoSuggestions] = useState(false);

  const navigate = useNavigate();
  const validPromoCodes = {
    "GITEX15": {
      discountPercentage: "15%",
      discountAmount: "EUR 0.06",
      appliedTo: "2 lowest-priced tickets",
    },
    "GITEX20": {
      discountPercentage: "10%",
      discountAmount: "EUR 0.04",
      appliedTo: "all tickets",
    },
    "GITEX25": {
        discountPercentage: "25%",
        discountAmount: "EUR 0.02",
        appliedTo: "any three ticket",
    },
  };

  const handleprevClick = () => {
    navigate('/page3');
  };

  const handleApplyPromo = () => {
    setPromoCodeError(null);
    setShowPromoSuggestions(false);
    const cleanedPromo = promo.toUpperCase().trim();

    if (!cleanedPromo) {
      setPromoCodeError("Please enter a promo code.");
      return;
    }

    if (validPromoCodes[cleanedPromo]) {
      setAppliedPromoCode({
        code: cleanedPromo,
        ...validPromoCodes[cleanedPromo],
      });
      setPromoCodeError(null);
      setPromo("");
    } else {
      setPromoCodeError("Invalid promo code. Please try a valid code.");
      setAppliedPromoCode(null);
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromoCode(null);
    setPromo("");
    setPromoCodeError(null);
    setShowPromoSuggestions(false);
  };

  const handleNextClick = () => {
    let isValid = true;


    if (!consent1) {
      setConsentError1(true);
      isValid = false;
    } else {
      setConsentError1(false);
    }

    if (!consent2) {
    
      setConsentError2(true);
      isValid = false;
    } else {
     
      setConsentError2(false);
    }

    if (isValid) {
      navigate('/success');
    }
  };

  const handlePromoInputChange = (e) => {
    setPromo(e.target.value);
    setPromoCodeError(null);
    setShowPromoSuggestions(true);
    setAppliedPromoCode(null);
  };

  const selectPromoCode = (code) => {
    setPromo(code);
    setShowPromoSuggestions(false);
    setPromoCodeError(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded shadow border mt-8 mb-8">

      <div className="bg-green-700 text-white text-lg font-semibold py-2 px-4 rounded-t">
        Registration Summary
      </div>

      <div className="p-4 border-b">
        <div className="flex justify-between text-sm font-medium text-gray-800 mb-2">
          <span>PREMIUM TICKET x 2</span>
          <span>EUR 40.19</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Student Ticket Access On Day 3 Only</span>
          <span>
            EUR 50.40 SUBJECT TO APPROVAL <span className="text-xs">(Incl. 19%)</span>
          </span>
        </div>
      </div>
      <div className="p-4 bg-green-50 border border-green-300 rounded my-4 relative">
        <label className="block text-green-800 mb-1 font-medium text-sm">
          Have a promo code?
        </label>
        {!appliedPromoCode ? (
          <div className="flex gap-3">
            <input
              type="text"
              value={promo}
              onChange={handlePromoInputChange}
              onFocus={() => setShowPromoSuggestions(true)}
              onBlur={() => setTimeout(() => setShowPromoSuggestions(false), 100)}
              placeholder="Enter Promo code"
              className={`w-full px-3 py-2 border ${promoCodeError ? 'border-red-500' : 'border-green-300'} focus:outline-none`}
            />
            <button
              onClick={handleApplyPromo}
              className="text-white px-4 py-2 rounded text-sm pre-botton"
            >
              APPLY
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 bg-gray-200 p-2 rounded">
              <input
                type="text"
                value={appliedPromoCode.code}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-700 cursor-not-allowed"
              />
            </div>
          </div>
        )}
        {showPromoSuggestions && promo.length > 0 && !appliedPromoCode && (
            <div className="absolute z-10 bg-white border border-gray-300 w-[calc(100%-100px)] mt-1 rounded shadow-lg">
                {Object.keys(validPromoCodes)
                    .filter(code => code.toLowerCase().includes(promo.toLowerCase()))
                    .map((code) => (
                        <div
                            key={code}
                            className="p-2 cursor-pointer hover:bg-gray-100"
                            onMouseDown={() => selectPromoCode(code)}
                        >
                            {code}
                        </div>
                    ))
                }
                {Object.keys(validPromoCodes).filter(code => code.toLowerCase().includes(promo.toLowerCase())).length === 0 && (
                    <div className="p-2 text-gray-500">No matching promo codes.</div>
                )}
            </div>
        )}

        {promoCodeError && (
          <p className="text-red-500 text-xs mt-1">{promoCodeError}</p>
        )}

        {appliedPromoCode && (
          <div className="mt-2 p-2 bg-green-100 border border-green-300 rounded">
            <p className="text-green-700 text-sm">
              Promo code "<span className="font-semibold">{appliedPromoCode.code}</span>" applied successfully! Applied to {appliedPromoCode.appliedTo}
            </p>
            <div className="flex justify-between items-center mt-1">
              <div className="text-sm text-gray-800">
                <p>Promo code applied: <span className="font-semibold">{appliedPromoCode.code}</span></p>
                <p>Promo code applied: {appliedPromoCode.discountPercentage} ({appliedPromoCode.discountAmount} incl. VAT)</p>
                <p>Applied to: <span className="font-semibold">{appliedPromoCode.appliedTo}</span></p>
              </div>
              <button
                onClick={handleRemovePromo}
                className="text-red-600 border border-red-600 px-4 py-1 rounded text-xs hover:bg-red-50"
              >
                REMOVE
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end px-4 mb-4 text-sm font-medium">
        <span className="text-gray-800">
          Total: <span className="font-bold">EUR 300</span>{" "}
          <span className="text-xs text-gray-600">Incl. 19% VAT</span>
        </span>
      </div>

      <div className="px-4 space-y-4 text-sm text-gray-800">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={consent1}
            onChange={() => {
              setConsent1(!consent1);
              setConsentError1(false);
            }}
            className="mt-1"
          />
          <span>
            I have read and accept the{" "}
            <a href="#" className="text-red-600 underline">
              terms and conditions, Privacy Policy
            </a>
            , and consent that attendees under the age of 21 will not be admitted, and
            admission to the exhibition is restricted to trade and business professionals
            only, and students above 16 and below 18 can attend only if accompanied by
            school or faculty member <span className="text-red-500">*</span>
          </span>
        </label>
        {consentError1 && (
          <p className="text-red-500 text-xs mt-1 -translate-y-3">
            You must accept the terms and conditions.
          </p>
        )}

        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={consent2}
            onChange={() => {
              setConsent2(!consent2);
             
              setConsentError2(false);
            }}
            className="mt-1"
          />
          <span>
            I hereby consent the use of my data by the organiser, exhibitors and sponsors
            of DWTC & KAOUN International to delivering services and for marketing
            purposes. I am aware that I can object to the sending of newsletters at any
            time <span className="text-red-500">*</span>
          </span>
        </label>
       
        {consentError2 && ( 
          <p className="text-red-500 text-xs mt-1 -translate-y-3">
            You must provide consent for data usage.
          </p>
        )}
      </div>

      <div className="flex justify-between items-center mt-6 px-4">
        <button className="text-white px-6 py-2 rounded pre-botton"
          onClick={handleprevClick}
        >
          PREVIOUS
        </button>
        <button
          className=" text-white px-6 py-2 rounded next-botton "
          onClick={handleNextClick}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default RegistrationSummary;