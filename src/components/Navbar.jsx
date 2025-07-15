import React from 'react';

function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-6 py-4 shadow"
      style={{ background: 'var(--color-background)' }}
    >
      <div className="flex items-center gap-4">
        <img src="https://www.optiven.co.ke/wp-content/uploads/2023/09/optiven-group-logo.png" alt="Logo" className="h-13 w-41" />
        <span
          className="font-bold text-xl"
          style={{ color: 'var(--color-primary)' }}
        >
          Sales Dashboard
        </span>
      </div>
      <div className="flex items-center gap-4">
        {/* Date Range Picker Placeholder */}
        <input type="date" className="border rounded px-2 py-1" style={{ color: 'var(--color-text)', borderColor: 'var(--color-accent)' }} />
        <input type="date" className="border rounded px-2 py-1" style={{ color: 'var(--color-text)', borderColor: 'var(--color-accent)' }} />
        {/* Export PDF Button */}
        <button
          className="px-4 py-2 rounded"
          style={{ background: 'var(--color-primary)', color: 'var(--color-background)' }}
        >
          Export PDF
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
