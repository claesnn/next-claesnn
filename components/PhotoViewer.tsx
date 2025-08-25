'use client';

import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import { imageMeta } from '@/lib/imageMeta';

interface PhotoViewerProps {
  initialImage: number;
}

export default function PhotoViewer({ initialImage }: PhotoViewerProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImage);
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
          src={`/images/${initialImage}-1280.webp`}
          alt={`Photography ${initialImage}`}
          className="mx-auto max-h-[calc(100vh-80px)] max-w-full cursor-pointer hover:opacity-90 transition-opacity object-contain"
          onClick={() => setLightboxOpen(true)}
          width={1280}
          height={imageMeta[initialImage]?.height || 960}
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