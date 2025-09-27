"use client";

import Link from 'next/link';
import { Cog, Github, Twitter, Linkedin, Phone, Mail, ArrowUp } from 'lucide-react';
import { footerNav } from '@/lib/data';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Cog className="h-8 w-8" />
              <span className="text-xl font-bold font-headline">
                Global Auto Connect
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Your trusted source for quality OEM used auto parts with unbeatable prices and service.
            </p>
            <div className="flex space-x-2">
              <a href="tel:+19794524280" className="flex items-center text-sm hover:underline"><Phone className="h-4 w-4 mr-2" /> +1 (979) 452-4280</a>
            </div>
             <div className="flex space-x-2">
              <a href="mailto:info@connectglobalauto.site" className="flex items-center text-sm hover:underline"><Mail className="h-4 w-4 mr-2" /> info@connectglobalauto.site</a>
            </div>
          </div>

          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-primary-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Global Auto Connect. All rights reserved.
            </p>
            <div className='flex items-center gap-4'>
                <div className="flex space-x-4">
                    <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground"><Github className="h-5 w-5" /></Link>
                    <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground"><Twitter className="h-5 w-5" /></Link>
                    <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground"><Linkedin className="h-5 w-5" /></Link>
                </div>
                <ModeToggle />
            </div>
        </div>
      </div>
        <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-4 h-12 w-12 rounded-full"
            variant="secondary"
            size="icon"
        >
            <ArrowUp className="h-6 w-6" />
        </Button>
    </footer>
  );
};

export default Footer;