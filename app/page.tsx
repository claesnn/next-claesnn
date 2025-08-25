import Link from "next/link";
import { Button } from "@/components/ui/button";
import IndexGame from "./IndexGame";
import { Github, Newspaper, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PaperCarousel from "./PaperCarousel";
import { Suspense } from "react";

function IndexHero() {
  return (
    <>
      <div className="mb-8 lg:mb-12">
        <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-border/20">
          <div className="relative">
            <img
              src="/profile-pic-200.webp"
              width="60"
              height="60"
              className="h-15 w-15 rounded-full ring-4 ring-white shadow-lg"
              alt="Claes Nymand Nilsson profile"
            />
            <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h2 className="font-semibold text-lg text-gray-900">Claes Nymand Nilsson</h2>
            <p className="text-gray-600 text-sm">Biotech Scientist & Full-Stack Developer</p>
            <p className="text-gray-500 text-xs mt-1">Copenhagen, Denmark</p>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="space-y-6">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            <span className="block text-gray-900">Hey there!</span>
            <span className="block mt-2">I&apos;m a{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              biotech scientist
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              software developer
            </span></span>
            <span className="block mt-2 text-gray-700">from Copenhagen</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            I blend scientific rigor with creative problem-solving to build impactful solutions 
            in biotechnology and software development.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-16 lg:mb-24">
        <Link href="/blogs" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200 border border-blue-200">
          <Newspaper size={18} />
          <span className="font-medium">Read my blogs</span>
        </Link>
        <Link
          href="https://github.com/claesnn"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors duration-200 border border-gray-200"
        >
          <Github size={18} />
          <span className="font-medium">View my code</span>
        </Link>
        <Link
          href="https://linkedin.com/in/claesnn/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200 border border-blue-200"
        >
          <Linkedin size={18} />
          <span className="font-medium">Connect with me</span>
        </Link>
      </div>
    </>
  );
}

function IndexPhotos() {
  type Photo = {
    id: number;
    width: number;
    height: number;
    alt: string;
  };

  const photos: Photo[] = [
    {
      id: 24,
      width: 1280,
      height: 853,
      alt: "A photo of a rock in the ocean in Iceland",
    },
    {
      id: 45,
      width: 1280,
      height: 853,
      alt: "A photo of a road with flowers on each side leading to a mountain in Iceland",
    },
    {
      id: 2,
      width: 1280,
      height: 1920,
      alt: "A photo of the adventure tower in south zealand",
    },
    {
      id: 7,
      width: 1280,
      height: 1920,
      alt: "A photo of the Geysir in Iceland",
    },
    {
      id: 38,
      width: 1280,
      height: 853,
      alt: "A photo of waterfalls in Iceland",
    },
    {
      id: 41,
      width: 1280,
      height: 853,
      alt: "A photo of the oldest church in Iceland with hayballs on the field",
    },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
        {photos.map((photo, index) => (
          <Link key={photo.id} href={`/photography/${photo.id}`}>
            <img
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              className="rounded-xl hover:scale-105 transition-transform duration-300 shadow-md"
              srcSet={`/images/${photo.id}-200.webp 200w, /images/${photo.id}-420.webp 420w, /images/${photo.id}-420.webp 640w, /images/${photo.id}-640.webp 960w,/images/${photo.id}-640.webp 1280w`}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/photography">
          <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50" aria-label="More photographies">
            <span className="mr-2">View all photos</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </Link>
      </div>
    </>
  );
}

function IndexBiotech() {
  return (
    <Suspense>
      <PaperCarousel />
    </Suspense>
  );
}

function HeaderLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href}>
      <h2 className="text-4xl font-bold">{text}</h2>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <IndexHero />

      <div className="space-y-12">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <HeaderLink href="/software" text="Software" />
            </div>
          </CardHeader>
          <CardContent>
            <IndexGame />
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <HeaderLink href="/biotech" text="Biotech" />
            </div>
          </CardHeader>
          <CardContent>
            <IndexBiotech />
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              <HeaderLink href="/photography" text="Photography" />
            </div>
          </CardHeader>
          <CardContent>
            <IndexPhotos />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
