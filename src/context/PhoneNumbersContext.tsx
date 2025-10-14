"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface PhoneNumber {
  label: string;
  href: string;
}

interface PhoneNumbersContextType {
  phoneNumbers: PhoneNumber[];
  addPhoneNumber: (num: PhoneNumber) => void;
  updatePhoneNumber: (index: number, num: PhoneNumber) => void;
  removePhoneNumber: (index: number) => void;
}

const PhoneNumbersContext = createContext<PhoneNumbersContextType | undefined>(undefined);

export const PhoneNumbersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>([
    { label: "+1 (979) 452-4280", href: "tel:+19794524280" }
  ]);

  const addPhoneNumber = (num: PhoneNumber) =>
    setPhoneNumbers((phones) => [...phones, num]);

  const updatePhoneNumber = (index: number, num: PhoneNumber) =>
    setPhoneNumbers((phones) =>
      phones.map((p, i) => (i === index ? num : p))
    );

  const removePhoneNumber = (index: number) =>
    setPhoneNumbers((phones) => phones.filter((_, i) => i !== index));

  return (
    <PhoneNumbersContext.Provider
      value={{ phoneNumbers, addPhoneNumber, updatePhoneNumber, removePhoneNumber }}
    >
      {children}
    </PhoneNumbersContext.Provider>
  );
};

export function usePhoneNumbers() {
  const ctx = useContext(PhoneNumbersContext);
  if (!ctx) throw new Error("usePhoneNumbers must be used within PhoneNumbersProvider");
  return ctx;
}
