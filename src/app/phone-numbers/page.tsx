"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Pencil, Trash2, Plus } from "lucide-react";

interface PhoneNumber {
  id: number;
  number: string;
}

export default function PhoneNumbersPage() {
  const [numbers, setNumbers] = useState<PhoneNumber[]>([]);
  const [newNumber, setNewNumber] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    if (!newNumber.trim()) return;

    if (editId !== null) {
      // update existing number
      setNumbers((prev) =>
        prev.map((n) => (n.id === editId ? { ...n, number: newNumber } : n))
      );
      setEditId(null);
    } else {
      // add new number
      setNumbers((prev) => [
        ...prev,
        { id: Date.now(), number: newNumber.trim() },
      ]);
    }

    setNewNumber("");
  };

  const handleEdit = (id: number) => {
    const num = numbers.find((n) => n.id === id);
    if (num) {
      setNewNumber(num.number);
      setEditId(id);
    }
  };

  const handleDelete = (id: number) => {
    setNumbers((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted/30">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Manage Phone Numbers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Enter phone number"
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
              />
              <Button onClick={handleAddOrUpdate} className="shrink-0">
                {editId ? "Update" : "Add"}
              </Button>
            </div>

            <Separator />

            {numbers.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground">
                No numbers added yet.
              </p>
            ) : (
              <ul className="space-y-2">
                {numbers.map((num) => (
                  <li
                    key={num.id}
                    className="flex justify-between items-center border rounded-md p-2"
                  >
                    <span>{num.number}</span>
                    <div className="flex space-x-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleEdit(num.id)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDelete(num.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
