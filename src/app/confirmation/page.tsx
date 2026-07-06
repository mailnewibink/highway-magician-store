'use client';

import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ConfirmationDetails() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'HWY-000000';
  const name = searchParams.get('name') || 'NOMAD';
  const total = searchParams.get('total') ? parseInt(searchParams.get('total') as string, 10) : 0;

  // Payment states
  const [selectedMethod, setSelectedMethod] = useState<'qris' | 'gopay' | 'bca' | null>(null);
  const [goPayPhone, setGoPayPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleFinishPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMethod) return;
    
    if (selectedMethod === 'gopay' && !goPayPhone) {
      return;
    }

    setIsProcessing(true);

    // Simulate payment protocol handshake delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 1200);
  };

  // Rendering final receipt page if payment is complete
  if (isPaid) {
    return (
      <div className="bg-surface-container-low border-2 border-outline-variant p-8 rounded-lg sticker-shadow relative z-20 space-y-6 max-w-lg mx-auto">
        {/* Completed status checkmark icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary text-on-secondary border-2 border-on-secondary rounded-full shadow-[3px_3px_0px_0px_rgba(255,181,158,1)] animate-pulse mb-2">
          <span className="material-symbols-outlined text-[40px] font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified
          </span>
        </div>

        <div>
          <h2 className="font-display-md text-display-md text-primary leading-none uppercase italic">
            PAYMENT COMPLETE
          </h2>
          <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mt-2">
            RIG STATUS: IN THE QUEUE
          </p>
        </div>

        <div className="border-y border-outline-variant/30 py-6 space-y-4 text-left font-body-md text-sm">
          <div className="flex justify-between">
            <span className="text-on-surface-variant uppercase">ORDER NUMBER</span>
            <span className="font-bold text-on-background font-mono">{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant uppercase">PILOT NAME</span>
            <span className="font-bold text-on-background uppercase">{name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant uppercase">PAYMENT OPTION</span>
            <span className="font-bold text-secondary uppercase">
              {selectedMethod === 'qris' && 'QRIS QUICK SCAN'}
              {selectedMethod === 'gopay' && 'GOPAY WIRELESS'}
              {selectedMethod === 'bca' && 'BCA WIRE TRANSFER'}
            </span>
          </div>
        </div>

        <p className="text-on-surface-variant text-xs uppercase leading-relaxed tracking-wider">
          Transaction secured and completed! Our mechanic crews are now assembling your custom gear in the garage. Speed tracking digits will be dispatched to your inbox shortly.
        </p>

        <Link href="/">
          <button className="w-full bg-primary text-on-primary font-headline-lg-mobile py-4 border-2 border-on-primary active:scale-95 transition-all sticker-shadow uppercase rounded mt-4 cursor-pointer">
            DISMISS PROTOCOL
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low border-2 border-outline-variant p-8 rounded-lg sticker-shadow relative z-20 space-y-6 max-w-lg mx-auto">
      {/* Confirmation header */}
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-on-primary border-2 border-on-primary rounded-full shadow-[3px_3px_0px_0px_black] animate-bounce mb-2">
        <span className="material-symbols-outlined text-[32px] font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
          shopping_basket
        </span>
      </div>

      <div>
        <h2 className="font-display-md text-display-md text-primary leading-none uppercase italic">
          ORDER CONFIrMED
        </h2>
        <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mt-2">
          TRANSMISSION DISPATCH SUCCESSFUL
        </p>
      </div>

      {/* Invoice specifications summary */}
      <div className="border-y border-outline-variant/30 py-6 space-y-4 text-left font-body-md text-sm">
        <div className="flex justify-between">
          <span className="text-on-surface-variant uppercase">ORDER REFERENCE</span>
          <span className="font-bold text-on-background font-mono">{orderId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-on-surface-variant uppercase">PILOT SIGNATURE</span>
          <span className="font-bold text-on-background uppercase">{name}</span>
        </div>
        {total > 0 && (
          <div className="flex justify-between">
            <span className="text-on-surface-variant uppercase">TOTAL VALUE</span>
            <span className="font-bold text-primary whitespace-nowrap">Rp {total.toLocaleString('id-ID')}</span>
          </div>
        )}
      </div>

      {/* Payment Selection Form */}
      <form onSubmit={handleFinishPayment} className="space-y-6 text-left">
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-outline mb-3 text-center">
            SELECT PAYMENT METHOD
          </h3>
          
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setSelectedMethod('qris')}
              className={`sticker-border p-3 font-label-lg text-xs transition-colors rounded uppercase active:translate-y-0.5 cursor-pointer ${
                selectedMethod === 'qris'
                  ? 'bg-secondary text-on-secondary border-secondary shadow-none font-bold'
                  : 'bg-surface-container text-on-surface hover:border-primary'
              }`}
            >
              QRIS
            </button>
            <button
              type="button"
              onClick={() => setSelectedMethod('gopay')}
              className={`sticker-border p-3 font-label-lg text-xs transition-colors rounded uppercase active:translate-y-0.5 cursor-pointer ${
                selectedMethod === 'gopay'
                  ? 'bg-secondary text-on-secondary border-secondary shadow-none font-bold'
                  : 'bg-surface-container text-on-surface hover:border-primary'
              }`}
            >
              GOPAY
            </button>
            <button
              type="button"
              onClick={() => setSelectedMethod('bca')}
              className={`sticker-border p-3 font-label-lg text-xs transition-colors rounded uppercase active:translate-y-0.5 cursor-pointer ${
                selectedMethod === 'bca'
                  ? 'bg-secondary text-on-secondary border-secondary shadow-none font-bold'
                  : 'bg-surface-container text-on-surface hover:border-primary'
              }`}
            >
              BCA TRANSFER
            </button>
          </div>
        </div>

        {/* Payment Instructions Display Area */}
        {selectedMethod && (
          <div className="bg-surface-container p-4 border-2 border-outline-variant rounded-lg space-y-4">
            
            {/* QRIS Instructions */}
            {selectedMethod === 'qris' && (
              <div className="space-y-3 text-center">
                <p className="font-label-sm text-xs text-secondary uppercase tracking-widest">
                  QRIS SECURE GATEWAY
                </p>
                {/* Mock QR Code graphic using generated image */}
                <div className="p-3 bg-white w-40 h-40 border-2 border-outline mx-auto flex items-center justify-center rounded select-none">
                  <img
                    className="w-32 h-32 object-contain"
                    alt="QRIS Code"
                    src="/qris-mockup.png"
                  />
                </div>
                <p className="font-body-md text-[11px] text-on-surface-variant uppercase">
                  Scan QR with GoPay, OVO, ShopeePay, or your banking app.
                </p>
              </div>
            )}

            {/* GoPay Instructions */}
            {selectedMethod === 'gopay' && (
              <div className="space-y-3">
                <p className="font-label-sm text-xs text-secondary uppercase tracking-widest text-center">
                  GOPAY WIRELESS CHARGE
                </p>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-[10px] text-outline-variant uppercase">
                    GOPAY PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08XXXXXXXXXX"
                    value={goPayPhone}
                    onChange={(e) => setGoPayPhone(e.target.value)}
                    className="bg-background border-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-background px-4 py-3 uppercase font-body-md rounded outline-none"
                  />
                </div>
                <p className="font-body-md text-[11px] text-on-surface-variant uppercase text-center">
                  A push request will be sent to your Gojek mobile app.
                </p>
              </div>
            )}

            {/* BCA Transfer Instructions */}
            {selectedMethod === 'bca' && (
              <div className="space-y-3">
                <p className="font-label-sm text-xs text-secondary uppercase tracking-widest text-center">
                  BCA BANK TRANSFER
                </p>
                <div className="bg-background p-3 border border-outline-variant rounded space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant uppercase font-semibold">BANK</span>
                    <span className="font-bold">BANK CENTRAL ASIA (BCA)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant uppercase font-semibold">ACCOUNt NO.</span>
                    <span className="font-bold font-mono text-secondary text-sm">004-927163-8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant uppercase font-semibold">ACCOUNt NAME</span>
                    <span className="font-bold uppercase">HWY MAGICIAN CONVOY</span>
                  </div>
                </div>
                <p className="font-body-md text-[11px] text-on-surface-variant uppercase text-center">
                  Please transfer the exact total value to avoid authorization latency.
                </p>
              </div>
            )}

            {/* Action finish button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-primary text-on-primary font-headline-lg-mobile py-4 border-2 border-on-primary active:scale-95 transition-all shadow-[2px_2px_0px_0px_black] uppercase rounded cursor-pointer disabled:opacity-50"
            >
              {isProcessing ? 'AUTHORIZING PAY...' : 'FINISH PAYMENT'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default function Confirmation() {
  return (
    <main className="py-12 px-margin-mobile text-center max-w-lg mx-auto relative z-10">
      {/* Background grain overlay */}
      <div className="fixed inset-0 grain pointer-events-none"></div>
      
      <Suspense fallback={
        <div className="text-center py-20 uppercase font-headline-lg text-primary select-none">
          LOADING DEPARTURE PROTOCOL...
        </div>
      }>
        <ConfirmationDetails />
      </Suspense>
    </main>
  );
}
