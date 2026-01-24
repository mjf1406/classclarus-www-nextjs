import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Printer,
  Clock,
  Calculator,
  FileText,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TableOfContentsItem {
  id: string;
  number: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  return (
    <nav className={cn("space-y-2", className)}>
      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-secondary bg-background hover:bg-secondary/50 hover:border-primary/50 transition-all group"
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold",
                  item.color
                )}
              >
                {item.number}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                </div>
              </div>
              <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </Link>
          );
        })}
      </div>
      <div className="pt-2 border-t border-secondary">
        <Link
          href="#tips"
          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-secondary bg-background hover:bg-secondary/50 hover:border-yellow-500/50 transition-all group"
        >
          <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 text-white">
            <Lightbulb className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="font-medium text-sm group-hover:text-yellow-600 transition-colors">
              Helpful Tips
            </span>
          </div>
          <Lightbulb className="h-4 w-4 text-muted-foreground group-hover:text-yellow-500 transition-colors flex-shrink-0" />
        </Link>
      </div>
      <div className="pt-2 border-t border-secondary">
        <Link
          href="#calculator"
          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-secondary bg-background hover:bg-secondary/50 hover:border-primary/50 transition-all group"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground">
            <Calculator className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="font-medium text-sm group-hover:text-primary transition-colors">
              Cost Calculator
            </span>
          </div>
          <Calculator className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
        </Link>
      </div>
    </nav>
  );
}
