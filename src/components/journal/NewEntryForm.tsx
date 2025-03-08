
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface NewEntryFormProps {
  onSubmit: (entry: {
    title: string;
    content: string;
    author: string;
    mood?: "happy" | "reflective" | "grateful" | "romantic" | "excited";
  }) => void;
  onCancel: () => void;
}

const moods = [
  { value: "happy", label: "Happy" },
  { value: "reflective", label: "Reflective" },
  { value: "grateful", label: "Grateful" },
  { value: "romantic", label: "Romantic" },
  { value: "excited", label: "Excited" },
];

const NewEntryForm = ({ onSubmit, onCancel }: NewEntryFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [mood, setMood] = useState<"happy" | "reflective" | "grateful" | "romantic" | "excited" | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast.error("Please enter a title");
      return;
    }
    
    if (!content.trim()) {
      toast.error("Please enter your journal content");
      return;
    }
    
    if (!author.trim()) {
      toast.error("Please enter your name");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate a short delay for the submission
    setTimeout(() => {
      onSubmit({
        title,
        content,
        author,
        mood,
      });
      
      setIsSubmitting(false);
      
      toast.success("Journal entry created!");
    }, 800);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">New Journal Entry</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onCancel}
          className="rounded-full hover:bg-slate-100"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your entry a title..."
            className="bg-white/60 border-slate-200 focus:border-slate-300 focus:ring-slate-200"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="content">Your Thoughts</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your thoughts here..."
            className="min-h-[200px] bg-white/60 border-slate-200 focus:border-slate-300 focus:ring-slate-200"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="author">Your Name</Label>
          <Input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter your name..."
            className="bg-white/60 border-slate-200 focus:border-slate-300 focus:ring-slate-200"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Mood</Label>
          <RadioGroup 
            value={mood} 
            onValueChange={(value) => setMood(value as any)}
            className="flex flex-wrap gap-2 mt-2"
          >
            {moods.map((m) => (
              <div key={m.value} className="flex items-center space-x-2">
                <RadioGroupItem 
                  value={m.value} 
                  id={`mood-${m.value}`} 
                  className="peer sr-only" 
                />
                <Label
                  htmlFor={`mood-${m.value}`}
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-full border cursor-pointer transition-all",
                    "peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900",
                    "hover:bg-slate-100",
                    !mood || mood !== m.value 
                      ? "bg-white border-slate-200 text-slate-700" 
                      : ""
                  )}
                >
                  {m.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <div className="flex items-center justify-end space-x-4 pt-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            className="border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-slate-900 text-white hover:bg-slate-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Entry"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewEntryForm;
