import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

const mdxModules = import.meta.glob('../posts/*.mdx');

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (!slug) return;
    const importPath = `../posts/${slug}.mdx`;
    const loader = mdxModules[importPath];

    if (!loader) {
      // No match → 404
      setComponent(() => () => (
        <main className="mx-auto my-8 max-w-3xl p-4 text-center">
          <h1 className="mb-4 text-2xl font-semibold">404 – Post not found</h1>
          <RouterLink to="/" className="text-orange-web underline">
            Return home
          </RouterLink>
        </main>
      ));
      return;
    }

    // Dynamically import MDX component
    loader().then((mod: any) => {
      setComponent(() => mod.default ?? mod);
    });
  }, [slug]);

  if (!Component) {
    return (
      <main className="mx-auto my-8 max-w-3xl p-4 text-center">Loading…</main>
    );
  }

  return (
    <main className="prose dark:prose-invert mx-auto my-8 max-w-3xl">
      <Component />
    </main>
  );
}
