'use client';

import React from 'react';

export default function Profile() {
  return (
    <main className="py-6 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto relative z-10">
      {/* Background grain overlay */}
      <div className="fixed inset-0 grain pointer-events-none"></div>

      <div className="flex flex-col md:grid md:grid-cols-12 gap-gutter relative z-20">
        {/* Profile Info Column */}
        <section className="md:col-span-6 flex flex-col gap-stack-lg">
          <div className="border-b-2 border-outline-variant pb-stack-sm">
            <h2 className="font-display-md text-display-md uppercase">PILOT DOSSIER</h2>
            <span className="font-label-sm text-label-sm text-secondary uppercase">
              REGISTERED GARAGE MEMBER PROFILE
            </span>
          </div>

          {/* Member Card */}
          <div className="bg-surface-container-low border-2 border-outline-variant p-6 rounded-lg sticker-shadow relative overflow-hidden grain-texture">
            <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 font-label-lg text-xs rounded-sm border border-on-secondary select-none uppercase font-bold">
              ELITE DRIFTER
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-label-sm text-[10px] text-outline-variant uppercase">MEMBER NAME</p>
                <h3 className="font-display-md text-display-md text-on-background uppercase">
                  RACER SPEEDY
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-label-sm text-[10px] text-outline-variant uppercase">CONVOY WALLET</p>
                  <p className="font-headline-lg text-headline-lg text-primary">
                    450 HP POINTS
                  </p>
                </div>
                <div>
                  <p className="font-label-sm text-[10px] text-outline-variant uppercase">GARAGE ENTRY</p>
                  <p className="font-headline-lg text-headline-lg text-on-background">
                    {"SINCE '24"}
                  </p>
                </div>
              </div>

              <div className="border-t border-outline-variant/30 pt-4">
                <p className="font-label-sm text-[10px] text-outline-variant uppercase">REGISTERED MACHINE</p>
                <p className="font-body-md text-secondary font-bold uppercase mt-1">
                  2002 DISTRESSED SILVIA S15 / GARAGE SPEC
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Orders Column */}
        <section className="md:col-span-6 flex flex-col gap-stack-lg">
          <div className="border-b-2 border-outline-variant pb-stack-sm">
            <h2 className="font-display-md text-display-md uppercase">PROTOCOL LOGS</h2>
            <span className="font-label-sm text-label-sm text-secondary uppercase">
              PAST DEPARTURE HISTORY
            </span>
          </div>

          <div className="space-y-4">
            {/* Mock Order 1 */}
            <div className="bg-surface-container border-2 border-outline-variant p-4 rounded-lg flex justify-between items-center hover:border-primary transition-colors">
              <div>
                <h4 className="font-label-lg uppercase font-bold text-on-background">LOG ID: HWY-827163</h4>
                <p className="font-body-md text-xs text-on-surface-variant uppercase mt-1">
                  1 ITEM • DELIVERED ON JULY 01, 2026
                </p>
              </div>
              <div className="text-right">
                <p className="font-headline-lg text-headline-lg text-primary">Rp 675.000</p>
                <span className="inline-block bg-surface-container-high border border-outline text-on-surface-variant font-label-sm text-[9px] px-2 py-0.5 uppercase mt-1 rounded-sm select-none">
                  COMPLETED
                </span>
              </div>
            </div>

            {/* Mock Order 2 */}
            <div className="bg-surface-container border-2 border-outline-variant p-4 rounded-lg flex justify-between items-center hover:border-primary transition-colors">
              <div>
                <h4 className="font-label-lg uppercase font-bold text-on-background">LOG ID: HWY-736291</h4>
                <p className="font-body-md text-xs text-on-surface-variant uppercase mt-1">
                  2 ITEMS • DELIVERED ON JUNE 15, 2026
                </p>
              </div>
              <div className="text-right">
                <p className="font-headline-lg text-headline-lg text-primary">Rp 2.175.000</p>
                <span className="inline-block bg-surface-container-high border border-outline text-on-surface-variant font-label-sm text-[9px] px-2 py-0.5 uppercase mt-1 rounded-sm select-none">
                  COMPLETED
                </span>
              </div>
            </div>

            {/* Ethos notice */}
            <div className="border-2 border-dashed border-outline-variant p-6 rounded-lg text-center opacity-70">
              <span className="material-symbols-outlined text-outline-variant text-4xl mb-2">
                verified
              </span>
              <p className="font-label-sm text-[11px] text-outline uppercase tracking-widest leading-relaxed">
                EVERY DRIFT LOG REPRESENTS COMPLETED INVENTORY HANDLED LOCALLY BY OUR CONVOY.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
