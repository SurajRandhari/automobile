"use client";

import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Car } from "lucide-react";

function getInitialForm() {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("popup-form-values");
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
  }
  return { name: "", email: "", phone: "", part: "" };
}

export default function AutoPopupDialog() {
  // Don't use useState to check localStorage directly, do it inEffect...
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(getInitialForm());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to control the popup timer based on whether user has submitted
  const schedulePopup = (ms: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(true), ms);
  };

  // On mount: Only schedule if not already submitted
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isSubmitted = localStorage.getItem("popup-form-submitted") === "true";
      setSubmitted(isSubmitted);
      if (!isSubmitted) {
        schedulePopup(20000); // 20 sec first popup
      }
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // If popup is closed (not submitted), show again after 40 sec
  useEffect(() => {
    if (!open && !submitted) {
      // Only schedule if not already submitted and dialog just closed
      schedulePopup(40000); // 40 sec for subsequent popups
    }
  }, [open, submitted]);

  // When user submits:
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/send-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (typeof window !== "undefined") {
      localStorage.setItem("popup-form-submitted", "true");
      localStorage.setItem("popup-form-values", JSON.stringify(form));
    }
    setSubmitted(true);
    setOpen(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fields = { ...form, [e.target.name]: e.target.value };
    setForm(fields);
    if (typeof window !== "undefined") {
      localStorage.setItem("popup-form-values", JSON.stringify(fields));
    }
  };

  if (submitted) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[400px] rounded-2xl border border-primary/20 shadow-2xl bg-white/80 backdrop-blur-lg p-8">
        <div className="flex justify-center mb-2">
          <Car className="h-10 w-10 text-primary drop-shadow" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-headline text-center">Get Your Perfect Part</DialogTitle>
          <DialogDescription className="mt-1 text-center text-muted-foreground">
            Fill in your details below – our team will contact you quickly!
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-lg border-primary/20"
          />
          <Input
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
            className="rounded-lg border-primary/20"
          />
          <Input
            placeholder="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            required
            className="rounded-lg border-primary/20"
          />
          <Input
            placeholder="Parts Needed"
            name="part"
            value={form.part}
            onChange={handleChange}
            required
            className="rounded-lg border-primary/20"
          />
          <Button type="submit" className="w-full bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition">
            Submit
          </Button>
        </form>
        <div className="mt-2 flex justify-center space-x-8 text-xs text-muted-foreground">
          <div className="flex items-center gap-1"><Mail className="h-4 w-4" /> info@connectglobalauto.site</div>
          <div className="flex items-center gap-1"><Phone className="h-4 w-4" /> +1 (979) 452-4280</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
