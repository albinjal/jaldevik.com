import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { BlogPostFooter } from '../components/BlogPostFooter.tsx';
import { BlogPostHeader } from '../components/BlogPostHeader.tsx';
import { posts } from '../generated/posts.js';
import {
  calculateReadingTime,
  extractTextFromMDX,
} from '../lib/readingTime.ts';

const mdxModules = import.meta.glob('../posts/*.mdx');
const mdxRawModules = import.meta.glob('../posts/*.mdx', {
  import: 'default',
  query: '?raw',
});

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [readingTime, setReadingTime] = useState<string>('');

  // Find post metadata
  const postMeta = posts.find((post: any) => post.slug === slug);

  useEffect(() => {
    if (!slug) {
      return;
    }
    const importPath = `../posts/${slug}.mdx`;
    const loader = mdxModules[importPath];

    if (!loader) {
      // No match → 404
      setComponent(() => () => (
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-foreground text-4xl font-bold">
              404 – Post not found
            </h1>
            <p className="text-muted-foreground">
              The blog post you're looking for doesn't exist.
            </p>
            <RouterLink
              className="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              to="/"
            >
              Return home
            </RouterLink>
          </div>
        </div>
      ));
      setIsLoading(false);
      return;
    }

    // Dynamically import MDX component and raw content for reading time
    Promise.all([loader(), mdxRawModules[importPath]?.()]).then(
      ([mod, rawContent]: [any, any]) => {
        setComponent(() => mod.default ?? mod);

        if (rawContent) {
          const textContent = extractTextFromMDX(rawContent);
          setReadingTime(calculateReadingTime(textContent));
        }

        setIsLoading(false);
      },
    );
  }, [slug]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="animate-pulse space-y-6">
            <div className="bg-muted h-4 w-24 rounded"></div>
            <div className="space-y-4">
              <div className="bg-muted h-12 w-3/4 rounded"></div>
              <div className="bg-muted h-6 w-full rounded"></div>
            </div>
            <div className="bg-muted h-4 w-32 rounded"></div>
            <div className="bg-border h-px"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!Component) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        {postMeta && (
          <BlogPostHeader
            date={postMeta.date}
            readingTime={readingTime}
            summary={postMeta.summary}
            tags={postMeta.tags}
            title={postMeta.title}
          />
        )}
        <article className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-muted prose-pre:border mt-8 max-w-none">
          <Component />
        </article>
        {slug && <BlogPostFooter currentSlug={slug} />}
      </div>
    </div>
  );
}
