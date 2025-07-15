
function Sidebar({ navTabs, activeTab, setActiveTab }) {
  return (
    <aside
      className="w-64 min-h-screen p-4"
      style={{ background: 'var(--color-background)', borderRight: '1px solid var(--color-accent)' }}
    >
      <ul className="space-y-2">
        {navTabs.map(tab => (
          <li key={tab.name}>
            <button
              className={`w-full text-left px-4 py-2 rounded font-medium`}
              style={{
                background: activeTab === tab.name ? 'var(--color-secondary)' : 'transparent',
                color: activeTab === tab.name ? 'white' : 'var(--color-text)',
                fontWeight: activeTab === tab.name ? 'bold' : 'normal',
                border: 'none',
                transition: 'background 0.2s',
              }}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
