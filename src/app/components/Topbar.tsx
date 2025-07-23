const Topbar = () => {
  return (
    <div className="bg-[#1a202c] text-white text-sm py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 font-medium tracking-wide">
      {/* Left Side - Contact Info */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
        <a
          href="tel:+923001234567"
          className="hover:text-yellow-400 transition-colors"
        >
          📞 +92 300 1234567
        </a>
        <a
          href="mailto:info@smartcommunity.com"
          className="hover:text-yellow-400 transition-colors"
        >
          📧 info@smartcommunity.com
        </a>
      </div>

      {/* Right Side - Address */}
      <div className="text-center sm:text-right">
        📍 123 Main Street, Lahore, Pakistan
      </div>
    </div>
  );
};

export default Topbar;
