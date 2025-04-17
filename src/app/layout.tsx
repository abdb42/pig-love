// 'use client'; // Removed 'use client'

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/globals.css'; // Updated import path
// import { Toaster } from '@/components/ui/toaster'; // Removed
// import { Toaster as Sonner } from '@/components/ui/sonner'; // Removed
// import { TooltipProvider } from '@/components/ui/tooltip'; // Removed
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Removed
import React from 'react';
// import Header from '@/components/layout/Header'; // Removed
// import Footer from '@/components/layout/Footer'; // Removed
import ClientProviders from '@/components/layout/ClientProviders'; // Import the new wrapper

// Removed QueryClient initialization here

const inter = Inter({ subsets: ['latin'] });

// Keep metadata export here (Server Component)
export const metadata: Metadata = {
  title: 'Couple Chronicle Haven',
  description: 'Your shared space for memories and moments.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Keep body className */}
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Use the ClientProviders component to wrap children */}
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
} 