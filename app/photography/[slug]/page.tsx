'use client';

import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import { imageMeta } from '@/lib/imageMeta';

export async function generateStaticParams() {
  return Array.from({ length: 54 }, (_, i) => ({
    slug: i.toString(),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(parseInt(params.slug));
  const IMAGE_COUNT = 54;

  const goToPrevious = () => {
    setCurrentImageIndex(prev => prev > 0 ? prev - 1 : IMAGE_COUNT - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => prev < IMAGE_COUNT - 1 ? prev + 1 : 0);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={`/images/${params.slug}-1280.webp`}
          alt={`Photography ${params.slug}`}
          className="mx-auto max-h-[calc(100vh-80px)] cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setLightboxOpen(true)}
          style={{
            aspectRatio: `1280 / ${imageMeta[currentImageIndex]?.height || 960}`
          }}
        />
        <p className="text-sm text-gray-500 mt-2">Click to open lightbox</p>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentImage={currentImageIndex}
        totalImages={IMAGE_COUNT}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
}
