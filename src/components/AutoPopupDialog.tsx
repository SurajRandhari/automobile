import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, Car } from "lucide-react";

export default function AutoPopupDialog() {
  // State for modal visibility and form
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(typeof window !== "undefined" && localStorage.getItem("form-submitted") === "true");
  const [form, setForm] = useState({ name: "", email: "", phone: "", part: "" });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Handler for auto popup
  const openModalWithDelay = (delay) => {
    if (submitted) return;
    timerRef.current = setTimeout(() => {
      setOpen(true);
    }, delay);
  };

  useEffect(() => {
    // On mount, show after 10 seconds
    openModalWithDelay(10000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [submitted]);

  // If closed, restart 20s timer
  useEffect(() => {
    if (!open && !submitted) {
      // If manually closed, reopen after 20s
      openModalWithDelay(20000);
    }
    // If submitted, do not show again
  }, [open, submitted]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    // ---- SEND TO YOUR EMAIL ----
    // You can use an API/endpoint/serverless function here
    // Example: trigger a POST to an /api/send-contact endpoint
    await fetch("/api/send-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    localStorage.setItem("form-submitted", "true");
    setSubmitted(true);
    setOpen(false);
  };

  // Do not render if already submitted
  if (submitted) return null;

  return (
  <Dialog open={open} onOpenChange={setOpen}>
  <DialogContent
    className="
      sm:max-w-[400px]
      rounded-2xl
      border border-primary/20
      shadow-2xl
      bg-white/80
      backdrop-blur-lg
      p-8
      transition-all
      duration-500
      data-[state=open]:animate-in data-[state=open]:fade-in-50 data-[state=open]:zoom-in-90
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
    "
  >
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
      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition"
      >
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
