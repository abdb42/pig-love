'use client'; // Needed for useState, useEffect, framer-motion, dialog

import React, { useState, useEffect } from "react"; // Added React import
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, SlidersHorizontal, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
// import Header from "@/components/layout/Header"; // Removed
// import Footer from "@/components/layout/Footer"; // Removed
import JournalCard from "@/components/journal/JournalCard";
import NewEntryForm from "@/components/journal/NewEntryForm";
import EntryDetail from "@/components/journal/EntryDetail";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { JournalEntry } from "@/components/journal/JournalCard";

// Sample journal entries
const sampleEntries: JournalEntry[] = [
  // ... (sampleEntries array remains the same)
  {
    id: "1",
    title: "Our First Date",
    content: 
      "Today was magical. We met at that little café downtown, the one with the blue awning and the hanging plants in the window. I was nervous—I kept checking my watch every few minutes before you arrived. But then you walked in, and everything just felt right.\n\nYou were wearing that green sweater that brings out your eyes, and your smile lit up the whole room. We talked for hours, about everything and nothing. Our coffee went cold because we were so wrapped up in conversation.\n\nI loved how you laughed at my terrible jokes, and how passionate you became when talking about your favorite books. There was that moment when our hands touched across the table, and I felt a spark I've never felt before.\n\nAs we walked through the park afterward, the evening light filtering through the trees, I knew this was the beginning of something special. I can't wait to see where this journey takes us.",
    date: new Date(2023, 1, 14),
    author: "Jamie",
    loved: true,
    mood: "excited",
  },
  {
    id: "2",
    title: "Reflections on Our Anniversary",
    content: 
      "One year together. It's amazing how quickly time passes when you're with someone who makes every day an adventure. Looking back on these twelve months, I'm filled with gratitude for all we've experienced together.\n\nWe've had our challenges—those weeks when work kept us apart, the disagreement about holiday plans with family, the time we got lost hiking and you were convinced we'd have to be rescued (I still maintain we were never in any real danger). But through it all, we've grown stronger, more connected.\n\nWhat stands out most are the small moments: making pancakes together on Sunday mornings, the way you always fall asleep during movies, how you know exactly what to say when I've had a rough day.\n\nToday at dinner, watching you across the candlelit table, I realized that home isn't a place—it's a person. And I've found that in you.",
    date: new Date(2024, 1, 14),
    author: "Alex",
    loved: false,
    mood: "grateful",
  },
  {
    id: "3",
    title: "The Day We Decided",
    content: 
      "Today we made a big decision together. After months of discussions, pro-con lists, and imagining all the possibilities, we're moving in together. It feels both exciting and slightly terrifying—in the best possible way.\n\nI love how we approached this decision as a team. No pressure, just open and honest conversations about what we both want and what makes sense for us right now. When we finally looked at each other and said \"Let's do it,\" I felt this wave of certainty and joy wash over me.\n\nThere's something profound about choosing to share your daily life with someone, about creating a shared space that will become our home. I'm looking forward to the simple things—cooking dinner together on weeknights, deciding where to hang pictures, waking up next to you every morning.\n\nOf course, I know there will be adjustments (your extensive sneaker collection might be challenged by my book hoarding tendencies). But I'm ready for all of it—the compromises, the discoveries, the growth.\n\nHere's to our next chapter.",
    date: new Date(2024, 3, 10),
    author: "Jamie",
    loved: true,
    mood: "reflective",
  },
  {
    id: "4",
    title: "Surprise Weekend Getaway",
    content: 
      "I can't believe you managed to keep this a secret for weeks! When you told me to pack a bag for the weekend but wouldn't say where we were going, I was so curious (and yes, slightly suspicious). The drive through the countryside with you being mysteriously tight-lipped about our destination only added to the excitement.\n\nWhen we pulled up to that charming little coastal cottage, with its blue shutters and the ocean view, I was speechless. You remembered how I once mentioned wanting to fall asleep to the sound of waves. The care you put into planning everything—the local restaurant reservations, the sunrise hike, even remembering to bring my favorite snacks for the car ride—shows me how well you know me, how much you pay attention to the details.\n\nWatching the sunset from the porch swing, wrapped in blankets with hot chocolate, was perfect. We talked about our dreams for the future, and something about being away from our regular routines made the conversation feel different, more expansive somehow.\n\nI'm back home now with sand still in my shoes and a heart full of memories. Thank you for knowing exactly what I needed before I did.",
    date: new Date(2024, 4, 5),
    author: "Alex",
    loved: true,
    mood: "happy",
  },
];

const JournalPage = () => { // Renamed component
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  // Load entries on mount (client-side only)
  useEffect(() => {
    // In a real app, fetch entries from an API here
    // For now, just use the sample data
    setEntries(sampleEntries);
  }, []);

  const handleNewEntry = (entry: {
    title: string;
    content: string;
    author: string;
    mood?: "happy" | "reflective" | "grateful" | "romantic" | "excited";
  }) => {
    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      title: entry.title,
      content: entry.content,
      date: new Date(),
      author: entry.author,
      loved: false,
      mood: entry.mood,
    };

    setEntries([newEntry, ...entries]);
    setIsNewEntryOpen(false);
  };

  const handleSelectEntry = (entry: JournalEntry) => {
    setSelectedEntry(entry);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* <Header /> */}{/* Removed */}

      <main className="flex-grow pt-32 pb-16">
        <Container>
          <AnimatePresence mode="wait">
            {!selectedEntry ? (
              <motion.div
                key="journal-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* ... (rest of the content remains the same) ... */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                      Your Journal
                    </h1>
                    <p className="text-slate-600">
                      Capture moments and reflections together
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-0 flex space-x-4">
                    <Button
                      variant="outline"
                      className="border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    >
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button
                      onClick={() => setIsNewEntryOpen(true)}
                      className="bg-slate-900 text-white hover:bg-slate-800"
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      New Entry
                    </Button>
                  </div>
                </div>

                {entries.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <Book className="h-12 w-12 text-slate-300 mb-4" />
                    <h3 className="text-xl font-medium text-slate-900 mb-2">
                      No journal entries yet
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Start capturing your journey together by creating your first entry
                    </p>
                    <Button
                      onClick={() => setIsNewEntryOpen(true)}
                      className="bg-slate-900 text-white hover:bg-slate-800"
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Create Entry
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {entries.map((entry, index) => (
                      <motion.div
                        key={entry.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <JournalCard
                          entry={entry}
                          onClick={() => handleSelectEntry(entry)}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="entry-detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <EntryDetail
                  entry={selectedEntry}
                  onBack={() => setSelectedEntry(null)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </main>

      <Dialog open={isNewEntryOpen} onOpenChange={setIsNewEntryOpen}>
        <DialogContent className="sm:max-w-[550px] p-6 bg-white/90 backdrop-blur-md">
          <NewEntryForm
            onSubmit={handleNewEntry}
            onCancel={() => setIsNewEntryOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* <Footer /> */}{/* Removed */}
    </div>
  );
};

export default JournalPage; // Changed export 