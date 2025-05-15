import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./ui/button";
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from 'lucide-react';

const Header = () => {
  const { user, signOut } = useAuth();

  const getInitials = (name?: string) => {
    if (!name) return 'U';
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
  };

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="content-container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-serif font-bold text-design-charcoal">
            <Link to="/">RoomStyle <span className="text-design-terracotta">AI</span></Link>
          </div>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-design-terracotta transition-all-300">
            Home
          </Link>
          <Link to="/analyzer" className="text-sm font-medium text-gray-700 hover:text-design-terracotta transition-all-300">
            Room Analyzer
          </Link>
          <Link to="/inspiration" className="text-sm font-medium text-gray-700 hover:text-design-terracotta transition-all-300">
            Inspiration
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user.user_metadata.avatar_url} />
                  <AvatarFallback>{getInitials(user.user_metadata.full_name)}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/auth" className="hidden sm:block">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-design-terracotta hover:bg-design-terracotta/90 text-white">
                  Get Started
                </Button>
              </Link>
            </>
          )}
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-design-terracotta">
                  Home
                </Link>
                <Link to="/analyzer" className="text-lg font-medium hover:text-design-terracotta">
                  Room Analyzer
                </Link>
                <Link to="/inspiration" className="text-lg font-medium hover:text-design-terracotta">
                  Inspiration
                </Link>
                {!user && (
                  <Link to="/auth" className="text-lg font-medium hover:text-design-terracotta">
                    Sign In
                  </Link>
                )}
                {user && (
                  <>
                    <Link to="/settings" className="text-lg font-medium hover:text-design-terracotta">
                      Settings
                    </Link>
                    <Button variant="outline" onClick={() => signOut()}>
                      Sign Out
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
