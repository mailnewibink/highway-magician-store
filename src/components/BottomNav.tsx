'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const isHomeActive = pathname === '/';
  const isShopActive = pathname === '/shop' || pathname.startsWith('/product');
  const isProfileActive = pathname === '/profile';

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 border-t-2 border-outline-variant bg-surface-container-low flex justify-around items-center h-20 px-margin-mobile pb-safe">
      <Link href="/">
        <div
          className={`flex flex-col items-center justify-center transition-all cursor-pointer ${
            isHomeActive
              ? 'bg-primary text-on-primary rounded-full px-4 py-1'
              : 'text-on-surface-variant hover:text-secondary'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isHomeActive ? "'FILL' 1" : "'FILL' 0" }}>
            home
          </span>
          <span className="font-label-sm uppercase text-[10px]">HOME</span>
        </div>
      </Link>

      <Link href="/shop">
        <div
          className={`flex flex-col items-center justify-center transition-all cursor-pointer ${
            isShopActive
              ? 'bg-primary text-on-primary rounded-full px-4 py-1'
              : 'text-on-surface-variant hover:text-secondary'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isShopActive ? "'FILL' 1" : "'FILL' 0" }}>
            storefront
          </span>
          <span className="font-label-sm uppercase text-[10px]">SHOP</span>
        </div>
      </Link>

      <Link href="/shop?focus=search">
        <div
          className={`flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary transition-all cursor-pointer`}
        >
          <span className="material-symbols-outlined">search</span>
          <span className="font-label-sm uppercase text-[10px]">SEARCH</span>
        </div>
      </Link>

      <Link href="/profile">
        <div
          className={`flex flex-col items-center justify-center transition-all cursor-pointer ${
            isProfileActive
              ? 'bg-primary text-on-primary rounded-full px-4 py-1'
              : 'text-on-surface-variant hover:text-secondary'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isProfileActive ? "'FILL' 1" : "'FILL' 0" }}>
            person
          </span>
          <span className="font-label-sm uppercase text-[10px]">PROFILE</span>
        </div>
      </Link>
    </nav>
  );
}
