import { FileText, Menu } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md px-4 py-3 z-50">
      <div className="flex items-center justify-between flex-wrap max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://www.optiven.co.ke/wp-content/uploads/2023/09/optiven-group-logo.png"
            alt="Optiven Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-green-800 focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Centered title */}
        <div className="w-full md:flex md:justify-center md:w-auto">
          <span
            className="block text-xl text-center md:text-3xl font-medium"
            style={{
              color: '#008236',
              fontFamily: 'Playfair Display, serif',
              marginTop: '0.5rem',
            }}
          >
            Sales Dashboard
          </span>
        </div>

        {/* Right section */}
        <div
          className={`w-full mt-4 md:mt-0 md:w-auto md:flex md:items-center md:gap-6 ${
            showMenu ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center bg-green-700 border border-green-400 rounded-md px-3 py-2 md:py-1 md:gap-2 mb-3 md:mb-0">
            <label className="text-sm font-medium text-white">Date Range:</label>
            <input
              type="date"
              className="text-sm text-white bg-transparent outline-none"
            />
            <span className="text-white">—</span>
            <input
              type="date"
              className="text-sm text-white bg-transparent outline-none"
            />
          </div>

          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-500 transition">
            <FileText size={16} />
            Export PDF
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
