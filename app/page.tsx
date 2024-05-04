import { cn } from "@/lib/utils"
import { kurale } from "@/lib/fonts"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import IndexGame from "./IndexGame"
import { Github, Newspaper, Linkedin } from "lucide-react"

function IndexHero() {
  return (
    <>
      <div className='mt-6 lg:mt-12 text-slate-500 text-sm'>
        <div className='flex'>
          <img
            src='/profile-pic-200.webp'
            width='40'
            height='40'
            className='h-10 w-10 rounded-[4rem] mr-4'
            alt='Claes Nymand Nilsson profile'
          />
          <div>
            <p>Claes Nymand Nilsson</p>
            <p>Biotech Scientist and Full-Stack Developer</p>
          </div>
        </div>
      </div>
      <div className='flex mb-10 mt-3'>
        <div>
          <h1
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5 ",
              kurale.className,
              "leading-[1.7] sm:leading-[1.7] md:leading-[1.7] lg:leading-[1.7] xl:leading-[1.7]",
            )}>
            Hey there! I&apos;m a{" "}
            <mark className='bg-green-900 bg-opacity-15'>
              biotech scientist
            </mark>{" "}
            and{" "}
            <mark className='bg-blue-900 bg-opacity-15'>
              software developer
            </mark>{" "}
            from Copenhagen
          </h1>
        </div>
      </div>
      <div className='flex mb-12 lg:mb-24 uppercase text-sm text-blue-900 gap-8'>
        <Link
          href='/blogs'
          className='flex gap-2 place-items-center'>
          <Newspaper size={18} />
          Blogs
        </Link>
        <Link
          href='https://github.com/claesnn'
          className='flex gap-2 place-items-center'>
          <Github size={18} />
          Github
        </Link>
        <Link
          href='https://linkedin.com/in/claesnn/'
          className='flex gap-2 place-items-center'>
          <Linkedin size={18} />
          LinkedIn
        </Link>
      </div>
    </>
  )
}

function IndexPhotos() {
  type Photo = {
    id: number
    width: number
    height: number
    alt: string
  }

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
  ]

  return (
    <>
      <div className='grid sm:grid-cols-2 gap-3'>
        {photos.map((photo, index) => (
          <Link
            key={photo.id}
            href={`/photography/${photo.id}`}>
            <img
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading={index < 2 ? "eager" : "lazy"}
              srcSet={`/images/${photo.id}-200.webp 200w, /images/${photo.id}-420.webp 420w, /images/${photo.id}-420.webp 640w, /images/${photo.id}-640.webp 960w,/images/${photo.id}-640.webp 1280w`}
            />
          </Link>
        ))}
      </div>
      <div className='flex justify-center mt-3'>
        <Link href='/photography'>
          <Button
            variant='ghost'
            aria-label='More photographies'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-more-horizontal'>
              <circle
                cx='12'
                cy='12'
                r='1'
              />
              <circle
                cx='19'
                cy='12'
                r='1'
              />
              <circle
                cx='5'
                cy='12'
                r='1'
              />
            </svg>
          </Button>
        </Link>
      </div>
    </>
  )
}

function IndexBiotech() {
  const papers = ["https://pubmed.ncbi.nlm.nih.gov/26657798/"]

  return (
    <div>
      {papers.map((paper, index) => (
        <Link
          href={paper}
          key={paper}>
          <img
            src={`/papers/${index}.png`}
            className='mx-auto'
            loading='lazy'
            alt='A paper on biotech'
          />
        </Link>
      ))}
    </div>
  )
}

function HeaderLink({ href, text }: { href: string; text: string }) {
  return (
    <>
      <hr className='my-8' />
      <Link href={href}>
        <h2 className={cn("text-4xl mb-4", kurale.className)}>{text}</h2>
      </Link>
    </>
  )
}

export default function Home() {
  return (
    <>
      <IndexHero />

      <HeaderLink
        href='software'
        text='Software'
      />
      <IndexGame />
      <HeaderLink
        href='biotech'
        text='Biotech'
      />
      <IndexBiotech />
      <HeaderLink
        href='photography'
        text='Photography'
      />
      <IndexPhotos />
    </>
  )
}
