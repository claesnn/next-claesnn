export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-4 leading-relaxed">
      {children}
    </div>
  );
}
