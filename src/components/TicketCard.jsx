import { useNavigate } from "react-router-dom";

const TicketCard = ({ ticket }) => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate("/registerform", { state: { ticket } });
  };

  return (
    <div className="relative text-white rounded-[30px] shadow-lg overflow-hidden w-full ">
      {ticket.badge && (
        <div className="absolute top-0 left-0 z-10">
          <div className="bg-green-700 text-white text-[10px] font-bold px-2 py-1 rounded-br-md rounded-tl-[4px]">
            {ticket.badge}
          </div>
        </div>
      )}

      <div className="relative h-20 w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${ticket.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between px-8 py-4">
          <h3 className="text-lg font-extrabold font">{ticket.title}</h3>
          <p className="text-yellow-400 text-sm font-semibold">
            VIEW DETAILS →
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {" "}
        <div className="absolute inset-0">
          <img
            src="blackgroundCard.png"
            alt="Background"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(7,_29,_73,_0.9)_0%,_rgba(3,_14,_39,_0.95)_100%)]"></div>
        </div>
        <div className="relative">
          {" "}
          <div className="absolute inset-0">
            <img
              src="blackgroundCard.png"
              alt="Background"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(7,_29,_73,_0.9)_0%,_rgba(3,_14,_39,_0.95)_100%)]"></div>
          </div>
          <div className="relative z-10 p-8">
            <p className="text-[11px] text-white mb-3">
              Visitor Passes provide{" "}
              <span className="text-green-300 font-bold">3 DAYS ACCESS</span> to
              GITEX <br />
              NIGERIA exhibition and all free conference
            </p>

          
            {ticket.logo && (
              <div className="my-2">
                <img
                  src={ticket.logo}
                  alt="GITEX Logo"
                  className="w-28 h-auto"
                />
              </div>
            )}

          
            <ul className="text-xs space-y-1">
              {ticket.features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-center ${
                    ticket.activeFeatures.includes(index)
                      ? "text-white"
                      : "text-gray-400 line-through"
                  }`}
                >
                
                  <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/5 rounded-lg px-1 py-0.5">
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-green-500/20 border border-green-300 text-green-300 text-[8px]">
                      ✓
                    </span>
                    <span className="text-sm">{feature}</span>
                  </div>
                </li>
              ))}
            </ul>

       
            <div className="mt-4 pt-2 flex justify-between items-center gradient-border-top">
              <div>
                <div className="text-l font-bold">{ticket.price}</div>
                <div className="text-xs text-gray-700 dark:text-gray-400">
                  {ticket.vat}
                </div>
              </div>
              <button
                className="bg-white text-black px-4 py-1 text-sm rounded font-semibold hover:bg-gray-100 transition-colors"
                onClick={handleBuyClick}
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
