import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge.tsx';
import { Button } from './ui/button.tsx';
import { Separator } from './ui/separator.tsx';

interface BlogPostHeaderProps {
  title: string;
  date: string;
  summary?: string;
  readingTime?: string;
  tags?: string[];
}

export function BlogPostHeader({
  title,
  date,
  summary,
  readingTime,
  tags,
}: BlogPostHeaderProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <header className="space-y-6">
      {/* Navigation */}
      <div className="flex items-center">
        <Button variant="ghost" size="sm" asChild className="group">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to posts
          </Link>
        </Button>
      </div>

      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {title}
        </h1>

        {summary && (
          <p className="text-muted-foreground text-xl leading-relaxed">
            {summary}
          </p>
        )}
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Metadata */}
      <div className="text-muted-foreground flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        {readingTime && (
          <>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readingTime}</span>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
