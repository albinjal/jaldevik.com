import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { Badge } from './ui/badge.js';

interface InfoChipProps {
  primary: string;
  secondary?: string;
  type: 'degree' | 'location' | 'occupation';
  variant?: 'default' | 'secondary' | 'outline';
}

export default function InfoChip({
  primary,
  secondary,
  type,
  variant = 'secondary',
}: InfoChipProps) {
  const getIcon = () => {
    switch (type) {
      case 'degree':
        return <GraduationCap className="h-3 w-3" />;
      case 'location':
        return <MapPin className="h-3 w-3" />;
      case 'occupation':
        return <Briefcase className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <Badge
      className="from-primary/20 to-accent/20 border-primary/30 text-foreground hover:from-primary/30 hover:to-accent/30 bg-gradient-to-r px-3 py-1 text-sm font-medium transition-all duration-200"
      variant={variant}
    >
      <span className="flex items-center gap-2">
        {getIcon()}
        <span className="text-primary font-semibold">{primary}</span>
        {secondary && (
          <>
            <span className="text-muted-foreground mx-1">•</span>
            <span>{secondary}</span>
          </>
        )}
      </span>
    </Badge>
  );
}
