'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Re-initialize QueryClient here or ensure it's passed down if needed globally
// For simplicity, initializing it here, but consider context/singleton if shared state is complex.
const queryClient = new QueryClient();

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
} 