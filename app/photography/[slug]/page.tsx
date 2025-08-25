import PhotoViewer from '@/components/PhotoViewer';

export async function generateStaticParams() {
  return Array.from({ length: 54 }, (_, i) => ({
    slug: i.toString(),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const imageIndex = parseInt(params.slug);
  
  return <PhotoViewer initialImage={imageIndex} />;
}
