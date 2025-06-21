import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../generated/posts.js';
import { Button } from './ui/button.tsx';

interface BlogPostFooterProps {
  currentSlug: string;
}

export function BlogPostFooter({ currentSlug }: BlogPostFooterProps) {
  const currentIndex = posts.findIndex(
    (post: any) => post.slug === currentSlug,
  );
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <footer className="mt-16 space-y-6">
      {/* Navigation between posts */}
      {(previousPost || nextPost) && (
        <nav className="flex items-center justify-between">
          <div className="flex-1">
            {previousPost && (
              <Button
                variant="ghost"
                asChild
                className="group h-auto justify-start p-4"
              >
                <Link to={previousPost.path} className="flex items-start gap-3">
                  <ArrowLeft className="mt-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  <div className="text-left">
                    <div className="text-muted-foreground text-sm">
                      Previous
                    </div>
                    <div className="font-medium">{previousPost.title}</div>
                  </div>
                </Link>
              </Button>
            )}
          </div>

          <div className="mx-4 flex-shrink-0">
            <Button variant="outline" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                All posts
              </Link>
            </Button>
          </div>

          <div className="flex flex-1 justify-end">
            {nextPost && (
              <Button
                variant="ghost"
                asChild
                className="group h-auto justify-end p-4"
              >
                <Link to={nextPost.path} className="flex items-start gap-3">
                  <div className="text-right">
                    <div className="text-muted-foreground text-sm">Next</div>
                    <div className="font-medium">{nextPost.title}</div>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </nav>
      )}
    </footer>
  );
}
