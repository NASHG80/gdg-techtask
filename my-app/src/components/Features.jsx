import React from 'react';

const FeatureCard = ({ title, desc, icon }) => (
  <div className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition">
    <div className="text-4xl mb-4">{icon}</div>
    <h4 className="font-semibold tracking-tight text-lg">{title}</h4>
    <p className="text-sm text-slate-500 mt-2 leading-relaxed">{desc}</p>
  </div>
);

export default function Features() {
  const features = [
    {
      title: "24/7 Support",
      desc: "Round-the-clock customer service for all your rental needs.",
      icon: "🛠️"
    },
    {
      title: "Free Cancellation",
      desc: "Cancel your booking up to 24 hours before pickup at no cost.",
      icon: "✅"
    },
    {
      title: "Multiple Locations",
      desc: "Pick up and drop off at over 50 convenient locations.",
      icon: "📍"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold tracking-tight">Why Choose DriveEasy?</h3>
      <p className="mt-3 text-slate-600 max-w-2xl leading-relaxed">Experience the best car rental service with unmatched convenience, reliability, and customer satisfaction.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} desc={feature.desc} icon={feature.icon} />
        ))}
      </div>
    </section>
  );
}