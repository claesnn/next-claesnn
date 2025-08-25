'use client';

import Link from "next/link";
import { useState } from "react";
import { imageMeta } from "@/lib/imageMeta";
import { Metadata } from "next";
import Lightbox from "@/components/Lightbox";

const metadata: Metadata = {
  title: "Photography",
  description: "Photography by Claes Nymand Nilsson",
};

function ImageLink({ i, onLightboxOpen }: { i: number; onLightboxOpen: (index: number) => void }) {
  return (
    <div className="group relative">
      <Link href={`/photography/${i}`}>
        <img
          src={`/images/${i}-640.webp`}
          loading={i < 6 ? "eager" : "lazy"}
          height={imageMeta[i].height}
          width={640}
          alt={`Photography ${i}`}
          className="transition-opacity hover:opacity-90"
        />
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          onLightboxOpen(i);
        }}
        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
        aria-label={`Open image ${i} in lightbox`}
      >
        <span className="text-white text-2xl">🔍</span>
      </button>
    </div>
  );
}

export default function Photography() {
  const IMAGE_COUNT = 54;
  const imageArray = Array.from({ length: IMAGE_COUNT });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(prev => prev > 0 ? prev - 1 : IMAGE_COUNT - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => prev < IMAGE_COUNT - 1 ? prev + 1 : 0);
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {imageArray.map((_, i) => (
          <ImageLink key={i} i={i} onLightboxOpen={openLightbox} />
        ))}
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
