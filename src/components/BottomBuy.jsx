

const BottomBuy = () => {
  return (
   <div className="w-full p-4 flex justify-end gap-10 text-white bg-gradient">
      <div className="text-sm sm:text-base">
        <p>
          Total: <span className="font-bold text-white font-width-500 text-xl">EUR 0</span>{' '}
          <span className="text-gray-200">Incl. 19% VAT</span>
        </p>
        <p className="text-xs underline text-gray-200 mt-1">View Ticket summary</p>
      </div>
      <button className="bg-white text-green-800 font-semibold text-sm px-6 py-1 rounded">
        Buy Now
      </button>
    </div>
  );
};

export default BottomBuy;
