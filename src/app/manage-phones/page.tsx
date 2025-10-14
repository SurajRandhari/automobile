"use client";
import { usePhoneNumbers } from "@/context/PhoneNumbersContext";
import { useState } from "react";

const ManagePhonesPage = () => {
  const { phoneNumbers, addPhoneNumber, updatePhoneNumber, removePhoneNumber } = usePhoneNumbers();
  const [newLabel, setNewLabel] = useState("");
  const [newHref, setNewHref] = useState("");

  return (
    <div>
      <h2>Edit Phone Numbers</h2>
      <ul>
        {phoneNumbers.map((phone, idx) => (
          <li key={idx}>
            {phone.label}{" "}
            <button onClick={() => removePhoneNumber(idx)}>Remove</button>
            {/* Edit UI can be added */}
          </li>
        ))}
      </ul>

      <h3>Add New Phone</h3>
      <input
        type="text"
        value={newLabel}
        onChange={e => setNewLabel(e.target.value)}
        placeholder="Enter label"
      />
      <input
        type="text"
        value={newHref}
        onChange={e => setNewHref(e.target.value)}
        placeholder="tel:+123456789"
      />
      <button
        onClick={() => {
          addPhoneNumber({ label: newLabel, href: newHref });
          setNewLabel(""); setNewHref("");
        }}
      >
        Add Phone
      </button>
    </div>
  );
};

export default ManagePhonesPage;
