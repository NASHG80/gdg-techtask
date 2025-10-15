import React from 'react';

const CarCard = ({ title, desc, price, emoji }) => (
  <div className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition">
    <div className="text-4xl mb-4">{emoji}</div>
    <h4 className="font-semibold tracking-tight text-lg">{title}</h4>
    <p className="text-sm text-slate-500 mt-2 leading-relaxed">{desc}</p>
    <div className="mt-4 flex items-center justify-between">
      <span className="text-blue-600 font-bold text-lg">{price}</span>
      <button className="text-blue-600 font-medium text-sm hover:text-blue-700">Book Now →</button>
    </div>
  </div>
);

export default function Products() {
  const carCategories = [
    { 
      title: 'Economy Cars', 
      desc: 'Perfect for city driving and budget-conscious travelers.',
      price: '$29/day',
      emoji: '🚗'
    },
    { 
      title: 'SUVs', 
      desc: 'Spacious and comfortable for family trips and adventures.',
      price: '$59/day',
      emoji: '🚙'
    },
    { 
      title: 'Luxury Cars', 
      desc: 'Premium vehicles for special occasions and business.',
      price: '$129/day',
      emoji: '🏎️'
    },
    { 
      title: 'Vans & Trucks', 
      desc: 'Large capacity vehicles for moving and group travel.',
      price: '$79/day',
      emoji: '🚐'
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold tracking-tight">Our Fleet</h3>
      <p className="mt-3 text-slate-600 max-w-2xl leading-relaxed">Choose from our diverse range of vehicles. From compact cars to luxury SUVs, we have the perfect vehicle for every need and budget.</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {carCategories.map((car) => (
          <div key={car.title} className="transform hover:-translate-y-1 transition">
            <CarCard title={car.title} desc={car.desc} price={car.price} emoji={car.emoji} />
          </div>
        ))}
      </div>
    </section>
  );
}