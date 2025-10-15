import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <p className="font-semibold text-lg flex items-center gap-2">
              🚗 DriveEasy
            </p>
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} DriveEasy — Your Trusted Car Rental Partner</p>
          </div>
          <div className="flex gap-6 text-slate-600 text-sm">
            <div className="hover:text-blue-600 cursor-pointer">Privacy Policy</div>
            <div className="hover:text-blue-600 cursor-pointer">Terms of Service</div>
            <div className="hover:text-blue-600 cursor-pointer">Contact Us</div>
            <div className="hover:text-blue-600 cursor-pointer">Support</div>
          </div>
        </div>
        
        <div className="border-t pt-4 text-center">
          <p className="text-xs text-slate-400">
            Available 24/7 • Call us: 1-800-DRIVE-EASY • Email: support@driveeasy.com
          </p>
        </div>
      </div>
    </footer>
  );
}