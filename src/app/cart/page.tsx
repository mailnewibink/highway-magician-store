'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  // Promo Code States
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Apply mock discount code
  const handleApplyPromo = () => {
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    
    if (code === 'SPEEDSHOP' || code === 'GARAGE') {
      setAppliedPromo(code);
      setDiscountPercent(10); // 10% discount
      setPromoCode('');
    } else if (code === '') {
      setPromoError('ENTER A CODE');
    } else {
      setPromoError('INVALID PROTOCOL CODE');
    }
  };

  // Calculations taking discount into account
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const discountedSubtotal = subtotal - discountAmount;
  const calculatedTax = Math.round(discountedSubtotal * 0.08);
  const grandTotal = discountedSubtotal + calculatedTax;

  if (cartItems.length === 0) {
    return (
      <main className="py-20 px-margin-mobile text-center max-w-lg mx-auto">
        <span className="material-symbols-outlined text-outline-variant text-6xl mb-4 select-none">
          construction
        </span>
        <h2 className="font-display-md text-display-md text-on-background uppercase">
          YOUR GARAGE IS EMPTY
        </h2>
        <p className="font-body-md text-on-surface-variant mt-2 uppercase">
          No premium gear loaded in the rig yet.
        </p>
        <Link href="/shop">
          <button className="mt-8 bg-primary text-on-primary font-headline-lg-mobile px-6 py-3 border-2 border-on-primary active:scale-95 transition-all sticker-shadow uppercase rounded cursor-pointer">
            LOAD INVENTORY
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="py-6 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto relative z-10">
      {/* Background grain overlay */}
      <div className="fixed inset-0 grain pointer-events-none"></div>

      <div className="flex flex-col md:grid md:grid-cols-12 gap-gutter relative z-20">
        {/* Cart Item Column */}
        <section className="md:col-span-8 flex flex-col gap-stack-lg">
          <div className="flex items-center justify-between border-b-2 border-outline-variant pb-stack-sm">
            <h2 className="font-display-md text-display-md uppercase">YOUR GARAGE</h2>
            <span className="font-label-lg text-label-lg text-primary">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)} ITEMS LOADED
            </span>
          </div>

          {/* Cart items list */}
          <div className="space-y-stack-md">
            {cartItems.map((item) => {
              const productTotal = item.product.price * item.quantity;
              
              return (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="bg-surface-container-low border-2 border-outline-variant p-4 flex gap-4 md:gap-6 relative overflow-hidden group sticker-shadow rounded-lg"
                >
                  {/* Grayscale hover thumbnail */}
                  <Link href={`/product/${item.product.id}`} className="block shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-surface-container-highest border-2 border-outline overflow-hidden rounded cursor-pointer">
                      <img
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        alt={item.product.name}
                        src={item.product.image}
                      />
                    </div>
                  </Link>

                  {/* Info details */}
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link href={`/product/${item.product.id}`} className="cursor-pointer">
                          <h3 className="font-headline-lg-mobile text-headline-lg-mobile uppercase leading-tight hover:text-primary transition-colors">
                            {item.product.name}
                          </h3>
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="text-on-surface-variant hover:text-error transition-colors p-1"
                        >
                          <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>
                      </div>
                      <p className="font-label-sm text-label-sm text-secondary uppercase mt-1">
                        SIZE: {item.size} / CATEGORY: {item.product.category}
                      </p>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                      {/* Quantity Selector */}
                      <div className="flex items-center border-2 border-outline-variant bg-background rounded overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-primary hover:text-on-primary transition-colors border-r-2 border-outline-variant active:scale-90"
                        >
                          <span className="material-symbols-outlined text-[18px]">remove</span>
                        </button>
                        <span className="px-4 font-bold font-body-md text-on-surface select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-primary hover:text-on-primary transition-colors border-l-2 border-outline-variant active:scale-90"
                        >
                          <span className="material-symbols-outlined text-[18px]">add</span>
                        </button>
                      </div>
                      <p className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background whitespace-nowrap">
                        Rp {productTotal.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Order Summary Column */}
        <aside className="md:col-span-4">
          <div className="bg-surface-container border-2 border-outline-variant p-6 flex flex-col gap-6 sticker-shadow sticky top-28 rounded-lg">
            <h2 className="font-headline-lg text-headline-lg uppercase border-b-2 border-outline-variant pb-2">
              SPEC SHEET
            </h2>
            
            {/* Price spec sheet */}
            <div className="flex flex-col gap-4 font-body-md">
              <div className="flex justify-between gap-4">
                <span className="text-on-surface-variant uppercase text-sm">SUBTOTAL</span>
                <span className="font-bold whitespace-nowrap">Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>

              {appliedPromo && (
                <div className="flex justify-between gap-4 text-secondary">
                  <span className="uppercase text-sm">DISCOUNT ({appliedPromo} -10%)</span>
                  <span className="font-bold whitespace-nowrap">-Rp {discountAmount.toLocaleString('id-ID')}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-on-surface-variant uppercase text-sm">SHIPPING (STD)</span>
                <span className="font-bold text-secondary">GRATIS</span>
              </div>
              
              <div className="flex justify-between gap-4">
                <span className="text-on-surface-variant uppercase text-sm">EST. TAX (8%)</span>
                <span className="font-bold whitespace-nowrap">Rp {calculatedTax.toLocaleString('id-ID')}</span>
              </div>

              <div className="border-t-2 border-outline-variant pt-4 flex justify-between items-baseline mt-2 gap-4">
                <span className="font-headline-lg text-headline-lg uppercase">TOTAL</span>
                <span className="font-display-md text-display-md text-primary whitespace-nowrap">
                  Rp {grandTotal.toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            {/* Promo Code Input */}
            <div className="flex flex-col gap-2 mt-2">
              <label className="font-label-sm text-label-sm uppercase text-secondary">
                DISCOUNT CODE
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder={appliedPromo ? "CODE ACTIVE" : "ENTER CODE"}
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={!!appliedPromo}
                  className="bg-background border-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-background px-4 py-3 uppercase font-label-lg w-full rounded-l outline-none placeholder:text-outline-variant"
                />
                <button
                  onClick={handleApplyPromo}
                  disabled={!!appliedPromo}
                  className="bg-surface-container-highest px-4 border-2 border-l-0 border-outline-variant font-label-lg uppercase hover:bg-primary hover:text-on-primary transition-colors rounded-r cursor-pointer disabled:opacity-50"
                >
                  APPLY
                </button>
              </div>
              {promoError && (
                <p className="text-error font-label-sm text-[11px] uppercase mt-1">{promoError}</p>
              )}
              {appliedPromo && (
                <p className="text-secondary font-label-sm text-[11px] uppercase mt-1">
                  10% OFF APPLIED SUCCESSFULLY
                </p>
              )}
            </div>

            {/* Checkout Route Button */}
            <Link href={{ pathname: '/checkout', query: appliedPromo ? { discount: discountPercent, code: appliedPromo } : {} }}>
              <button className="group relative w-full bg-primary-container text-on-primary-container p-6 border-2 border-black active-press transition-all sticker-shadow mt-4 rounded cursor-pointer">
                <span className="font-display-md text-headline-lg-mobile md:text-display-md uppercase flex items-center justify-center gap-4 flex-wrap text-center">
                  ROUTE TO CHECKOUT
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </button>
            </Link>

            <div className="flex items-center justify-center gap-4 mt-2">
              <span className="material-symbols-outlined text-on-surface-variant">verified_user</span>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">
                SECURE GARAGE PAYMENTS
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
