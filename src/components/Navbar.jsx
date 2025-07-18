import { FileText } from 'lucide-react'; // PDF icon

function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-6 py-3 bg-green-100 shadow-md"
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src="https://www.optiven.co.ke/wp-content/uploads/2023/09/optiven-group-logo.png"
          alt="Optiven Logo"
          className="h-14 w-auto"
        />
      </div>

      {/* Centered Title */}
      <div className="flex-1 flex justify-center">
        <span
          className="text-3xl font-medium text-gray-100"
          style={{
            color: '#008236',
            fontFamily: 'Playfair Display, serif',
            marginRight: '2rem', // shifts it slightly left of centre
          }}
        >
          Sales Dashboard
        </span>
      </div>

      {/* Date Range Picker + Export */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-green-700 border border-green-400 rounded-md px-3 py-1">
          <label className="text-sm font-medium text-gray-300 whitespace-nowrap">
            Date Range:
          </label>
          <input
            type="date"
            className="text-sm text-gray-200 bg-transparent outline-none"
          />
          <span className="mx-1 text-gray-500">—</span>
          <input
            type="date"
            className="text-sm text-gray-200 bg-transparent outline-none"
          />
        </div>

        <button
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-500 transition"
        >
          <FileText size={16} className="text-white" />
          Export PDF
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
