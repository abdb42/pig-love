
import { useState } from "react";
import { format } from "date-fns";
import { ArrowLeft, Heart, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { JournalEntry } from "./JournalCard";

interface EntryDetailProps {
  entry: JournalEntry;
  onBack: () => void;
}

const EntryDetail = ({ entry, onBack }: EntryDetailProps) => {
  const [isLoved, setIsLoved] = useState(entry.loved);
  const formattedDate = format(new Date(entry.date), "MMMM d, yyyy");

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

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 text-slate-600 hover:text-slate-900 -ml-2 hover:bg-slate-100"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Journal
        </Button>

        <div className="flex justify-between items-start">
          <div>
            {entry.mood && (
              <span
                className={cn(
                  "text-xs px-2 py-1 rounded-full border font-medium mb-3 inline-block",
                  getMoodColor(entry.mood)
                )}
              >
                {entry.mood}
              </span>
            )}
            <h1 className="text-3xl font-bold text-slate-900 mt-1">{entry.title}</h1>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full text-slate-400 hover:text-rose-500 hover:bg-rose-50"
            onClick={() => setIsLoved(!isLoved)}
          >
            <Heart
              className={cn(
                "h-5 w-5 transition-all duration-300",
                isLoved ? "fill-rose-500 text-rose-500" : ""
              )}
            />
          </Button>
        </div>

        <div className="flex items-center text-sm text-slate-500 mt-2 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1.5" />
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center">
            <User className="h-4 w-4 mr-1.5" />
            <span>{entry.author}</span>
          </div>
        </div>
      </div>

      <Separator className="my-6 bg-slate-200/70" />

      <div className="prose prose-slate max-w-none">
        {entry.content.split("\n").map((paragraph, index) => (
          <p key={index} className="text-slate-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      <Separator className="my-8 bg-slate-200/70" />

      <div className="flex items-center justify-between pb-4">
        <div className="text-sm text-slate-500">
          {format(new Date(entry.date), "EEEE, MMMM d, yyyy 'at' h:mm a")}
        </div>

        <Button
          className="bg-slate-900 text-white hover:bg-slate-800"
          size="sm"
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default EntryDetail;
