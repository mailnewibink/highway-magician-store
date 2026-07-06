'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { products } from '../data/products';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Take a few trending items for the scroller
  const trendingProducts = [
    products.find((p) => p.id === 'skull-wing-tee') || products[6],
    products.find((p) => p.id === 'magician-trucker-v1') || products[0],
    products.find((p) => p.id === 'service-station-zip-up') || products[4],
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <main className="py-6 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative mb-stack-xl">
        <Link href="/shop" className="block group">
          <div className="relative overflow-hidden border-2 border-on-background sticker-effect bg-surface-container-low rounded-lg aspect-[4/5] sm:aspect-[16/9] flex flex-col items-center justify-center p-stack-lg cursor-pointer">
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-35 transition-opacity duration-300">
              <div className="w-full h-full bg-gradient-to-tr from-primary/40 to-transparent"></div>
            </div>
            {/* Atmospheric Background text */}
            <div className="absolute top-8 left-8 opacity-10 pointer-events-none select-none hidden sm:block">
              <span className="font-display-lg text-display-lg text-outline">RAW POWER</span>
            </div>
            
            <img
              alt="Highway Magician Logo"
              className="w-full max-w-[280px] sm:max-w-[340px] z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDdJSoBZlbFljHb9vDxalwf_U3hS1Vjuq2dVC2Xcxwy95QfmPxp6gYoNF3qjyNGxV-1ZvfdezCLG1OT0EGd4DHP-ZoOWmAML4GaoxP0fgQEU6g993O6kS2PtD_UAXkSzjRP8fdzARuBG4NQzB8H_hEu845F_xDOyDMppx-3CclG9W20ufWCNitqcr8NDpOlpO4D_77t8eYIJIwG9Yt3WJh0t80D-9e9cz_Dwktkji9RTsepkcGaDb1RwDfidJIAiTIcXu_fYaPqCs"
            />
            
            <div className="mt-stack-lg text-center z-10">
              <span className="inline-block bg-primary text-on-primary font-label-lg px-stack-sm py-1 mb-stack-sm rounded-sm">
                EST. 2024
              </span>
              <h2 className="font-display-md text-display-md leading-tight tracking-tighter uppercase italic group-hover:text-primary transition-colors">
                CUSTOM BUILT<br className="sm:hidden" /> REBELLION
              </h2>
              <span className="inline-flex items-center gap-2 mt-4 font-label-lg text-secondary group-hover:underline">
                ENTER THE SHOP <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* New Drop Announcement Marquee */}
      <div className="bg-secondary text-on-secondary py-stack-sm border-y-2 border-on-background mb-stack-xl rotate-[-1deg] scale-105 relative z-10">
        <div className="marquee">
          <div className="marquee-content font-label-lg uppercase tracking-widest flex gap-12 py-2">
            <span>NEW DROP: NITRO-BURST COLLECTION NOW LIVE • </span>
            <span>NEW DROP: NITRO-BURST COLLECTION NOW LIVE • </span>
            <span>NEW DROP: NITRO-BURST COLLECTION NOW LIVE • </span>
            <span>NEW DROP: NITRO-BURST COLLECTION NOW LIVE • </span>
          </div>
        </div>
      </div>

      {/* Featured Collections (Bento Style) */}
      <section className="mb-stack-xl">
        <div className="flex justify-between items-end mb-stack-md border-b-2 border-outline-variant pb-2">
          <h3 className="font-headline-lg-mobile text-headline-lg-mobile uppercase underline decoration-primary decoration-4 underline-offset-4">
            FEATURED CATEGORIES
          </h3>
          <Link href="/shop" className="font-label-sm text-primary uppercase hover:underline cursor-pointer">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-stack-sm">
          {/* Large Tile */}
          <Link href="/shop?category=Graphic%20Tees" className="col-span-2 relative h-64 border-2 border-on-background sticker-effect overflow-hidden rounded-lg group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgZngrJbbOAa048ksCZtJyVRA9xrUHiaZzD3uwuRoMEMrK1U2k5eFG8XwEoR1UChv7p64EK58fn3PZU20d1-c3P49TiPN9fhMkXLdMxBv1x6CRO58LWBYtitt1tWHEs5PYCB0TX5NTa0nXEVZA0-FkktgRRkIZBEIuJ809TQIM1AzngdvuQXT9xBKkkCSNzfByvJjBaQCPdnyhOfVnqzdbcMBn58rBLAUonlzTrg4A-aYLHIpXh8faLxaZVTuMJFwU2F5YJmCn_pA')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-85"></div>
            </div>
            <div className="absolute bottom-4 left-4 z-10">
              <h4 className="font-headline-lg text-headline-lg uppercase text-on-background group-hover:text-primary transition-colors">
                GRAPHIC TEES
              </h4>
              <p className="font-label-sm text-primary-fixed-dim uppercase">Hand-drawn Mechanics</p>
            </div>
          </Link>

          {/* Small Tile 1 */}
          <Link href="/shop?category=Trucker%20Hats" className="col-span-1 relative h-48 border-2 border-on-background sticker-effect overflow-hidden rounded-lg group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxqPw41_zHm9vaUj6L7l2QAALUVdeLS6I_SnBb2mMQ2xSIJbcFCpm8CVvMZXtqNlFs7JF9ookD6y8XxhrpgvrwJbQC4G-byHLCpXhE2CYC3olLL6eTVqImOl89CHMrUYrXQbdmIDbpiLCAAg05oaNId6Zka-6dD8TIb_YjcA89MDwhfYS-6layuqeYZ3t75jUIYNN5FCs8gxoOO2VdH-r_uqVShBoU1Y4bSbUF8uR21xe6bmjZIXSoRJOQyJrq8JJsCo4kCDnOIOI')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-75"></div>
            </div>
            <div className="absolute bottom-3 left-3 z-10">
              <h4 className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-background group-hover:text-primary transition-colors">
                HATS
              </h4>
            </div>
          </Link>

          {/* Small Tile 2 */}
          <Link href="/shop?category=Vintage%20Hoodies" className="col-span-1 relative h-48 border-2 border-on-background sticker-effect overflow-hidden rounded-lg group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3REe4ittWnUEFZ5NboLLEenuETtXTb4MjP9IBIBaWAvqL6RtaI_01r4A2Y-LMt7w_Jzmr7i3MPhFkRFSqbO8sWM1lTxzddoDlpPWCmek50ZTvJla0WJ1Pr3JIw3gGzh7PzHGntgbEFpBlDzOrQN9YQfHfAAJYY8gawkvhemnEZaWBKBGAXaCfiZ1USciKBigdpWokh-ZRPfYUdkbGkKsJDm6OyjF5-tOTLC9-eIrdiQi63y6pYdJFxjFKWvAx_n-rp8LIR2NBzGg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-75"></div>
            </div>
            <div className="absolute bottom-3 left-3 z-10">
              <h4 className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-background group-hover:text-primary transition-colors">
                OUTERWEAR
              </h4>
            </div>
          </Link>
        </div>
      </section>

      {/* Trending Now Scroller */}
      <section className="mb-stack-xl">
        <div className="flex justify-between items-center mb-stack-md border-b-2 border-outline-variant pb-2">
          <h3 className="font-headline-lg-mobile text-headline-lg-mobile uppercase">TRENDING NOW</h3>
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="w-2 h-2 bg-outline-variant rounded-full"></span>
          </div>
        </div>
        <div className="flex overflow-x-auto scroller-hide gap-stack-md pb-stack-md">
          {trendingProducts.map((product) => {
            if (!product) return null;
            return (
              <Link href={`/product/${product.id}`} key={product.id} className="min-w-[200px] w-64 flex-shrink-0 group block cursor-pointer">
                <div className="relative w-full aspect-square border-2 border-on-background overflow-hidden sticker-effect mb-stack-sm rounded-lg">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    alt={product.name}
                    src={product.image}
                  />
                  {product.status && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-secondary text-on-secondary font-label-sm px-2 py-1 uppercase rounded-sm">
                        {product.status}
                      </span>
                    </div>
                  )}
                </div>
                <h5 className="font-label-lg text-on-background uppercase truncate group-hover:text-primary transition-colors">
                  {product.name}
                </h5>
                <p className="font-body-md text-primary">Rp {product.price.toLocaleString('id-ID')}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Newsletter CTA / Zine Style */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-xl">
        <div className="border-2 border-on-background p-stack-lg rounded-lg bg-surface-container relative overflow-hidden flex flex-col justify-between min-h-[250px]">
          <div className="absolute top-0 right-0 opacity-10">
            <span className="material-symbols-outlined text-[120px] rotate-12 select-none">
              settings_input_component
            </span>
          </div>
          <div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile uppercase mb-stack-sm text-primary">
              THE GARAGE ETHOS
            </h3>
            <p className="font-body-md text-on-background leading-relaxed">
              {"Born in the grease and grit of a 2024 backyard workshop, HWY MAGICIAN isn't just apparel—it's a tribute to the grease monkeys, the midnight drifters, and the custom-built rebels who find magic in the machine."}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="h-[2px] flex-grow bg-outline-variant"></div>
            <span className="font-label-lg text-primary italic">{"SINCE '24"}</span>
            <div className="h-[2px] flex-grow bg-outline-variant"></div>
          </div>
        </div>

        <div className="bg-on-primary-fixed text-primary-fixed border-2 border-primary sticker-effect p-stack-lg rounded-lg grain-texture overflow-hidden flex flex-col justify-center min-h-[250px]">
          <div className="relative z-10">
            <h3 className="font-display-md text-display-md leading-none mb-stack-sm italic">
              JOIN THE<br />CONVOY
            </h3>
            <p className="font-body-md text-on-surface-variant mb-stack-md">
              Drop your email to get early access to limited garage-built releases and exclusive zines.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                className="bg-background border-2 border-primary text-primary font-body-md px-stack-md py-stack-sm rounded-lg focus:ring-0 focus:border-secondary outline-none placeholder:text-outline-variant uppercase"
                placeholder="EMAIL@GARAGE.COM"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
              />
              <button
                type="submit"
                className={`bg-primary text-on-primary font-headline-lg-mobile py-stack-sm border-2 border-on-primary-fixed active:scale-95 transition-transform uppercase tracking-widest ${
                  subscribed ? 'bg-secondary text-on-secondary border-secondary-fixed' : ''
                }`}
                disabled={subscribed}
              >
                {subscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
