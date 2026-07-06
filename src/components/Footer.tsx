'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="hidden md:block bg-surface-container-lowest py-stack-xl px-margin-desktop border-t-4 border-primary mt-auto relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="col-span-2">
          <h2 className="font-display-md text-display-md text-primary mb-4">HWY MAGICIAN</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
            Born in the garage, raised on the street. High-velocity goods for the modern nomad.
          </p>
          <div className="flex gap-4 mt-8">
            <a 
              href="mailto:contact@hwymagician.com" 
              className="w-10 h-10 border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors cursor-pointer rounded-sm"
              title="Email Convoy"
            >
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a 
              href="https://instagram.com/hwymagician" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors cursor-pointer rounded-sm"
              title="Instagram Page"
            >
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <Link 
              href="/shop" 
              className="w-10 h-10 border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors cursor-pointer rounded-sm"
              title="Garage Drops"
            >
              <span className="material-symbols-outlined">bolt</span>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-headline-lg text-headline-lg text-on-surface mb-6 uppercase">NAVIGATE</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/shop" className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors uppercase">
                ALL COLLECTIONS
              </Link>
            </li>
            <li>
              <Link href="/shop?category=Kustom" className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors uppercase">
                KUSTOM SERVICE
              </Link>
            </li>
            <li>
              <Link href="/profile" className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors uppercase">
                PILOT LOGS
              </Link>
            </li>
            <li>
              <Link href="/cart" className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors uppercase">
                MY GARAGE
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline-lg text-headline-lg text-on-surface mb-6 uppercase">INFO</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <span className="font-label-lg text-label-lg text-outline-variant cursor-default uppercase">
                SHIPS IN 48 HOURS
              </span>
            </li>
            <li>
              <span className="font-label-lg text-label-lg text-outline-variant cursor-default uppercase">
                RETURNS WELCOME
              </span>
            </li>
            <li>
              <span className="font-label-lg text-label-lg text-outline-variant cursor-default uppercase">
                PRIVACY POLICY
              </span>
            </li>
            <li>
              <span className="font-label-lg text-label-lg text-outline-variant cursor-default uppercase">
                TERMS OF SERVICE
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-stack-xl pt-stack-md border-t-2 border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          © {new Date().getFullYear()} HIGHWAY MAGICIAN. ALL RIGHTS RESERVED.
        </span>
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">
          Built for the fast lane.
        </span>
      </div>
    </footer>
  );
}
