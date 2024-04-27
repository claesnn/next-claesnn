export async function generateStaticParams() {
  return Array.from({ length: 54 }, (_, i) => ({
    slug: i.toString(),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <img
      src={`/images/${params.slug}-1280.webp`}
      className="mx-auto max-h-[calc(100vh-80px)]"
    />
  );
}
