import { posts } from '@/generated/posts.ts';
import type { PostMeta } from '@/generated/posts.ts';
import { Link } from 'react-router-dom';
import InfoChip from '../components/InfoChip.tsx';
import { Badge } from '../components/ui/badge.tsx';

export default function HomePage() {
  // Show up to 5 recent articles
  const recent: PostMeta[] = posts.slice(0, 5);

  return (
    <div className="container mx-auto flex-1 px-4 py-8">
      <div className="animate-fade-in-up mx-auto max-w-3xl">
        {/* Header */}
        <h1 className="from-foreground to-muted-foreground mb-2 bg-gradient-to-r bg-clip-text text-4xl leading-tight font-bold text-transparent">
          Albin Jaldevik
        </h1>
        {/* Description */}
        <div className="mb-8 max-w-prose">
          <p className="text-muted-foreground mb-4">
            Currently trading equity options in London and vibe-code.
          </p>
        </div>

        {/* Info Chips */}
        <div className="mb-12 flex flex-wrap gap-3">
          <InfoChip
            primary="Quantitative Trader"
            secondary="DRW"
            type="occupation"
          />
          <InfoChip primary="London" type="location" />
          <InfoChip
            primary="M.Sc."
            secondary="Computer Science (AI)"
            type="degree"
          />
          <InfoChip primary="B.Sc." secondary="Mathematics" type="degree" />
          <InfoChip primary="B.Sc." secondary="Engineering" type="degree" />
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
              <Link className="group block" key={post.slug} to={post.path}>
                <article className="bg-card/50 hover:bg-card border-border hover:border-primary/30 hover:shadow-primary/5 transform rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-foreground group-hover:text-primary text-xl leading-tight font-semibold transition-colors">
                        {post.title}
                      </h3>
                      <time className="text-muted-foreground mt-1 text-sm whitespace-nowrap">
                        {new Date(post.date).toLocaleDateString(undefined, {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </time>
                    </div>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag: string) => (
                          <Badge
                            className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 px-2 py-1 text-xs transition-colors"
                            key={tag}
                            variant="outline"
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
