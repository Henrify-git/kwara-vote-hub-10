import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Menu, X, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Crown className="h-8 w-8 text-primary" />
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Kwara Vendors Award
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/categories"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/categories") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Categories
            </Link>
            <Link
              to="/admin"
              className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                isActive("/admin") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Shield className="h-4 w-4" />
              Admin
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/categories"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/categories") ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/admin"
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  isActive("/admin") ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Shield className="h-4 w-4" />
                Admin
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};