"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Phone, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const FindPartSection = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    part: "",
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // Fetch name, email, phone from localStorage
    let userInfo = { name: "", email: "", phone: "" };
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("popup-form-values");
      if (stored) {
        try {
          userInfo = JSON.parse(stored);
        } catch {}
      }
    }

    // Send all 7 fields
    const payload = {
      ...userInfo,
      brand: form.brand,
      model: form.model,
      year: form.year,
      part: form.part,
    };

    await fetch("/api/send-part-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSubmitting(false);
    setOpen(true);
    setForm({ brand: "", model: "", year: "", part: "" });
  }

  return (
    <section
      id="find-part"
      className="py-16 md:py-14"
      style={{
        backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #3b82f6 100%)
        `,
      }}
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-semibold tracking-tight sm:text-4xl">
            Find Your Perfect Part
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Search our massive inventory for guaranteed compatibility.
          </p>
        </div>

        <Card
          className="p-6 md:py-8 md:px-10 rounded-xl shadow-2xl bg-card/50 backdrop-blur-sm border-primary/10"
          style={{ background: "white" }}
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 h-[500px] flex justify-center items-center">
              <img
                src="/images/find.jpg"
                alt="Car Part"
                className="rounded-lg shadow-lg w-full h-[100%] object-cover"
              />
            </div>
            <CardContent className="w-full md:w-1/2 p-0">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand</Label>
                    <Input
                      id="brand"
                      name="brand"
                      value={form.brand}
                      onChange={handleChange}
                      placeholder="e.g. Kia"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input
                      id="model"
                      name="model"
                      value={form.model}
                      onChange={handleChange}
                      placeholder="e.g. Sorento"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      name="year"
                      value={form.year}
                      onChange={handleChange}
                      placeholder="e.g. 2023"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="part">Part</Label>
                    <Input
                      id="part"
                      name="part"
                      value={form.part}
                      onChange={handleChange}
                      placeholder="e.g. Engine"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" disabled={submitting} className="mt-8 w-full" size="lg">
                  <Search className="mr-2 h-4 w-4" />
                  {submitting ? "Submitting..." : "Search Available Parts"}
                </Button>
              </form>
            </CardContent>
          </div>
        </Card>

        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Your part is available</AlertDialogTitle>
              <AlertDialogDescription>
                Your part is available, please contact us to finalize your order.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="sm:flex-col sm:space-y-2">
              <Button asChild>
                <a href="tel:+19794524280">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 (979) 452-4280
                </a>
              </Button>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Continue Searching
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
};

export default FindPartSection;
