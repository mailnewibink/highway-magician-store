'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { products, Product } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ShopList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const focusSearch = searchParams.get('focus') === 'search';

  const { addToCart } = useCart();

  // Filter States
  const selectedCategory = searchParams.get('category') || 'All Drops';
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('LATEST RELEASES');
  const [quickAddedId, setQuickAddedId] = useState<string | null>(null);

  // Focus search input if URL specifies focus=search
  useEffect(() => {
    if (focusSearch) {
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }
  }, [focusSearch]);

  // Categories list
  const categories = ['All Drops', 'Trucker Hats', 'Vintage Hoodies', 'Graphic Tees', 'Kustom'];

  // Handle category change via URL
  const handleCategorySelect = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'All Drops') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/shop?${params.toString()}`);
  };

  // Quick add to cart handler
  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault(); // prevent navigation since the card is wrapped in a Link
    const size = product.sizes[0] || 'OSFA';
    addToCart(product, size, 1);
    
    setQuickAddedId(product.id);
    setTimeout(() => {
      setQuickAddedId(null);
    }, 1500);
  };

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (selectedCategory !== 'All Drops') {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by Search Query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Sorting
    if (sortBy === 'PRICE: LOW-HIGH') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'PRICE: HIGH-LOW') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <main className="py-6 px-margin-mobile md:px-margin-desktop mb-stack-xl max-w-7xl mx-auto">
      {/* Hero Branding */}
      <section className="mb-stack-xl border-4 border-primary p-stack-lg grainy-bg bg-surface-container-low shadow-[8px_8px_0px_0px_#00CED1]">
        <div className="flex flex-col md:flex-row justify-between items-end gap-gutter">
          <div>
            <span className="inline-block bg-secondary text-on-secondary px-2 py-1 font-label-lg text-label-lg mb-2 rounded-sm uppercase">
              SEASON 02 RELEASE
            </span>
            <h2 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-on-surface uppercase italic leading-none">
              KUSTOM BUILT STREETWEAR
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              The high-octane gear for the asphalt-obsessed. Garage-built quality, race-inspired aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Filter & Search Bar */}
      <section className="flex flex-col gap-4 mb-gutter sticky top-20 z-40 bg-background/95 border-b border-outline-variant/30 py-4">
        {/* Category Tabs list */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const isKustom = cat === 'Kustom';
            
            let btnClass = "";
            if (isActive) {
              btnClass = "bg-primary text-on-primary border-2 border-on-primary-container sticker-shadow";
            } else if (isKustom) {
              btnClass = "bg-surface-container-high text-secondary border-2 border-secondary-container hover:bg-secondary hover:text-on-secondary";
            } else {
              btnClass = "bg-surface-container-high text-on-surface-variant border-2 border-outline hover:border-primary hover:text-on-background";
            }

            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`font-label-lg text-label-lg px-4 py-2 uppercase transition-all duration-150 rounded active:translate-y-0.5 ${btnClass} cursor-pointer`}
              >
                {isKustom && <span className="material-symbols-outlined text-[18px] align-middle mr-1">bolt</span>}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search and Sort tools */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
          {/* Search Box */}
          <div className="flex items-center gap-2 border-2 border-outline-variant px-3 py-2 bg-surface-container-low rounded w-full sm:max-w-xs">
            <span className="material-symbols-outlined text-primary text-[18px]">search</span>
            <input
              id="search-input"
              type="text"
              placeholder="SEARCH GARAGE..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-on-surface font-label-lg text-label-lg outline-none border-none p-0 w-full focus:ring-0 uppercase placeholder:text-outline-variant"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 border-2 border-outline-variant px-3 py-2 bg-surface-container-low rounded w-full sm:w-auto">
            <span className="material-symbols-outlined text-primary text-[18px]">sort</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-on-surface font-label-lg text-label-lg outline-none border-none p-0 pr-8 focus:ring-0 cursor-pointer uppercase font-bold"
            >
              <option className="bg-surface-container text-on-surface" value="LATEST RELEASES">LATEST RELEASES</option>
              <option className="bg-surface-container text-on-surface" value="PRICE: LOW-HIGH">PRICE: LOW-HIGH</option>
              <option className="bg-surface-container text-on-surface" value="PRICE: HIGH-LOW">PRICE: HIGH-LOW</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-outline-variant rounded-lg">
          <span className="material-symbols-outlined text-outline-variant text-6xl mb-4">
            no_transfer
          </span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface-variant uppercase">
            NO RIGS MATCH THE SPEC
          </h3>
          <p className="font-body-md text-outline mt-2 uppercase">
            Clear your search filter or select another drop tab.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {filteredProducts.map((product) => {
            const hasHoverImage = !!product.hoverImage;
            const isQuickAdded = quickAddedId === product.id;

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-surface-container border-2 border-outline-variant hover:border-primary transition-all duration-300 relative overflow-hidden rounded-lg"
              >
                <Link href={`/product/${product.id}`} className="block cursor-pointer flex-grow">
                  <div className="relative aspect-square overflow-hidden bg-surface-container-lowest">
                    {hasHoverImage ? (
                      <>
                        <img
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                          alt={`${product.name} Front`}
                          src={product.image}
                        />
                        <img
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          alt={`${product.name} Back`}
                          src={product.hoverImage}
                        />
                      </>
                    ) : (
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={product.name}
                        src={product.image}
                      />
                    )}

                    {product.status && (
                      <div className="absolute top-4 left-4 z-10 bg-secondary text-on-secondary px-3 py-1 font-label-lg text-label-lg border-2 border-on-secondary uppercase rounded-sm">
                        {product.status}
                      </div>
                    )}
                    
                    <div className="absolute bottom-4 right-4 z-10 bg-primary text-on-primary px-3 py-2 font-headline-lg text-headline-lg border-2 border-on-primary shadow-[3px_3px_0px_0px_black] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0px_0px_black] transition-all rounded-sm">
                      Rp {product.price.toLocaleString('id-ID')}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-between h-[120px]">
                    <div>
                      <h3 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-primary transition-colors uppercase truncate">
                        {product.name}
                      </h3>
                      <p className="font-body-md text-on-surface-variant font-light mt-1 text-sm line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="px-4 pb-4">
                  <button
                    onClick={(e) => handleQuickAdd(product, e)}
                    className={`w-full font-headline-lg text-headline-lg py-3 border-2 border-on-primary active:scale-95 transition-all sticker-shadow uppercase rounded cursor-pointer ${
                      isQuickAdded
                        ? 'bg-secondary text-on-secondary border-on-secondary'
                        : 'bg-primary text-on-primary'
                    }`}
                  >
                    {isQuickAdded ? 'ADDED TO GARAGE' : 'QUICK ADD'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={
      <div className="text-center py-20 uppercase font-headline-lg text-primary select-none">
        LOADING INVENTORY...
      </div>
    }>
      <ShopList />
    </Suspense>
  );
}
