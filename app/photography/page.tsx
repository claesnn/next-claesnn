import Link from "next/link";
import { imageMeta } from "@/lib/imageMeta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
  description: "Photography by Claes Nymand Nilsson",
};

function ImageLink({ i }: { i: number }) {
  return (
    <Link href={`/photography/${i}`}>
      <img
        src={`/images/${i}-640.webp`}
        loading={i < 6 ? "eager" : "lazy"}
        height={imageMeta[i].height}
        width={640}
      />
    </Link>
  );
}

export default function Photography() {
  const IMAGE_COUNT = 54;
  const imageArray = Array.from({ length: IMAGE_COUNT });

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {imageArray.map((_, i) => (
        <ImageLink key={i} i={i} />
      ))}
    </div>
  );
}
