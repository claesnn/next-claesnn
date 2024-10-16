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
      <div className="mt-6 lg:mt-12 text-slate-500 text-sm">
        <div className="flex">
          <img
            src="/profile-pic-200.webp"
            width="40"
            height="40"
            className="h-10 w-10 rounded-[4rem] mr-4"
            alt="Claes Nymand Nilsson profile"
          />
          <div>
            <p>Claes Nymand Nilsson</p>
            <p>Biotech Scientist and Full-Stack Developer</p>
          </div>
        </div>
      </div>
      <div className="flex mb-10 mt-3">
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5 leading-[1.3] sm:leading-[1.3] md:leading-[1.3] lg:leading-[1.3] xl:leading-[1.3]">
            Hey there! I&apos;m a{" "}
            <mark className="bg-green-900 bg-opacity-15">
              biotech scientist
            </mark>{" "}
            and{" "}
            <mark className="bg-blue-900 bg-opacity-15">
              software developer
            </mark>{" "}
            from Copenhagen
          </h1>
        </div>
      </div>
      <div className="flex mb-12 lg:mb-24 uppercase text-sm text-blue-900 gap-8">
        <Link href="/blogs" className="flex gap-2 place-items-center">
          <Newspaper size={18} />
          Blogs
        </Link>
        <Link
          href="https://github.com/claesnn"
          className="flex gap-2 place-items-center"
        >
          <Github size={18} />
          Github
        </Link>
        <Link
          href="https://linkedin.com/in/claesnn/"
          className="flex gap-2 place-items-center"
        >
          <Linkedin size={18} />
          LinkedIn
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
      <div className="grid sm:grid-cols-2 gap-3">
        {photos.map((photo, index) => (
          <Link key={photo.id} href={`/photography/${photo.id}`}>
            <img
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              srcSet={`/images/${photo.id}-200.webp 200w, /images/${photo.id}-420.webp 420w, /images/${photo.id}-420.webp 640w, /images/${photo.id}-640.webp 960w,/images/${photo.id}-640.webp 1280w`}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <Link href="/photography">
          <Button variant="ghost" aria-label="More photographies">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-more-horizontal"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
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

      <Card className="mb-10">
        <CardHeader>
          <HeaderLink href="/software" text="Software" />
        </CardHeader>
        <CardContent>
          <IndexGame />
        </CardContent>
      </Card>
      <Card className="mb-10">
        <CardHeader>
          <HeaderLink href="/biotech" text="Biotech" />
        </CardHeader>
        <CardContent>
          <IndexBiotech />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <HeaderLink href="/photography" text="Photography" />
        </CardHeader>
        <CardContent>
          <IndexPhotos />
        </CardContent>
      </Card>
    </>
  );
}
