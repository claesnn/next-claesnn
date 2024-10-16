"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Paper = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
};

export default function PaperCarousel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const paperParam = searchParams.get("paper") ?? "0";
  const paperInt = parseInt(paperParam);

  const papers: Paper[] = [
    {
      title:
        "Versatile microscale screening platform for improving recombinant protein production in Chinese hamster ovary cells",
      description:
        "In this project, we developed a screening platform in 96-deep well plates. The platform enabled semi-automated cell counting, high-throughput protein secretion evaluation using split-GFP and the plate format enabled fast transfection and screening.<br /><br />My contribution to the project included cloning of plasmids encoding genes related to protein production and secretion. Evaluating the system for testing improvement of protein production and secretion for difficult-to-express proteins.",
      tags: [
        "Split-GFP",
        "Celigo",
        "Deep Well Plates",
        "Duetz",
        "Transient transfection",
        "CHO",
        "Protein Secretion",
      ],
      url: "https://pubmed.ncbi.nlm.nih.gov/26657798/",
      image: "/papers/0.webp",
    },
    {
      title:
        "Non-Versatile microscale screening platform for improving recombinant protein production in Chinese hamster ovary cells",
      description:
        "In this project, we developed a screening platform in 96-deep well plates. The platform enabled semi-automated cell counting, high-throughput protein secretion evaluation using split-GFP and the plate format enabled fast transfection and screening.<br /><br />My contribution to the project included cloning of plasmids encoding genes related to protein production and secretion. Evaluating the system for testing improvement of protein production and secretion for difficult-to-express proteins.",
      tags: [
        "Split-GFP",
        "Celigo",
        "Deep Well Plates",
        "Duetz",
        "Transient transfection",
        "CHO",
        "Protein Secretion",
      ],
      url: "https://pubmed.ncbi.nlm.nih.gov/26657798/",
      image: "/papers/0.webp",
    },

    {
      title:
        "Semi-Versatile microscale screening platform for improving recombinant protein production in Chinese hamster ovary cells",
      description:
        "In this project, we developed a screening platform in 96-deep well plates. The platform enabled semi-automated cell counting, high-throughput protein secretion evaluation using split-GFP and the plate format enabled fast transfection and screening.<br /><br />My contribution to the project included cloning of plasmids encoding genes related to protein production and secretion. Evaluating the system for testing improvement of protein production and secretion for difficult-to-express proteins.",
      tags: [
        "Split-GFP",
        "Celigo",
        "Deep Well Plates",
        "Duetz",
        "Transient transfection",
        "CHO",
        "Protein Secretion",
      ],
      url: "https://pubmed.ncbi.nlm.nih.gov/26657798/",
      image: "/papers/0.webp",
    },
  ];

  const paper = papers.length >= paperInt ? papers[paperInt] : papers[0];

  const prevPaper = (paperInt - 1 + papers.length) % papers.length;
  const nextPaper = (paperInt + 1) % papers.length;
  const setPaper = (paper: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("paper", paper.toString());

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="bg-gray-50 py-10 px-2">
      <div className="flex flex-col max-w-lg mx-auto">
        <Link href={paper.url} key={paper.title}>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>{paper.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={paper.image}
                width="160"
                height="160"
                className="rounded-xl w-40 h-40 float-left mr-4"
                alt={paper.title}
              />
              <p
                className="text-slate-600 prose-sm"
                dangerouslySetInnerHTML={{ __html: paper.description }}
              />
              <div className="flex flex-row flex-wrap gap-2 mt-4">
                {paper.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
        <div className="mx-auto mt-4 place-items-center flex">
          <Button variant="ghost" size="sm" onClick={() => setPaper(prevPaper)}>
            <ArrowLeft size={18} />
          </Button>
          <span className="mx-4 text-xs text-slate-500">
            {paperInt + 1}/{papers.length}
          </span>
          <Button variant="ghost" size="sm" onClick={() => setPaper(nextPaper)}>
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
