import { LayoutProps } from "@/.next/types/app/blog/layout";

export default function Layout({ children }: LayoutProps) {
  return (
    <section>
      <div className="prose lg:prose-xl">{children}</div>
    </section>
  );
}
