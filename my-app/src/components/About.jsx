import React from 'react';

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold tracking-tight">About DriveEasy</h3>
      <p className="mt-4 text-slate-600 leading-relaxed">
        Founded in 2015, DriveEasy has been revolutionizing the car rental industry with our commitment to convenience, 
        reliability, and exceptional customer service. We believe that renting a car should be as easy as driving one.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-lg mb-3">Our Mission</h4>
          <p className="text-sm text-slate-600">
            To provide accessible, affordable, and reliable transportation solutions that empower people to explore, 
            work, and live without limits.
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-lg mb-3">Why Choose Us</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>• Over 500 vehicles in our fleet</li>
            <li>• 50+ convenient pickup locations</li>
            <li>• 24/7 customer support</li>
            <li>• Competitive pricing with no hidden fees</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 border rounded-lg p-6 shadow-sm">
        <p className="text-sm text-center">
          <span className="font-medium">Trusted by 25,000+ customers</span> across the country. 
          Join the DriveEasy family today!
        </p>
      </div>
    </section>
  );
}
