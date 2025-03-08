
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 bg-white/50 backdrop-blur-sm border-t border-slate-200/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 font-display text-xl font-medium mb-4">
              <Heart className="h-5 w-5 text-slate-800 stroke-[1.5px]" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
                Together
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              A beautiful space to document your journey as a couple.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@together-app.com" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-slate-500 mb-4 sm:mb-0">
            © {currentYear} Together. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
