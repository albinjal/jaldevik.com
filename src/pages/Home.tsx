import { posts } from '@/generated/posts.js';
import type { PostMeta } from '@/generated/posts.js';
import { Link } from 'react-router-dom';

export default function HomePage() {
  // Show up to 5 recent articles
  const recent: PostMeta[] = posts.slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <h1 className="mb-2 text-4xl leading-tight font-bold">
          Albin Jaldevik
        </h1>
        <p className="text-muted-foreground mb-6 text-lg">
          Quantitative Trading Analyst • MSc Computer Science (AI)
        </p>

        {/* Description */}
        <p className="text-muted-foreground mb-12 max-w-prose">
          I specialise in turning data and algorithms into actionable
          insight—currently trading equity options in London. Outside of work I
          write about programming, maths and the occasional sailing adventure.
        </p>

        {/* Recent articles */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Recent articles</h2>
          {recent.length === 0 && (
            <p className="text-muted-foreground">No posts yet.</p>
          )}
          <div className="grid gap-4">
            {recent.map((post) => (
              <Link key={post.slug} to={post.path} className="group block">
                <article className="bg-card hover:bg-accent/50 border-border hover:border-primary/50 transform rounded-lg border p-6 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-foreground group-hover:text-primary mb-2 text-xl font-semibold transition-colors">
                    {post.title}
                  </h3>
                  <time className="text-muted-foreground mb-3 block text-sm">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {post.summary && (
                    <p className="text-muted-foreground leading-relaxed">
                      {post.summary}
                    </p>
                  )}
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
