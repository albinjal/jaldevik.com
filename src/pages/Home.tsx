import { posts } from '@/generated/posts';
import type { PostMeta } from '@/generated/posts';
import { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

// External anchor helper
const ExternalLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className="text-orange-web dark:text-orange-web underline hover:no-underline"
    {...props}
  />
);

export default function HomePage() {
  // Show up to 5 recent articles
  const recent: PostMeta[] = posts.slice(0, 5);

  return (
    <main className="border-border bg-card mx-auto my-8 mt-10 max-w-3xl rounded-sm border p-6 shadow-md dark:shadow-none">
      {/* Header */}
      <h1 className="text-foreground mb-2 text-4xl leading-tight font-bold">
        Albin Jaldevik
      </h1>
      <p className="text-muted-foreground mb-6 text-lg">
        Quantitative Trading Analyst • MSc Computer Science (AI)
      </p>

      {/* Contact links */}
      <ul className="mb-8 flex flex-col gap-2 text-base">
        <li>
          📧{' '}
          <ExternalLink href="mailto:albin@jaldevik.com">
            albin@jaldevik.com
          </ExternalLink>
        </li>
        <li>
          💼{' '}
          <ExternalLink href="https://linkedin.com/in/albin-jaldevik">
            linkedin.com/in/albin-jaldevik
          </ExternalLink>
        </li>
      </ul>

      {/* Description */}
      <p className="text-muted-foreground mb-8 max-w-prose">
        I specialise in turning data and algorithms into actionable
        insight—currently trading equity options in London. Outside of work I
        write about programming, maths and the occasional sailing adventure.
      </p>

      {/* Recent articles */}
      <section>
        <h2 className="text-foreground mb-4 text-2xl font-semibold">
          Recent articles
        </h2>
        {recent.length === 0 && (
          <p className="text-muted-foreground">No posts yet.</p>
        )}
        <ul className="space-y-4">
          {recent.map((post) => (
            <li
              key={post.slug}
              className="group hover:border-orange-web rounded-md border border-transparent p-2 transition-colors"
            >
              <Link to={post.path} className="block">
                <h3 className="text-orange-web text-xl font-medium group-hover:underline">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                {post.summary && (
                  <p className="text-muted-foreground mt-2">{post.summary}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
