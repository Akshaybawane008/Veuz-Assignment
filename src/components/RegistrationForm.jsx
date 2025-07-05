import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    region: "",
    email: "",
    confirmEmail: "",
    nationality: "",
    mobileCode: "+234",
    mobileNumber: "",
    companyName: "",
    jobTitle: "",
    companyType: "",
    industry: "",
    interests: [],
    workshops: [],
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const requiredFields = [
    "firstName",
    "lastName",
    "country",
    "email",
    "confirmEmail",
    "mobileNumber",
    "companyName",
    "jobTitle",
    "companyType",
    "industry",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedWorkshops;
      if (checked) {
        if (formData.workshops.length < 6) {
          updatedWorkshops = [...formData.workshops, value];
        } else {
          setErrors((prev) => ({
            ...prev,
            workshops: "You can select a maximum of 6 workshops.",
          }));
          return;
        }
      } else {
        updatedWorkshops = formData.workshops.filter((item) => item !== value);
      }

      setFormData((prev) => ({
        ...prev,
        workshops: updatedWorkshops,
      }));

      r;
      if (errors.workshops && updatedWorkshops.length <= 6) {
        setErrors((prev) => ({ ...prev, workshops: null }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field);
  };

  const validateField = (field) => {
    let error = "";

    if (requiredFields.includes(field) && !formData[field]) {
      error = "This field is required";
    } else if (field === "email" && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      error = "Invalid email format";
    } else if (
      field === "confirmEmail" &&
      formData.email !== formData.confirmEmail
    ) {
      error = "Emails do not match";
    } else if (
      field === "mobileNumber" &&
      !/^\d+$/.test(formData.mobileNumber)
    ) {
      error = "Invalid phone number";
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
    return !error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
        isValid = false;
      }
    });

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = "Emails do not match";
      isValid = false;
    }

    if (!/^\d+$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Invalid phone number";
      isValid = false;
    }

    if (formData.workshops.length === 0) {
      newErrors.workshops = "Please select at least one workshop.";
      isValid = false;
    } else if (formData.workshops.length > 6) {
      newErrors.workshops = "You can select a maximum of 6 workshops.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNextClick = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/page2");
    } else {
      const allTouched = {};
      Object.keys(formData).forEach((key) => {
        allTouched[key] = true;
      });

      if (errors.workshops) {
        allTouched.workshops = true;
      }
      setTouched(allTouched);
    }
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto p-4 bg-white border border-gray-200">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3 shadow-lg">
            <div className="w-full mb-3 px-3 h-24 bg-gradient flex flex-col md:flex-row justify-center md:justify-between gap-6 items-center">
              <h2 className="text-white font-semibold text-lg">
                Registration Information 1
              </h2>
              <span className="text-sm text-white px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                PREMIUM TICKET - FREEIncl. 19% VAT
              </span>
            </div>
            <div className="px-3">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 md:col-span-2">
                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={() => handleBlur("firstName")}
                      className={`w-full px-3 py-2 border ${
                        errors.firstName && touched.firstName
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500`}
                    />
                    {errors.firstName && touched.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={() => handleBlur("lastName")}
                      className={`w-full px-3 py-2 border ${
                        errors.lastName && touched.lastName
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500`}
                    />
                    {errors.lastName && touched.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 md:col-span-2">
                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country of residence*
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      onBlur={() => handleBlur("country")}
                      className={`w-full px-3 py-2 border ${
                        errors.country && touched.country
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500`}
                    >
                      <option value="">Please Select</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && touched.country && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.country}
                      </p>
                    )}
                  </div>

                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Region
                    </label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    >
                      <option value="">Please Select</option>
                      <option value="North">North</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="South">South</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 md:col-span-2">
                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      className={`w-full px-3 py-2 border ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Email address
                    </label>
                    <input
                      type="email"
                      name="confirmEmail"
                      value={formData.confirmEmail}
                      onChange={handleChange}
                      onBlur={() => handleBlur("confirmEmail")}
                      className={`w-full px-3 py-2 border ${
                        errors.confirmEmail && touched.confirmEmail
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500`}
                    />
                    {errors.confirmEmail && touched.confirmEmail && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmEmail}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 md:col-span-2">
                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nationality
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile number *
                    </label>
                    <div className="flex">
                      <select
                        name="mobileCode"
                        value={formData.mobileCode}
                        onChange={handleChange}
                        className="w-1/4 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500"
                      >
                        <option value="+234">+234</option>
                        <option value="+1">+1</option>
                      </select>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        onBlur={() => handleBlur("mobileNumber")}
                        className={`w-3/4 px-3 py-2 border-t border-r border-b ${
                          errors.mobileNumber && touched.mobileNumber
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-r-md focus:outline-none focus:ring-1 focus:ring-green-500`}
                      />
                    </div>
                    {errors.mobileNumber && touched.mobileNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.mobileNumber}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 md:col-span-2">
                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      onBlur={() => handleBlur("companyName")}
                      className={`w-full px-3 py-2 border ${
                        errors.companyName && touched.companyName
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500`}
                    />
                    {errors.companyName && touched.companyName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job title *
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      onBlur={() => handleBlur("jobTitle")}
                      className={`w-full px-3 py-2 border ${
                        errors.jobTitle && touched.jobTitle
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500`}
                    />
                    {errors.jobTitle && touched.jobTitle && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.jobTitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 md:col-span-2">
                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company type *
                    </label>
                    <select
                      name="companyType"
                      value={formData.companyType}
                      onChange={handleChange}
                      onBlur={() => handleBlur("companyType")}
                      className={`w-full px-3 py-2 border ${
                        errors.companyType && touched.companyType
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500`}
                    >
                      <option value="">Please Select</option>
                      <option value="Private">Private</option>
                      <option value="Public">Public</option>
                      <option value="Government">Government</option>
                    </select>
                    {errors.companyType && touched.companyType && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.companyType}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      onBlur={() => handleBlur("industry")}
                      className={`w-full px-3 py-2 border ${
                        errors.industry && touched.industry
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500`}
                    >
                      <option value="">Please Select</option>
                      <option value="Education">Education</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Mining">Mining</option>
                      <option value="Finance">Finance</option>
                      <option value="Tech">Technology</option>
                      <option value="Construction">Construction </option>
                    </select>
                    {errors.industry && touched.industry && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.industry}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center md:col-span-2 space-y-4 md:space-y-0">
                  <div className="text-center md:text-left">
                    <p className="whitespace-normal md:whitespace-nowrap mr-0 md:mr-4">
                      What products & services are you interested in? *
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="button-btn whitespace-nowrap p-2 px-5 w-full md:w-auto"
                    >
                      Select{" "}
                      <span className="font-bold">Solutions/Products</span>
                    </button>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">
                    Select Workshop (Maximum 6 can Select)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    {[
                      "Global Leaders Forum NEW (3 Days)",
                      "GITEX Main Stage",
                      "Artificial Intelligence & Robotics (15)",
                      "Future Health NEW (2 Days)",
                      "Cybersecurity (4 Days)",

                      "Digital Cities (1 Day)",
                      "Edtech (1 Day)",
                      "Energy Transition (1 Day)",
                      "Intelligent Connectivity (1 Day)",
                      "Digital Finance (1 Day)",
                      "Future Mobility (1 Day)",
                    ].map((item, i) => (
                      <label
                        key={`item-${i}`}
                        className="flex items-start space-x-2"
                      >
                        <input
                          type="checkbox"
                          name="workshops"
                          value={item}
                          checked={formData.workshops.includes(item)}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 border-gray-300 rounded focus:ring-green-500"
                        />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                  {errors.workshops && touched.workshops && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.workshops}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="w-full md:w-1/3 border border-gray-200 rounded-md h-fit">
            <div className="bg-image relative h-14 w-full rounded-t-lg">
              <img
                src="/Giteximg2.png"
                alt="Foreground"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-50 h-auto"
              />
            </div>
            <div className="mx-20 px-2 py-3 border-b bg-gradient text-center rounded-b-lg">
              <h3 className="text-sm font-semibold text-white">
                Registration information 1
              </h3>
            </div>
            <div className="p-4 space-y-4 text-center">
              <div>
                <p className="text-xs text-gray-400 uppercase font-extrabold">
                  FULL NAME
                </p>
                <p className="text-sm">
                  {formData.firstName} {formData.lastName}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase font-medium">
                  JOB TITLE
                </p>
                <p className="text-sm">{formData.jobTitle}</p>
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase font-medium">
                  COMPANY NAME
                </p>
                <p className="text-sm">{formData.companyName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase font-medium">
                  COUNTRY OF RESIDENCE
                </p>
                <p className="text-sm">{formData.country}</p>
              </div>
              <div className="mt-6 pt-4 bg-white border-t border-gray-200">
                <p className="text-xl text-gray-500 uppercase font-medium">
                  BADGE CATEGORY
                </p>
                <p className="text-xl font-extrabold">V I S I T O R</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 flex justify-center mt-4 gap-4">
        <button
          type="button"
          onClick={handleNextClick}
          className="next-botton text-white px-8 py-2 rounded-md text-sm font-medium"
        >
          NEXT
        </button>
      </div>
    </>
  );
};

export default RegistrationForm;
