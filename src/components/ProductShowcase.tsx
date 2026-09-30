import React from 'react';
import { SHOWCASE_PRODUCTS } from '../config';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 my-8 sm:my-12">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="font-heading font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight text-white flex items-center justify-center gap-2 flex-wrap">
          <span className="text-orange-500">🔥</span>
          <span>ALGUNS PRODUTOS QUE</span>
          <span className="text-orange-500 italic">JÁ PASSARAM</span>
          <span>PELO GRUPO</span>
        </h2>
      </div>

      {/* Gallery Grid: 2 columns on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        {SHOWCASE_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col justify-between items-center text-center shadow-lg border border-neutral-200/90 hover:border-orange-500/50 transition-all duration-200"
          >
            {/* Image Container with pure white background, object-contain, no distortion */}
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-white flex items-center justify-center p-2 mb-2 sm:mb-3">
              <img
                src={product.image}
                alt={product.name}
                width={product.width}
                height={product.height}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            {/* Product Name (Clean, legible, without prices) */}
            <div className="w-full pt-1">
              <h3 className="font-heading font-extrabold text-neutral-900 text-xs sm:text-sm md:text-base leading-tight tracking-tight">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
