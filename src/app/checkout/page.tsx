'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCart } from '../../context/CartContext';

function CheckoutForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Extract discount from url query
  const discountParam = searchParams.get('discount');
  const codeParam = searchParams.get('code');
  const discountPercent = discountParam ? parseInt(discountParam, 10) : 0;

  const { cartItems, subtotal, clearCart } = useCart();

  // Form States
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Recalculations
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const discountedSubtotal = subtotal - discountAmount;
  const calculatedTax = Math.round(discountedSubtotal * 0.08);
  const grandTotal = discountedSubtotal + calculatedTax;

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setIsSubmitting(true);

    const orderRef = `HWY-${Math.floor(100000 + Math.random() * 900000)}`;
    const itemsDescription = cartItems
      .map((item) => `${item.product.name} (Qty: ${item.quantity}, Size: ${item.size}, Price: Rp ${item.product.price})`)
      .join(', ');

    // Build Formspree payload data
    const payload = {
      orderId: orderRef,
      name,
      email,
      phone,
      address,
      city,
      zip,
      items: itemsDescription,
      subtotal: `Rp ${subtotal.toLocaleString('id-ID')}`,
      discount: discountPercent ? `${discountPercent}% (${searchParams.get('code') || ''})` : 'None',
      tax: `Rp ${calculatedTax.toLocaleString('id-ID')}`,
      total: `Rp ${grandTotal.toLocaleString('id-ID')}`
    };

    try {
      // Connect to Formspree endpoint (active user form ID)
      await fetch('https://formspree.io/f/mqevnonk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Formspree dispatch failed, bypassing to confirmation:', err);
    }

    clearCart();
    router.push(`/confirmation?orderId=${orderRef}&name=${encodeURIComponent(name)}&total=${grandTotal}`);
  };

  if (cartItems.length === 0) {
    return (
      <main className="py-20 px-margin-mobile text-center max-w-lg mx-auto">
        <span className="material-symbols-outlined text-outline-variant text-6xl mb-4 select-none">
          construction
        </span>
        <h2 className="font-display-md text-display-md text-on-background uppercase">
          CHECKOUT SHUTDOWN
        </h2>
        <p className="font-body-md text-on-surface-variant mt-2 uppercase">
          No items in cart to checkout.
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
        {/* Checkout Form Column */}
        <section className="md:col-span-7">
          <div className="border-b-2 border-outline-variant pb-stack-sm mb-stack-lg">
            <h2 className="font-display-md text-display-md uppercase">GARAGE CHECKOUT</h2>
            <p className="font-label-sm text-label-sm text-secondary uppercase">
              COMPLETE SPECIFICATIONS FOR DELIVERY
            </p>
          </div>

          <form onSubmit={handleOrderSubmit} className="space-y-8">
            {/* Section 1: Contact */}
            <div className="bg-surface-container-low border-2 border-outline-variant p-6 rounded-lg sticker-shadow-sm space-y-4">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary uppercase border-b border-outline-variant/30 pb-2">
                01. CONTACT PROTOCOL
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="NAME@DOMAIN.COM"
                    className="bg-background border-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-background px-4 py-3 uppercase font-body-md rounded outline-none placeholder:text-outline-variant/50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="081XXXXXXXX"
                    className="bg-background border-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-background px-4 py-3 uppercase font-body-md rounded outline-none placeholder:text-outline-variant/50"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Shipping */}
            <div className="bg-surface-container-low border-2 border-outline-variant p-6 rounded-lg sticker-shadow-sm space-y-4">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary uppercase border-b border-outline-variant/30 pb-2">
                02. SHIPPING SPECIFICATIONS
              </h3>

              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="RACER SPEEDY"
                    className="bg-background border-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-background px-4 py-3 uppercase font-body-md rounded outline-none placeholder:text-outline-variant/50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    STREET ADDRESS
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="GARAGE WORKSHOP LANE 4B"
                    className="bg-background border-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-background px-4 py-3 uppercase font-body-md rounded outline-none placeholder:text-outline-variant/50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                      CITY
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="JAKARTA"
                      className="bg-background border-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-background px-4 py-3 uppercase font-body-md rounded outline-none placeholder:text-outline-variant/50"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                      POSTAL CODE
                    </label>
                    <input
                      type="text"
                      required
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      placeholder="12345"
                      className="bg-background border-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-background px-4 py-3 uppercase font-body-md rounded outline-none placeholder:text-outline-variant/50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submission CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-container text-on-primary-container p-6 border-2 border-black active-press transition-all sticker-shadow uppercase rounded cursor-pointer disabled:opacity-50"
            >
              <span className="font-display-md text-headline-lg-mobile md:text-display-md flex items-center justify-center gap-4 flex-wrap text-center">
                {isSubmitting ? 'TRANSMITTING ORDER...' : 'LAUNCH ORDER PROTOCOL'}
                {!isSubmitting && (
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    bolt
                  </span>
                )}
              </span>
            </button>
          </form>
        </section>

        {/* Spec Summary Column */}
        <aside className="md:col-span-5">
          <div className="bg-surface-container border-2 border-outline-variant p-6 flex flex-col gap-6 sticker-shadow sticky top-28 rounded-lg">
            <h2 className="font-headline-lg text-headline-lg uppercase border-b-2 border-outline-variant pb-2">
              RIG DECK SUMMARY
            </h2>

            {/* Product summary items list */}
            <div className="max-h-60 overflow-y-auto custom-scrollbar pr-2 space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover border border-outline-variant rounded"
                    />
                    <div>
                      <h4 className="font-label-lg uppercase truncate max-w-[160px] text-on-surface">
                        {item.product.name}
                      </h4>
                      <p className="font-label-sm text-[10px] text-secondary uppercase">
                        QTY: {item.quantity} / SIZE: {item.size}
                      </p>
                    </div>
                  </div>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background whitespace-nowrap shrink-0">
                    Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                  </span>
                </div>
              ))}
            </div>

            {/* Price specification summary sheet */}
            <div className="border-t border-outline-variant/30 pt-4 flex flex-col gap-3 font-body-md">
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-on-surface-variant uppercase">SUBTOTAL</span>
                <span className="font-bold whitespace-nowrap">Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              
              {codeParam && (
                <div className="flex justify-between gap-4 text-secondary text-sm">
                  <span className="uppercase">DISCOUNT ({codeParam})</span>
                  <span className="font-bold whitespace-nowrap">-Rp {discountAmount.toLocaleString('id-ID')}</span>
                </div>
              )}

              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant uppercase">SHIPPING</span>
                <span className="text-secondary uppercase">GRATIS</span>
              </div>
              
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-on-surface-variant uppercase">TAX (8%)</span>
                <span className="font-bold whitespace-nowrap">Rp {calculatedTax.toLocaleString('id-ID')}</span>
              </div>

              <div className="border-t-2 border-outline-variant pt-4 flex justify-between items-baseline mt-1 gap-4">
                <span className="font-headline-lg text-headline-lg uppercase">TOTAL</span>
                <span className="font-display-md text-display-md text-primary whitespace-nowrap">
                  Rp {grandTotal.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default function Checkout() {
  return (
    <Suspense fallback={
      <div className="text-center py-20 uppercase font-headline-lg text-primary select-none">
        LOADING CHECKOUT...
      </div>
    }>
      <CheckoutForm />
    </Suspense>
  );
}
