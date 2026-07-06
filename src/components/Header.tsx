'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background border-b-2 border-outline-variant shadow-[4px_4px_0px_0px_rgba(255,181,158,1)] flex justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-md">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center hover:bg-surface-container-high p-1 rounded"
          >
            <span className="material-symbols-outlined text-primary font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
              menu
            </span>
          </button>
          <Link href="/">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tighter text-on-background uppercase select-none hover:text-primary transition-colors cursor-pointer">
              HighWaY MAGICIAN
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="font-label-lg text-label-lg text-primary hover:underline uppercase">
              HOME
            </Link>
            <Link href="/shop" className="font-label-lg text-label-lg text-primary hover:underline uppercase">
              SHOP
            </Link>
            <Link href="/cart" className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary uppercase">
              GARAGE
            </Link>
          </nav>

          <Link href="/cart">
            <button className="relative p-2 flex items-center justify-center hover:bg-primary hover:text-on-primary text-primary transition-colors duration-150 rounded active:translate-y-0.5">
              <span className="material-symbols-outlined">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-on-secondary text-[10px] font-bold px-1 rounded-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </header>

      {/* Sidebar Drawer Menu for Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-start">
          <div className="w-80 h-full bg-surface-container border-r-2 border-outline-variant p-stack-lg flex flex-col justify-between relative shadow-[4px_0_0_0_#ffb59e]">
            <div>
              <div className="flex justify-between items-center border-b-2 border-outline-variant pb-stack-md mb-stack-lg">
                <span className="font-headline-lg-mobile text-primary uppercase">NAV PROTOCOL</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[28px]">close</span>
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                <Link 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display-md text-display-md text-on-background hover:text-primary transition-colors text-left"
                >
                  01. HOME
                </Link>
                <Link 
                  href="/shop" 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display-md text-display-md text-on-background hover:text-primary transition-colors text-left"
                >
                  02. SHOP ALL
                </Link>
                <Link 
                  href="/cart" 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display-md text-display-md text-on-background hover:text-primary transition-colors text-left"
                >
                  03. MY GARAGE
                </Link>
                <Link 
                  href="/profile" 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display-md text-display-md text-on-background hover:text-primary transition-colors text-left"
                >
                  04. PILOT LOGS
                </Link>
              </nav>
            </div>

            <div className="border-t border-outline-variant pt-stack-md">
              <p className="font-label-sm text-outline-variant uppercase">HWY MAGICIAN EST. 2024</p>
              <p className="font-body-md text-on-surface-variant mt-2 text-sm">
                Custom built rebellion.
              </p>
            </div>
          </div>
          {/* Click outside to close */}
          <div className="flex-grow h-full" onClick={() => setIsMenuOpen(false)}></div>
        </div>
      )}
    </>
  );
}
