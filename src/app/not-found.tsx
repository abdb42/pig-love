'use client'; // Needed for hooks like useEffect and event handlers like onClick

import React, { useEffect } from "react"; // Added React import
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Use next/navigation for path
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
// import Header from "@/components/layout/Header"; // Removed
// import Footer from "@/components/layout/Footer"; // Removed
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() { // Export default function directly
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    // Log error client-side
    console.error(
      `404 Error: User attempted to access non-existent route: ${pathname}`
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* <Header /> */}{/* Removed */}

      <main className="flex-grow pt-32 pb-16 flex items-center">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-9xl font-bold text-slate-200 mb-6">404</h1>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Page not found
            </h2>
            <p className="text-slate-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/"> {/* Changed to href */}
                <Button 
                  variant="default" 
                  className="bg-slate-900 text-white hover:bg-slate-800 w-full sm:w-auto"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              {/* Consider using next/navigation useRouter().back() instead if complex back logic needed */}
              <Button 
                variant="outline" 
                className="border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 w-full sm:w-auto"
                onClick={() => window.history.back()} // Keep simple back for now
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>
          </div>
        </Container>
      </main>

      {/* <Footer /> */}{/* Removed */}
    </div>
  );
} 