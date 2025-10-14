"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Trash2, PlusCircle, Save } from "lucide-react";
import type { PhoneEntry, SiteInfo } from "@/types/site";

export default function ManageContactPage() {
  const [phones, setPhones] = useState<PhoneEntry[]>([]);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    fetch("/api/site-info")
      .then((res) => res.json())
      .then((data: SiteInfo) => {
        setPhones(data?.phones ?? []);
        setEmail(data?.email ?? "");
      })
      .catch((err) => {
        console.error("Failed to fetch site info:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const handlePhoneChange = (index: number, field: keyof PhoneEntry, value: string) => {
    setPhones((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addPhone = () => setPhones((prev) => [...prev, { label: "", number: "" }]);

  const deletePhone = (index: number) => setPhones((prev) => prev.filter((_, i) => i !== index));

  const saveChanges = async () => {
    try {
      const res = await fetch("/api/site-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phones, email }),
      });
      const json = await res.json();
      if (json.success) {
        setMsg("✅ Contact info updated!");
        setTimeout(() => setMsg(""), 3000);
      } else {
        setMsg("❌ Failed to save.");
      }
    } catch (err) {
      console.error(err);
      setMsg("❌ Error saving. Check console.");
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="container py-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Manage Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1"
              placeholder="info@yourdomain.com"
            />
          </div>

          <Separator />

          {/* Phones */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Phone Numbers</Label>
              <Button onClick={addPhone} variant="secondary" size="sm" className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" /> Add Number
              </Button>
            </div>

            {phones.length === 0 && <p className="text-sm text-muted-foreground">No phone numbers added yet.</p>}

            {phones.map((p, i) => (
              <div key={i} className="flex items-center gap-2 border p-3 rounded-md">
                <Input
                  placeholder="Label (e.g., Sales)"
                  value={p.label}
                  onChange={(e) => handlePhoneChange(i, "label", e.target.value)}
                  className="w-1/3"
                />
                <Input
                  placeholder="Phone Number"
                  value={p.number}
                  onChange={(e) => handlePhoneChange(i, "number", e.target.value)}
                  className="flex-1"
                />
                <Button onClick={() => deletePhone(i)} variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="flex justify-end items-center gap-4">
            {msg && <p className="text-sm text-green-600">{msg}</p>}
            <Button onClick={saveChanges} className="flex items-center gap-2">
              <Save className="h-4 w-4" /> Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
