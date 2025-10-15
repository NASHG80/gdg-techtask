import React from 'react';

const NavLink = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md font-medium transition tracking-tight ${
      active ? 'bg-slate-900 text-white' : 'text-slate-700 hover:text-slate-900'
    }`}
  >
    {label}
  </button>
);

export default function Navbar({ page, setPage }) {
  return (
    <header className="w-full bg-white/70 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 select-none">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">🚗</div>
          <div>
            <h1 className="font-semibold text-lg leading-tight">DriveEasy</h1>
            <p className="text-[11px] text-slate-500 -mt-1">Car Rental Service</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {[
            {key: 'home', label: 'Home'},
            {key: 'products', label: 'Fleet'},
            {key: 'features', label: 'Services'},
            {key: 'about', label: 'About'}
          ].map((p) => (
            <NavLink key={p.key} label={p.label} active={page===p.key} onClick={()=>setPage(p.key)} />
          ))}
          <button className="ml-4 px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700">Book Now</button>
        </nav>

        <div className="md:hidden">
          <select
            value={page}
            onChange={(e) => setPage(e.target.value)}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option value="home">Home</option>
            <option value="products">Fleet</option>
            <option value="features">Services</option>
            <option value="about">About</option>
          </select>
        </div>
      </div>
    </header>
  );
}
