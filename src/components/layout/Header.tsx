
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Journal", path: "/journal" },
    { name: "About", path: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 font-display text-xl font-medium"
        >
          <Heart className="h-6 w-6 text-slate-800 stroke-[1.5px]" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            Together
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-200 relative group",
                location.pathname === link.path
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-[1px] bg-slate-900 transform origin-left transition-transform duration-300",
                  location.pathname === link.path
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="default"
            className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-5 py-2 h-auto shadow-sm"
          >
            New Entry
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-[72px] left-0 right-0 bottom-0 bg-white/95 backdrop-blur-lg md:hidden transition-all duration-300 ease-in-out transform z-40",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-start pt-8 space-y-6 px-6 h-full">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-lg font-medium py-2 w-full text-center transition-colors duration-200",
                location.pathname === link.path
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 w-full">
            <Button
              variant="default"
              className="rounded-full w-full bg-slate-900 text-white hover:bg-slate-800 px-5 py-6 h-auto"
            >
              New Entry
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
