"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Cog,
  Github,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";
import { footerNav } from "@/lib/data"; // keep if you already have this
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import type { PhoneEntry } from "@/types/site";

export default function Footer() {
  const [phones, setPhones] = useState<PhoneEntry[]>([]);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    fetch("/api/site-info")
      .then((res) => res.json())
      .then((data) => {
        setPhones(data?.phones ?? []);
        setEmail(data?.email ?? "");
      })
      .catch((err) => {
        console.error("Failed to load site-info:", err);
      });
  }, []);

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
              Your trusted source for quality OEM used auto parts with unbeatable
              prices and service.
            </p>

            {/* Dynamic phones */}
            {phones.map((p, i) => (
              <div key={i} className="flex space-x-2">
                <a
                  href={`tel:${p.number}`}
                  className="flex items-center text-sm hover:underline"
                >
                  <Phone className="h-4 w-4 mr-2" /> {p.label}: {p.number}
                </a>
              </div>
            ))}

            {/* Email */}
            {email && (
              <div className="flex space-x-2">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center text-sm hover:underline"
                >
                  <Mail className="h-4 w-4 mr-2" /> {email}
                </a>
              </div>
            )}
          </div>

          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-primary-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                    >
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
            © {new Date().getFullYear()} Global Auto Connect. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>

      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full"
        variant="secondary"
        size="icon"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </footer>
  );
}
