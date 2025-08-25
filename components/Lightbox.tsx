'use client';

import { useEffect, useState } from 'react';
import { imageMeta } from '@/lib/imageMeta';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: number;
  totalImages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Lightbox({ isOpen, onClose, currentImage, totalImages, onPrevious, onNext }: LightboxProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentImage]);

  useEffect(() => {
    if (isOpen) {
      setImageLoaded(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeydown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
        aria-label="Close lightbox"
      >
        ×
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
        aria-label="Next image"
      >
        ›
      </button>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] flex items-center justify-center">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-lg">Loading...</div>
          </div>
        )}
        <img
          src={`/images/${currentImage}-1280.webp`}
          alt={`Photography ${currentImage}`}
          className={`max-h-full max-w-full object-contain transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
        {currentImage + 1} / {totalImages}
      </div>
    </div>
  );
}