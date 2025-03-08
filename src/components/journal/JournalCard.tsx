
import { useState } from "react";
import { format } from "date-fns";
import { Heart, MessageCircle, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: Date;
  author: string;
  loved: boolean;
  mood?: "happy" | "reflective" | "grateful" | "romantic" | "excited";
}

interface JournalCardProps {
  entry: JournalEntry;
  className?: string;
  onClick?: () => void;
}

const getMoodColor = (mood: string | undefined) => {
  switch (mood) {
    case "happy":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "reflective":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "grateful":
      return "bg-green-100 text-green-700 border-green-200";
    case "romantic":
      return "bg-rose-100 text-rose-700 border-rose-200";
    case "excited":
      return "bg-purple-100 text-purple-700 border-purple-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

const JournalCard = ({ entry, className, onClick }: JournalCardProps) => {
  const [isLoved, setIsLoved] = useState(entry.loved);
  
  const formattedDate = format(new Date(entry.date), "MMMM d, yyyy");
  const excerpt = entry.content.length > 150 
    ? `${entry.content.substring(0, 150)}...` 
    : entry.content;

  return (
    <div 
      className={cn(
        "journal-card group animate-scale-in",
        className
      )}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        {entry.mood && (
          <span className={cn(
            "text-xs px-2 py-1 rounded-full border font-medium", 
            getMoodColor(entry.mood)
          )}>
            {entry.mood}
          </span>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full text-slate-400 hover:text-rose-500 hover:bg-rose-50"
          onClick={(e) => {
            e.stopPropagation();
            setIsLoved(!isLoved);
          }}
        >
          <Heart className={cn(
            "h-4 w-4 transition-all duration-300", 
            isLoved ? "fill-rose-500 text-rose-500" : ""
          )} />
        </Button>
      </div>
      
      <h3 className="text-xl font-medium text-slate-900 mb-2 group-hover:text-slate-700 transition-colors duration-200">
        {entry.title}
      </h3>
      
      <p className="text-sm text-slate-600 mb-4 line-clamp-3">
        {excerpt}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
        <div className="flex items-center text-xs text-slate-500">
          <Calendar className="h-3.5 w-3.5 mr-1.5" />
          <span>{formattedDate}</span>
        </div>
        
        <div className="flex items-center text-xs text-slate-500">
          <User className="h-3.5 w-3.5 mr-1.5" />
          <span>{entry.author}</span>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default JournalCard;
