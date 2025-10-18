"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock10 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";

const contactImage = PlaceHolderImages.find((p) => p.id === "contact-us");

const GetQuoteSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // POST to central API
    await fetch("/api/send-form-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, subject: "Quote Request" }),
    });

    setSubmitting(false);
    setOpen(true);
    setForm({ name: "", email: "", phone: "", details: "" });
  }

  return (
    <section
      id="get-quote"
      className="relative py-16 md:py-24 bg-gradient-to-b from-blue-50 to-primary/40 overflow-hidden"
    >
      {/* Curvy wave at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path
            d="M321.39 56.09C212.09 68.86 106 116.91 0 120V0h1200v27.35c-82.87 26.4-177.16 45.93-267.7 38.21-96.8-8.24-186.24-52.59-284.26-59.28-111.19-7.36-219.44 32.21-326.65 49.81z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Curvy wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path
            d="M321.39 56.09C212.09 68.86 106 116.91 0 120V0h1200v27.35c-82.87 26.4-177.16 45.93-267.7 38.21-96.8-8.24-186.24-52.59-284.26-59.28-111.19-7.36-219.44 32.21-326.65 49.81z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container relative z-10 py-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Get Your Quote Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Ready to save big on quality OEM parts? Contact our experts for a personalized quote and let us help you find exactly what you need.
          </p>
        </div>

        <Card className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-0 shadow-2xl bg-card/50 backdrop-blur-sm border-primary/10">
          <CardContent className="p-6 md:p-10 flex flex-col justify-center">
            <h3 className="font-headline text-2xl font-bold mb-2">Request a Quote</h3>
            <p className="text-muted-foreground mb-6">We typically respond within 2 business hours.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input name="name" id="name" required placeholder="Your Name" value={form.name} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email *</Label>
                  <Input name="email" id="email" type="email" required placeholder="Your Email" value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Your Phone</Label>
                <Input name="phone" id="phone" type="tel" placeholder="Your Phone" value={form.phone} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Part Details *</Label>
                <Textarea
                  name="details"
                  id="details"
                  required
                  rows={5}
                  placeholder="Tell us about the part you need - include your vehicle year, make, model, and specific part requirements..."
                  value={form.details}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                {submitting ? "Sending..." : "Send Quote Request"}
              </Button>
            </form>
          </CardContent>
          <div className="relative min-h-[300px] lg:min-h-full">
            {contactImage && (
              <Image src="/images/contact.png" alt={contactImage.description} fill className="object-cover" data-ai-hint={contactImage.imageHint} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="font-headline text-2xl font-bold">Contact Information</h3>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+1 (979) 452-4280</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>info@connectglobalauto.site</span>
                </div>
                <div className="flex items-center">
                  <Clock10 className="h-5 w-5 mr-3" />
                  <span>Mon-Fri: 7AM-9PM EST</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Quote Sent</AlertDialogTitle>
              <AlertDialogDescription>
                Your quote request has been received! Our team will contact you soon.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
};

export default GetQuoteSection;
