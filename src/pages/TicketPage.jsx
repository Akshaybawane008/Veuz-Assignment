import BottomBuy from "../components/BottomBuy"
import TopBottom from "../components/TopBottom";
import TicketCard from "/src/components/TicketCard";
import { tickets } from "/src/data/ticketData";

const TicketPage = () => {
  return (
    <>
   <TopBottom/>
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
    <TopBottom/>
    <BottomBuy />
    </>
  );
};

export default TicketPage;
