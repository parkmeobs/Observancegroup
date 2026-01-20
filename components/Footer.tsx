"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-3">YourBrand</h2>
          <p className="text-sm text-gray-400">
            Building innovative digital solutions for modern businesses.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-medium mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-medium mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>AI Solutions</li>
            <li>Cloud Systems</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-medium mb-3">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-3">
            Get product updates & news
          </p>
          <div className="flex">
            <input
              className="bg-gray-900 border border-gray-700 px-3 py-2 text-sm outline-none flex-1"
              placeholder="Email address"
            />
            <button className="bg-white text-black px-4 text-sm">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
