const Topbar = () => {
  return (
    <div className="bg-[#1a202c] text-white text-sm py-2 px-4 flex justify-between items-center flex-wrap font-medium tracking-wide">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <span className="font-medium">📞 +92 300 1234567</span>
        <span className="font-medium">📧 info@smartcommunity.com</span>
      </div>
      <div className="font-medium">
        📍 123 Main Street, Lahore, Pakistan
      </div>
    </div>
  );
};

export default Topbar;
