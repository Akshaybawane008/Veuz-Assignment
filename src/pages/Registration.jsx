import TopBottom from "../components/TopBottom";
import RegistrationForm from "../components/RegistrationForm";

const Registration = () => {
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
      <div className="page-bg py-7">
        <RegistrationForm />
      </div>
      <TopBottom />
    </>
  );
};

export default Registration;
