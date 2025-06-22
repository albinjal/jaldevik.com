import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../generated/posts.js';
import { Button } from './ui/button.tsx';

interface BlogPostFooterProps {
  currentSlug: string;
}

export function BlogPostFooter({ currentSlug }: BlogPostFooterProps) {
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <footer className="mt-16 space-y-6">
      {/* Navigation between posts */}
      {(previousPost || nextPost) && (
        <nav className="flex items-center justify-between md:justify-between">
          {/* Previous post */}
          <div className="mr-2 min-w-0 flex-1">
            {previousPost ? (
              <Button
                asChild
                className="group h-auto w-full justify-start p-4"
                variant="ghost"
              >
                <Link
                  className="flex min-w-0 items-start gap-3"
                  to={previousPost.path}
                >
                  <ArrowLeft className="mt-1 h-4 w-4 flex-shrink-0 transition-transform group-hover:-translate-x-1" />
                  <div className="min-w-0 flex-1 text-left">
                    <div className="text-muted-foreground text-sm">
                      Previous
                    </div>
                    <div className="truncate font-medium">
                      {previousPost.title}
                    </div>
                  </div>
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>

          {/* All posts button - hidden on mobile */}
          <div className="hidden md:mx-4 md:flex md:flex-shrink-0">
            <Button asChild size="sm" variant="outline">
              <Link className="flex items-center gap-2" to="/">
                <Home className="h-4 w-4" />
                All posts
              </Link>
            </Button>
          </div>

          {/* Next post */}
          <div className="ml-2 flex min-w-0 flex-1 justify-end">
            {nextPost && (
              <Button
                asChild
                className="group h-auto w-full justify-end p-4"
                variant="ghost"
              >
                <Link
                  className="flex min-w-0 items-start gap-3"
                  to={nextPost.path}
                >
                  <div className="min-w-0 flex-1 text-right">
                    <div className="text-muted-foreground text-sm">Next</div>
                    <div className="truncate font-medium">{nextPost.title}</div>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </nav>
      )}
    </footer>
  );
}
