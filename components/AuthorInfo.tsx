import { kurale } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function AuthorInfo() {
  return (
    <>
      <h3 className={cn("text-xl", kurale.className)}>Who am I?</h3>
      <p className="text-sm">
        Hi, I&apos;m Claes Nymand Nilsson, and I am a Danish biotech engineer
        and software developer with a passion for science, technology, sports
        and photography.
      </p>
      <p className="text-sm">
        I&apos;ve been working in the biotech industry for <i>8+</i> years and
        have increasingly been working with software development and data
        analysis.
      </p>
      <img
        src="/profile-pic-200.webp"
        width="80"
        height="80"
        className="h-20 w-20 rounded-[4rem] mx-auto"
        alt="Claes Nymand Nilsson profile"
      />
    </>
  );
}
