import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight">
          Rent Your Perfect Car
          <span className="text-blue-600"> Today</span>
        </h2>
        <p className="mt-6 text-slate-600 max-w-xl leading-relaxed">
          Choose from our premium fleet of vehicles. From economy cars to luxury SUVs, we have the perfect ride for every journey. Book now and drive away in minutes.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-sm hover:bg-blue-700">Book Now</button>
          <button className="px-6 py-3 border rounded-lg font-medium hover:bg-slate-50">View Fleet</button>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
          {[
            {label:'Happy Customers', value:'25k+'},
            {label:'Cars Available', value:'500+'},
            {label:'Locations', value:'50+'},
          ].map((stat) => (
            <div key={stat.label} className="p-3 bg-white rounded-lg border shadow-sm text-center">
              <p className="text-xs text-slate-500">{stat.label}</p>
              <p className="font-bold text-lg">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-blue-50 to-white border shadow-lg p-6 overflow-hidden">
          {/* Car Image Placeholder */}
          <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-slate-100 rounded-xl flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="text-6xl mb-2">🚗</div>
              <p className="text-slate-600 font-medium">Premium Car Fleet</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border">
              <p className="text-xs text-slate-400">Starting From</p>
              <p className="font-bold text-2xl text-green-600">$29/day</p>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <p className="text-xs text-slate-400">Available Now</p>
              <p className="font-bold text-2xl text-blue-600">150+</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">✓</div>
              <div>
                <p className="text-sm font-medium">Free Cancellation</p>
                <p className="text-xs text-slate-400">Cancel up to 24h before pickup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
