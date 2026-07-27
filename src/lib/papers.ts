export type Paper = {
  title: string
  description: string
  tags: string[]
  url: string
  image: string
  journal: string
  year: string
}

export const papers: Paper[] = [
  {
    title:
      "Versatile microscale screening platform for improving recombinant protein production in Chinese hamster ovary cells",
    description:
      "A 96-deep-well screening platform combining semi-automated cell counting, split-GFP secretion analysis, and rapid transient transfection. My contribution included plasmid cloning and evaluation of difficult-to-express proteins.",
    tags: [
      "Split-GFP",
      "Celigo",
      "Deep well plates",
      "Transient transfection",
      "CHO",
    ],
    url: "https://pubmed.ncbi.nlm.nih.gov/26657798/",
    image: "/papers/0.webp",
    journal: "Biotechnology Journal",
    year: "2015",
  },
  {
    title:
      "Mammalian perfusion cultivation at high L-Arginine concentration for efficient production of recombinant protein",
    description:
      "A co-authored study of mammalian perfusion cultivation at high L-Arginine concentration, focused on increasing perfusion filter transmission and improving recombinant protein production.",
    tags: [
      "Perfusion cultivation",
      "Bioreactors",
      "L-Arginine",
      "Filter transmission",
    ],
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0168165624002529?via%3Dihub",
    image: "/papers/1.svg",
    journal: "Journal of Biotechnology",
    year: "2024",
  },
]
