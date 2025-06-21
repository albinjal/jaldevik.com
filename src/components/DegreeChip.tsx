import { Badge } from '@/components/ui/badge';

interface DegreeChipProps {
  degree: string;
  field: string;
  variant?: 'default' | 'secondary' | 'outline';
}

export default function DegreeChip({
  degree,
  field,
  variant = 'secondary',
}: DegreeChipProps) {
  return (
    <Badge
      variant={variant}
      className="from-primary/20 to-accent/20 border-primary/30 text-foreground hover:from-primary/30 hover:to-accent/30 bg-gradient-to-r px-3 py-1 text-sm font-medium transition-all duration-200"
    >
      <span className="text-primary font-semibold">{degree}</span>
      <span className="text-muted-foreground mx-1">•</span>
      <span>{field}</span>
    </Badge>
  );
}
