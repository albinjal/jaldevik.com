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
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-2xl font-semibold">
              404 – Post not found
            </h1>
            <RouterLink to="/" className="text-primary underline">
              Return home
            </RouterLink>
          </div>
        </div>
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
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl text-center">Loading…</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
        <Component />
      </article>
    </div>
  );
}
