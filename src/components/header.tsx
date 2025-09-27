"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Cog, Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/lib/data';
import type { NavItem } from '@/lib/types';
import { ModeToggle } from './mode-toggle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Cog className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg sm:inline-block">
              Global Auto Connect
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex lg:items-center lg:gap-6 text-sm">
          {navItems.map((item: NavItem) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <div className="hidden sm:flex items-center space-x-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a href="tel:+19794524280" className="text-sm font-medium hover:underline">+1 (979) 452-4280</a>
          </div>
          
          <div className="hidden lg:block">
            <ModeToggle />
          </div>

          <Button className="hidden sm:inline-flex" size="sm" asChild>
            <Link href="#get-quote">Request a Quote</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="lg:hidden px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 w-full max-w-sm">
              <Link
                href="/"
                className="mr-6 flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Cog className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Global Auto Connect</span>
              </Link>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg text-muted-foreground hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pl-6 space-y-4">
                <Button className="w-full" asChild>
                  <Link href="#get-quote" onClick={() => setIsMobileMenuOpen(false)}>Request a Quote</Link>
                </Button>
                <div className="lg:hidden">
                    <ModeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
