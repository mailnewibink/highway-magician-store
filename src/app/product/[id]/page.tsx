'use client';

import React, { useState, use, useMemo } from 'react';
import Link from 'next/link';
import { products } from '../../../data/products';
import { useCart } from '../../../context/CartContext';

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const { addToCart } = useCart();

  // Find current product
  const product = useMemo(() => {
    return products.find((p) => p.id === productId);
  }, [productId]);

  // Gallery state - fall back to product image if no images gallery exists
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Size selector state - default to first size
  const [selectedSize, setSelectedSize] = useState(
    product && product.sizes.length > 0 ? product.sizes[0] : 'OSFA'
  );

  // Cart animation state
  const [buttonState, setButtonState] = useState<'idle' | 'igniting' | 'added'>('idle');

  if (!product) {
    return (
      <main className="py-20 px-margin-mobile text-center max-w-lg mx-auto">
        <span className="material-symbols-outlined text-error text-6xl mb-4">warning</span>
        <h2 className="font-display-md text-display-md text-on-background uppercase">PRODUCT DECOMMISSIONED</h2>
        <p className="font-body-md text-on-surface-variant mt-2 uppercase">
          The requested product ID does not exist in the Highway Magician database.
        </p>
        <Link href="/shop">
          <button className="mt-8 bg-primary text-on-primary font-headline-lg-mobile px-6 py-3 border-2 border-on-primary active:scale-95 transition-all sticker-shadow uppercase rounded cursor-pointer">
            RETURN TO SHOP ALL
          </button>
        </Link>
      </main>
    );
  }

  const galleryImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  // Get recommendations (exclude current product, limit to 4)
  const recommendations = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (buttonState !== 'idle') return;

    setButtonState('igniting');
    
    // Simulate ignition micro-animation from design spec
    setTimeout(() => {
      addToCart(product, selectedSize, 1);
      setButtonState('added');
      
      setTimeout(() => {
        setButtonState('idle');
      }, 2000);
    }, 800);
  };

  return (
    <main className="py-6 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      {/* Back to Shop Nav */}
      <div className="mb-6">
        <Link href="/shop" className="font-label-lg text-label-lg text-primary hover:underline uppercase inline-flex items-center gap-2 cursor-pointer">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Garage Inventory
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Gallery Column */}
        <section className="md:col-span-7 space-y-stack-md">
          {/* Main Image */}
          <div className="relative sticker-border hard-shadow aspect-square overflow-hidden bg-surface-container-low rounded-lg">
            <img
              className="w-full h-full object-contain p-4"
              alt={product.name}
              src={galleryImages[activeImageIndex]}
            />
            <div className="absolute inset-0 grain-texture"></div>
          </div>
          
          {/* Thumbnail Selectors */}
          {galleryImages.length > 1 && (
            <div className="grid grid-cols-4 gap-stack-sm">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`sticker-border cursor-pointer aspect-square bg-surface-container overflow-hidden active:translate-y-1 transition-all rounded ${
                    activeImageIndex === idx ? 'ring-2 ring-primary border-primary shadow-[2px_2px_0px_0px_#ffb59e]' : 'hard-shadow-hover'
                  }`}
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={`${product.name} Thumbnail ${idx + 1}`}
                    src={imgUrl}
                  />
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Details Column */}
        <section className="md:col-span-5 space-y-stack-lg flex flex-col justify-between">
          <div className="space-y-stack-lg">
            <header>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary text-on-primary px-3 py-0.5 font-label-sm text-label-sm uppercase rounded-sm">
                  {product.status || 'GARAGE SPEC'}
                </span>
                <span className="text-secondary font-label-sm text-label-sm uppercase">
                  {product.soldOut ? 'SOLD OUT' : 'IN STOCK'}
                </span>
              </div>
              <h2 className="font-display-md text-display-md text-on-background leading-none mb-4 uppercase">
                {product.name}
              </h2>
              <p className="font-headline-lg text-headline-lg text-primary">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
            </header>

            {/* Size Selector */}
            <div className="space-y-stack-md">
              <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-outline">
                SELECT SIZE
              </h3>
              <div className="flex flex-wrap gap-stack-sm">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`sticker-border px-6 py-3 font-label-lg text-label-lg transition-colors cursor-pointer rounded active:translate-y-1 ${
                        isSelected
                          ? 'bg-primary text-on-primary border-primary shadow-none'
                          : 'bg-surface-container text-on-background hover:bg-primary hover:text-on-primary hard-shadow-hover'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Ignite Add To Cart */}
            <div className="pt-stack-md">
              <button
                onClick={handleAddToCart}
                disabled={product.soldOut || buttonState !== 'idle'}
                className={`w-full font-headline-lg text-headline-lg py-5 hard-shadow rounded uppercase flex items-center justify-center gap-4 transition-all duration-150 cursor-pointer ${
                  product.soldOut
                    ? 'bg-surface-container-highest text-outline-variant cursor-not-allowed opacity-50 shadow-none'
                    : buttonState === 'igniting'
                    ? 'bg-primary-container text-on-primary-container scale-95 translate-x-1 translate-y-1 shadow-none'
                    : buttonState === 'added'
                    ? 'bg-secondary text-on-secondary shadow-none translate-x-1 translate-y-1'
                    : 'bg-primary-container text-on-primary-container hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95'
                }`}
              >
                {product.soldOut ? (
                  'OUT OF STOCK'
                ) : buttonState === 'igniting' ? (
                  'IGNITING...'
                ) : buttonState === 'added' ? (
                  'ADDED TO GARAGE'
                ) : (
                  <>
                    IGNITE YOUR STYLE
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      local_fire_department
                    </span>
                  </>
                )}
              </button>
              <p className="mt-4 text-center font-label-sm text-label-sm text-on-surface-variant flex items-center justify-center gap-2 select-none uppercase">
                <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                SHIPS IN 48 HOURS FROM OUR GARAGE
              </p>
            </div>

            {/* Specifications Details Accordion */}
            <div className="border-t border-outline-variant pt-stack-md space-y-stack-sm">
              <details className="group cursor-pointer border-b border-outline-variant/30 pb-2" open>
                <summary className="flex items-center justify-between font-label-lg text-label-lg py-2 list-none uppercase font-bold text-on-background select-none">
                  THE STORY
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="py-stack-sm font-body-md text-on-surface-variant leading-relaxed text-sm">
                  {product.description}
                </div>
              </details>
              
              <details className="group cursor-pointer border-b border-outline-variant/30 pb-2">
                <summary className="flex items-center justify-between font-label-lg text-label-lg py-2 list-none uppercase font-bold text-on-background select-none">
                  SPECIFICATIONS
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="py-stack-sm font-body-md text-on-surface-variant text-sm">
                  <ul className="space-y-2 list-disc list-inside">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="text-on-surface-variant">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>

      {/* Cross-sell Recommendation Section */}
      <section className="mt-stack-xl">
        <div className="flex items-end justify-between mb-stack-lg border-b-2 border-primary pb-2">
          <h3 className="font-display-md text-display-md text-on-background uppercase italic">
            COMPLETE THE RIG
          </h3>
          <Link href="/shop" className="font-label-lg text-label-lg text-secondary hover:underline pb-1 uppercase cursor-pointer">
            VIEW ALL ITEMS
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {recommendations.map((recProduct) => (
            <Link href={`/product/${recProduct.id}`} key={recProduct.id} className="group cursor-pointer block">
              <div className="sticker-border hard-shadow-hover transition-all bg-surface-container relative overflow-hidden mb-4 rounded-lg">
                <img
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={recProduct.name}
                  src={recProduct.image}
                />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <h4 className="font-label-lg text-label-lg uppercase mb-1 truncate text-on-background group-hover:text-primary transition-colors">
                {recProduct.name}
              </h4>
              <p className="font-body-md text-primary text-sm">
                Rp {recProduct.price.toLocaleString('id-ID')}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
