import { FileText } from 'lucide-react'; // PDF icon

function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-6 py-3 bg-[var(--color-background)] shadow-md"
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
          className="text-3xl font-medium"
          style={{
            color: '#008236',
            fontFamily: 'Playfair Display, serif',
            marginRight: '2rem',      // shifts it slightly left of centre
          }}
        >
          Sales Dashboard
        </span>
      </div>

      {/* Date Range Picker + Export */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-[var(--color-background)] border border-[var(--color-accent)] rounded-md px-3 py-1">
          <label className="text-sm font-medium text-[var(--color-text)] whitespace-nowrap">
            Date Range:
          </label>
          <input
            type="date"
            className="text-sm text-[var(--color-text)] outline-none"
          />
          <span className="mx-1 text-[var(--color-accent)]">—</span>
          <input
            type="date"
            className="text-sm text-[var(--color-text)] outline-none"
          />
        </div>

        <button
          className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-md font-medium hover:bg-opacity-90 transition"
        >
          <FileText size={16} />
          Export PDF
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
