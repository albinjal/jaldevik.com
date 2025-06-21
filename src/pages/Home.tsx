import { posts } from '@/generated/posts.js';
import type { PostMeta } from '@/generated/posts.js';
import { Link } from 'react-router-dom';
import DegreeChip from '../components/DegreeChip.tsx';
import { Badge } from '../components/ui/badge.tsx';

export default function HomePage() {
  // Show up to 5 recent articles
  const recent: PostMeta[] = posts.slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-fade-in-up mx-auto max-w-3xl">
        {/* Header */}
        <h1 className="from-foreground to-muted-foreground mb-2 bg-gradient-to-r bg-clip-text text-4xl leading-tight font-bold text-transparent">
          Albin Jaldevik
        </h1>
        <p className="text-muted-foreground mb-6 text-lg">
          Quantitative Trading Analyst • Mathematics & AI Enthusiast
        </p>

        {/* Degree Chips */}
        <div className="mb-8 flex flex-wrap gap-3">
          <DegreeChip degree="M.Sc." field="Computer Science (AI)" />
          <DegreeChip degree="B.Sc." field="Mathematics" />
          <DegreeChip degree="B.Sc." field="Engineering" />
        </div>

        {/* Description */}
        <div className="mb-12 max-w-prose">
          <p className="text-muted-foreground mb-4">
            I specialise in turning data and algorithms into actionable
            insight—currently trading equity options in London.
          </p>
          <p className="text-muted-foreground">
            Outside of work I write about programming, mathematics and the
            occasional sailing adventure.
          </p>
        </div>

        {/* Recent articles */}
        <section>
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
            <span>Recent articles</span>
            <div className="from-border h-px flex-1 bg-gradient-to-r to-transparent"></div>
          </h2>
          {recent.length === 0 && (
            <p className="text-muted-foreground">No posts yet.</p>
          )}
          <div className="grid gap-6">
            {recent.map((post) => (
              <Link key={post.slug} to={post.path} className="group block">
                <article className="bg-card/50 hover:bg-card border-border hover:border-primary/30 hover:shadow-primary/5 transform rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-foreground group-hover:text-primary text-xl leading-tight font-semibold transition-colors">
                        {post.title}
                      </h3>
                      <time className="text-muted-foreground mt-1 text-sm whitespace-nowrap">
                        {new Date(post.date).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 px-2 py-1 text-xs transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {post.summary && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {post.summary}
                      </p>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
